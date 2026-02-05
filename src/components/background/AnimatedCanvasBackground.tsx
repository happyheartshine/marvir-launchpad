import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface AnimatedCanvasBackgroundProps {
  className?: string;
}

export function AnimatedCanvasBackground({ className = "" }: AnimatedCanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Grid and particle configuration
    const gridSize = 50;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!canvas || !ctx) return;
      
      time += 0.01;

      // Clear canvas with theme-appropriate background
      ctx.fillStyle = theme === "light" ? "rgb(250, 250, 250)" : "rgb(6, 6, 6)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid with better visibility
      ctx.lineWidth = 1;

      // Vertical lines with gradient
      for (let x = 0; x < canvas.width; x += gridSize) {
        const wave = Math.sin(x * 0.01 + time) * 8;
        const opacity = 0.08 + Math.sin(x * 0.02 + time) * 0.04;
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x + wave, 0);
        ctx.lineTo(x + wave, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with gradient
      for (let y = 0; y < canvas.height; y += gridSize) {
        const wave = Math.sin(y * 0.01 + time) * 8;
        const opacity = 0.08 + Math.sin(y * 0.02 + time) * 0.04;
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(canvas.width, y + wave);
        ctx.stroke();
      }

      // Update and draw particles with better visuals
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Alternate colors between primary purple and accent cyan
        const isPrimary = index % 3 !== 0;
        const color1 = isPrimary ? "139, 92, 246" : "34, 211, 238"; // primary purple or cyan
        const color2 = isPrimary ? "168, 85, 247" : "56, 189, 248"; // lighter variations
        
        // Draw outer glow
        const outerGlow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 8
        );
        outerGlow.addColorStop(0, `rgba(${color1}, 0.6)`);
        outerGlow.addColorStop(0.4, `rgba(${color1}, 0.3)`);
        outerGlow.addColorStop(1, `rgba(${color1}, 0)`);

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 8, 0, Math.PI * 2);
        ctx.fill();

        // Draw core particle with bright center
        const coreGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        coreGradient.addColorStop(0, `rgba(${color2}, 1)`);
        coreGradient.addColorStop(0.5, `rgba(${color1}, 0.8)`);
        coreGradient.addColorStop(1, `rgba(${color1}, 0.2)`);

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Add a small white center dot for sparkle effect
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles with gradient
      ctx.lineWidth = 1.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full border-none block absolute inset-0 z-0 ${className}`}
      style={{ background: theme === "light" ? "rgb(250, 250, 250)" : "rgb(6, 6, 6)" }}
    />
  );
}
