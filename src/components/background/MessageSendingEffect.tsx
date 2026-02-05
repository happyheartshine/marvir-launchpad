import { useEffect, useRef } from "react";
import * as THREE from "three";

interface MessageSendingEffectProps {
  className?: string;
}

interface Message {
  id: number;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  target: THREE.Vector3;
  progress: number;
  color: THREE.Color;
  size: number;
}

export function MessageSendingEffect({ className = "" }: MessageSendingEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    messages: Message[];
    particles: THREE.Points;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060608, 0.001);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 50);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x060608, 0);
    container.appendChild(renderer.domElement);

    // Elegant color palette
    const colors = {
      primary: new THREE.Color(0xa855f7),    // Purple
      pink: new THREE.Color(0xec4899),       // Pink
      cyan: new THREE.Color(0x22d3ee),       // Cyan
      lavender: new THREE.Color(0xc4b5fd),   // Lavender
      teal: new THREE.Color(0x14b8a6),      // Teal
    };

    // Create message objects (representing emails/messages being sent)
    const messages: Message[] = [];
    const messageCount = 15;

    for (let i = 0; i < messageCount; i++) {
      const startX = (Math.random() - 0.5) * 40;
      const startY = (Math.random() - 0.5) * 30;
      const startZ = -30 + Math.random() * 20;
      
      const endX = (Math.random() - 0.5) * 40;
      const endY = (Math.random() - 0.5) * 30;
      const endZ = 30 + Math.random() * 20;

      const colorChoices = [colors.primary, colors.pink, colors.cyan, colors.lavender, colors.teal];
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];

      messages.push({
        id: i,
        position: new THREE.Vector3(startX, startY, startZ),
        velocity: new THREE.Vector3(0, 0, 0),
        target: new THREE.Vector3(endX, endY, endZ),
        progress: Math.random(),
        color,
        size: 0.8 + Math.random() * 0.4,
      });
    }

    // Create message meshes (envelope-like shapes)
    const messageMeshes: THREE.Mesh[] = [];
    messages.forEach((message) => {
      // Create envelope shape (rectangular with slight tilt)
      const geometry = new THREE.BoxGeometry(message.size * 2, message.size * 1.5, message.size * 0.3);
      const material = new THREE.MeshStandardMaterial({
        color: message.color,
        emissive: message.color,
        emissiveIntensity: 0.4,
        metalness: 0.6,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(message.position);
      mesh.rotation.z = Math.PI * 0.1; // Slight tilt like an envelope
      scene.add(mesh);
      messageMeshes.push(mesh);

      // Add glow effect
      const glowGeometry = geometry.clone();
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: message.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.BackSide,
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(message.position);
      glowMesh.rotation.z = Math.PI * 0.1;
      glowMesh.scale.multiplyScalar(1.3);
      scene.add(glowMesh);
    });

    // Create trail particles (following messages)
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const messageIndex = i % messageCount;
      const message = messages[messageIndex];
      
      const t = (i / particleCount) * 0.5;
      const pos = new THREE.Vector3().lerpVectors(
        message.position,
        message.target,
        t
      );
      
      positions[i3] = pos.x + (Math.random() - 0.5) * 2;
      positions[i3 + 1] = pos.y + (Math.random() - 0.5) * 2;
      positions[i3 + 2] = pos.z + (Math.random() - 0.5) * 2;

      particleColors[i3] = message.color.r;
      particleColors[i3 + 1] = message.color.g;
      particleColors[i3 + 2] = message.color.b;

      sizes[i] = Math.random() * 0.8 + 0.3;
      opacities[i] = Math.random() * 0.5 + 0.3;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    particleGeometry.setAttribute("opacity", new THREE.BufferAttribute(opacities, 1));

    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        pixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        attribute float opacity;
        varying vec3 vColor;
        varying float vOpacity;
        uniform float time;
        uniform float pixelRatio;
        
        void main() {
          vColor = color;
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          float pulse = sin(time * 3.0 + position.x * 0.1) * 0.2 + 0.8;
          gl_PointSize = size * pixelRatio * (300.0 / -mvPosition.z) * pulse;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vOpacity;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float alpha = (1.0 - smoothstep(0.0, 0.5, distanceToCenter)) * vOpacity;
          
          vec3 glowColor = vColor * (1.0 + alpha * 0.6);
          gl_FragColor = vec4(glowColor, alpha * 0.8);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connection lines between messages (network effect)
    const connectionLines: THREE.Line[] = [];
    for (let i = 0; i < messages.length; i++) {
      for (let j = i + 1; j < messages.length; j++) {
        if (Math.random() > 0.7) { // 30% chance of connection
          const geometry = new THREE.BufferGeometry().setFromPoints([
            messages[i].position,
            messages[j].position,
          ]);
          const material = new THREE.LineBasicMaterial({
            color: colors.primary,
            transparent: true,
            opacity: 0.15,
          });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          connectionLines.push(line);
        }
      }
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(colors.primary, 1.2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colors.pink, 1.0, 100);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    // Animation
    let time = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      time = clock.getElapsedTime();
      particleMaterial.uniforms.time.value = time;

      // Animate messages (flying from start to target)
      messages.forEach((message, index) => {
        message.progress += 0.005;
        if (message.progress > 1) {
          message.progress = 0;
          // Reset to new random position
          message.position.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            -30 + Math.random() * 20
          );
          message.target.set(
            (Math.random() - 0.5) * 40,
            (Math.random() - 0.5) * 30,
            30 + Math.random() * 20
          );
        }

        // Interpolate position
        message.position.lerp(message.target, 0.02);
        
        // Update mesh position
        const mesh = messageMeshes[index];
        if (mesh) {
          mesh.position.copy(message.position);
          
          // Gentle floating animation
          mesh.rotation.y = time * 0.5 + index;
          mesh.rotation.z = Math.PI * 0.1 + Math.sin(time + index) * 0.1;
          
          // Scale pulse
          const scale = 1 + Math.sin(time * 2 + index) * 0.1;
          mesh.scale.set(scale, scale, scale);
        }
      });

      // Update connection lines
      connectionLines.forEach((line, index) => {
        const i = Math.floor(index / (messages.length - 1));
        const j = (index % (messages.length - 1)) + 1;
        if (i < messages.length && j < messages.length) {
          const geometry = line.geometry as THREE.BufferGeometry;
          const positions = geometry.attributes.position.array as Float32Array;
          positions[0] = messages[i].position.x;
          positions[1] = messages[i].position.y;
          positions[2] = messages[i].position.z;
          positions[3] = messages[j].position.x;
          positions[4] = messages[j].position.y;
          positions[5] = messages[j].position.z;
          geometry.attributes.position.needsUpdate = true;
        }
      });

      // Update trail particles
      const particlePositions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const messageIndex = i % messageCount;
        const message = messages[messageIndex];
        
        // Follow message with offset
        const offset = (i % 10) * 0.3;
        const t = (message.progress - offset) % 1;
        const pos = new THREE.Vector3().lerpVectors(
          message.position,
          message.target,
          t
        );
        
        particlePositions[i3] = pos.x + (Math.random() - 0.5) * 1.5;
        particlePositions[i3 + 1] = pos.y + (Math.random() - 0.5) * 1.5;
        particlePositions[i3 + 2] = pos.z + (Math.random() - 0.5) * 1.5;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Gentle camera movement
      camera.position.x = Math.sin(time * 0.1) * 3;
      camera.position.y = Math.cos(time * 0.15) * 3;
      camera.lookAt(0, 0, 0);

      // Rotate lights
      pointLight1.position.x = 20 + Math.sin(time * 0.2) * 5;
      pointLight1.position.y = 20 + Math.cos(time * 0.2) * 5;
      pointLight2.position.x = -20 + Math.cos(time * 0.25) * 5;
      pointLight2.position.y = -20 + Math.sin(time * 0.25) * 5;

      renderer.render(scene, camera);
      const animationId = requestAnimationFrame(animate);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      messages,
      particles,
      animationId: 0,
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        
        // Dispose geometries and materials
        messageMeshes.forEach((mesh) => {
          mesh.geometry.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material.dispose();
          }
        });
        
        connectionLines.forEach((line) => {
          line.geometry.dispose();
          if (Array.isArray(line.material)) {
            line.material.forEach((m) => m.dispose());
          } else {
            line.material.dispose();
          }
        });
        
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
        
        if (containerRef.current && renderer.domElement.parentNode) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}
