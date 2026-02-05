import { useEffect, useRef } from "react";
import * as THREE from "three";

interface DataVisualization3DProps {
  className?: string;
}

interface DataNode {
  id: string;
  position: THREE.Vector3;
  type: "table" | "api" | "warehouse" | "analytics";
  connections: string[];
  mesh?: THREE.Mesh;
  label?: string;
}

export function DataVisualization3D({ className = "" }: DataVisualization3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCanvasRef = useRef<HTMLCanvasElement>(null);
  const rightCanvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<{
    left: {
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      renderer: THREE.WebGLRenderer;
      nodes: DataNode[];
      connections: THREE.Line[];
      particles: THREE.Points;
      animationId: number;
    };
    right: {
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      renderer: THREE.WebGLRenderer;
      nodes: DataNode[];
      connections: THREE.Line[];
      particles: THREE.Points;
      animationId: number;
    };
  } | null>(null);

  const createScene = (
    canvas: HTMLCanvasElement,
    side: "left" | "right"
  ) => {
    const width = canvas.width;
    const height = canvas.height;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060608, 0.0008);

    // Camera - positioned to view from the side
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    if (side === "left") {
      camera.position.set(-25, 0, 50);
      camera.lookAt(-15, 0, 0);
    } else {
      camera.position.set(25, 0, 50);
      camera.lookAt(15, 0, 0);
    }

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x060608, 0);

    // Elegant color palette for data visualization
    const colors = {
      table: new THREE.Color(0xa855f7),
      api: new THREE.Color(0xec4899),
      warehouse: new THREE.Color(0x22d3ee),
      analytics: new THREE.Color(0xc4b5fd),
      connection: new THREE.Color(0x14b8a6),
      particle: new THREE.Color(0x8b5cf6),
    };

    // Create data nodes - offset based on side
    const offsetX = side === "left" ? -15 : 15;
    const nodes: DataNode[] = [
      {
        id: "users",
        position: new THREE.Vector3(offsetX - 5, 12, 0),
        type: "table",
        connections: ["orders", "analytics"],
        label: "Users",
      },
      {
        id: "orders",
        position: new THREE.Vector3(offsetX, 18, -8),
        type: "table",
        connections: ["products", "analytics"],
        label: "Orders",
      },
      {
        id: "products",
        position: new THREE.Vector3(offsetX + 5, 12, 0),
        type: "table",
        connections: ["warehouse", "analytics"],
        label: "Products",
      },
      {
        id: "warehouse",
        position: new THREE.Vector3(offsetX + 3, -8, -12),
        type: "warehouse",
        connections: ["analytics", "api"],
        label: "Warehouse",
      },
      {
        id: "api",
        position: new THREE.Vector3(offsetX - 3, -8, -12),
        type: "api",
        connections: ["analytics"],
        label: "API",
      },
      {
        id: "analytics",
        position: new THREE.Vector3(offsetX, -18, 8),
        type: "analytics",
        connections: [],
        label: "Analytics",
      },
    ];

    // Create 3D database table structures
    const nodeMeshes: THREE.Mesh[] = [];
    const connectionLines: THREE.Line[] = [];

    nodes.forEach((node) => {
      let geometry: THREE.BufferGeometry;
      let material: THREE.MeshStandardMaterial;

      switch (node.type) {
        case "table":
          geometry = new THREE.BoxGeometry(3, 2.5, 1.5);
          material = new THREE.MeshStandardMaterial({
            color: colors.table,
            emissive: colors.table,
            emissiveIntensity: 0.3,
            metalness: 0.7,
            roughness: 0.3,
            transparent: true,
            opacity: 0.9,
          });
          break;
        case "warehouse":
          geometry = new THREE.BoxGeometry(5, 4, 3);
          material = new THREE.MeshStandardMaterial({
            color: colors.warehouse,
            emissive: colors.warehouse,
            emissiveIntensity: 0.4,
            metalness: 0.8,
            roughness: 0.2,
            transparent: true,
            opacity: 0.85,
          });
          break;
        case "api":
          geometry = new THREE.CylinderGeometry(2, 2, 3, 8);
          material = new THREE.MeshStandardMaterial({
            color: colors.api,
            emissive: colors.api,
            emissiveIntensity: 0.35,
            metalness: 0.6,
            roughness: 0.4,
            transparent: true,
            opacity: 0.9,
          });
          break;
        case "analytics":
          geometry = new THREE.OctahedronGeometry(3);
          material = new THREE.MeshStandardMaterial({
            color: colors.analytics,
            emissive: colors.analytics,
            emissiveIntensity: 0.5,
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.9,
          });
          break;
        default:
          geometry = new THREE.BoxGeometry(3, 3, 3);
          material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      }

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(node.position);
      mesh.userData = { nodeId: node.id, type: node.type };
      scene.add(mesh);
      nodeMeshes.push(mesh);
      node.mesh = mesh;

      // Add glow effect
      const glowGeometry = geometry.clone();
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: material.color,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(node.position);
      glowMesh.scale.multiplyScalar(1.2);
      scene.add(glowMesh);
    });

    // Create animated connections
    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        const targetNode = nodes.find((n) => n.id === targetId);
        if (!targetNode) return;

        const points: THREE.Vector3[] = [];
        const segments = 20;
        
        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const start = node.position.clone();
          const end = targetNode.position.clone();
          const point = new THREE.Vector3().lerpVectors(start, end, t);
          point.y = THREE.MathUtils.lerp(start.y, end.y, t) + Math.sin(t * Math.PI) * 2;
          points.push(point);
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: colors.connection,
          transparent: true,
          opacity: 0.4,
        });

        const line = new THREE.Line(geometry, material);
        scene.add(line);
        connectionLines.push(line);
      });
    });

    // Create data flow particles
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      const radius = 1.5 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = randomNode.position.x + radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = randomNode.position.y + radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = randomNode.position.z + radius * Math.cos(phi);

      velocities[i3] = (Math.random() - 0.5) * 0.08;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.08;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.08;

      const colorChoice = Math.random();
      let color: THREE.Color;
      if (colorChoice < 0.3) color = colors.particle;
      else if (colorChoice < 0.6) color = colors.api;
      else color = colors.warehouse;

      particleColors[i3] = color.r;
      particleColors[i3 + 1] = color.g;
      particleColors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 1.2 + 0.4;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float pulse = sin(time * 2.0 + position.x * 0.1) * 0.3 + 0.7;
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z) * pulse;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
          vec3 glowColor = vColor * (1.0 + alpha * 0.8);
          gl_FragColor = vec4(glowColor, alpha * 0.9);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(colors.table, 1.5, 100);
    pointLight1.position.set(offsetX + 15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colors.api, 1.2, 100);
    pointLight2.position.set(offsetX - 15, -15, 15);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(colors.warehouse, 1.0, 100);
    pointLight3.position.set(offsetX, 0, 25);
    scene.add(pointLight3);

    // Animation
    let time = 0;
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      time = clock.getElapsedTime();
      particleMaterial.uniforms.time.value = time;

      // Animate nodes
      nodeMeshes.forEach((mesh, index) => {
        const node = nodes[index];
        if (!node) return;

        mesh.position.y = node.position.y + Math.sin(time * 0.5 + index) * 1.2;
        mesh.rotation.y = time * 0.2 + index;
        mesh.rotation.x = Math.sin(time * 0.3 + index) * 0.1;

        if (node.type === "analytics") {
          const scale = 1 + Math.sin(time * 2) * 0.1;
          mesh.scale.set(scale, scale, scale);
        }
      });

      // Animate connection lines
      connectionLines.forEach((line) => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        const segments = positions.length / 3 - 1;
        
        for (let i = 0; i <= segments; i++) {
          const i3 = i * 3;
          const t = i / segments;
          const wave = Math.sin(time * 2 + t * Math.PI * 2) * 0.5;
          positions[i3 + 1] += wave * 0.1;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      // Animate particles
      const particlePositions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        particlePositions[i3] += velocities[i3];
        particlePositions[i3 + 1] += velocities[i3 + 1];
        particlePositions[i3 + 2] += velocities[i3 + 2];

        let nearestNode = nodes[0];
        let minDist = Infinity;
        const currentPos = new THREE.Vector3(
          particlePositions[i3],
          particlePositions[i3 + 1],
          particlePositions[i3 + 2]
        );

        nodes.forEach((node) => {
          const dist = currentPos.distanceTo(node.position);
          if (dist < minDist) {
            minDist = dist;
            nearestNode = node;
          }
        });

        const direction = new THREE.Vector3()
          .subVectors(nearestNode.position, currentPos)
          .normalize()
          .multiplyScalar(0.02);
        
        velocities[i3] += direction.x;
        velocities[i3 + 1] += direction.y;
        velocities[i3 + 2] += direction.z;

        velocities[i3] *= 0.98;
        velocities[i3 + 1] *= 0.98;
        velocities[i3 + 2] *= 0.98;

        if (currentPos.length() > 80) {
          const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
          particlePositions[i3] = randomNode.position.x + (Math.random() - 0.5) * 4;
          particlePositions[i3 + 1] = randomNode.position.y + (Math.random() - 0.5) * 4;
          particlePositions[i3 + 2] = randomNode.position.z + (Math.random() - 0.5) * 4;
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Gentle camera movement
      if (side === "left") {
        camera.position.x = -25 + Math.sin(time * 0.1) * 2;
        camera.position.y = Math.cos(time * 0.15) * 2;
        camera.lookAt(-15, 0, 0);
      } else {
        camera.position.x = 25 + Math.sin(time * 0.1) * 2;
        camera.position.y = Math.cos(time * 0.15) * 2;
        camera.lookAt(15, 0, 0);
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return { scene, camera, renderer, nodes, connections: connectionLines, particles, animationId: animationId || 0 };
  };

  useEffect(() => {
    if (!containerRef.current || !leftCanvasRef.current || !rightCanvasRef.current) return;

    const container = containerRef.current;
    const leftCanvas = leftCanvasRef.current;
    const rightCanvas = rightCanvasRef.current;

    // Set canvas sizes
    const updateCanvasSize = () => {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const canvasWidth = Math.min(containerWidth / 2, 400);
      const canvasHeight = containerHeight;

      leftCanvas.width = canvasWidth;
      leftCanvas.height = canvasHeight;
      rightCanvas.width = canvasWidth;
      rightCanvas.height = canvasHeight;
    };

    updateCanvasSize();

    // Create left scene
    const leftSceneData = createScene(leftCanvas, "left");
    
    // Create right scene
    const rightSceneData = createScene(rightCanvas, "right");

    sceneRef.current = {
      left: leftSceneData,
      right: rightSceneData,
    };

    const handleResize = () => {
      updateCanvasSize();
      if (sceneRef.current) {
        const newWidth = leftCanvas.width;
        const newHeight = leftCanvas.height;
        
        sceneRef.current.left.camera.aspect = newWidth / newHeight;
        sceneRef.current.left.camera.updateProjectionMatrix();
        sceneRef.current.left.renderer.setSize(newWidth, newHeight);
        
        sceneRef.current.right.camera.aspect = newWidth / newHeight;
        sceneRef.current.right.camera.updateProjectionMatrix();
        sceneRef.current.right.renderer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (sceneRef.current) {
        if (sceneRef.current.left.animationId) {
          cancelAnimationFrame(sceneRef.current.left.animationId);
        }
        if (sceneRef.current.right.animationId) {
          cancelAnimationFrame(sceneRef.current.right.animationId);
        }
        
        // Cleanup left
        sceneRef.current.left.renderer.dispose();
        sceneRef.current.left.particles.geometry.dispose();
        if (Array.isArray(sceneRef.current.left.particles.material)) {
          sceneRef.current.left.particles.material.forEach(m => m.dispose());
        } else {
          sceneRef.current.left.particles.material.dispose();
        }
        
        // Cleanup right
        sceneRef.current.right.renderer.dispose();
        sceneRef.current.right.particles.geometry.dispose();
        if (Array.isArray(sceneRef.current.right.particles.material)) {
          sceneRef.current.right.particles.material.forEach(m => m.dispose());
        } else {
          sceneRef.current.right.particles.material.dispose();
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full flex ${className}`}
      style={{ zIndex: 0 }}
    >
      {/* Left side canvas */}
      <canvas
        ref={leftCanvasRef}
        className="absolute left-0 top-0 h-full"
        style={{ width: "min(50vw, 400px)" }}
      />
      
      {/* Right side canvas */}
      <canvas
        ref={rightCanvasRef}
        className="absolute right-0 top-0 h-full"
        style={{ width: "min(50vw, 400px)" }}
      />
    </div>
  );
}
