import { useEffect, useRef } from "react";

interface MagneticElement {
  element: HTMLElement;
  rect: DOMRect;
}

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lightningRef = useRef<SVGSVGElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRefPos = useRef({ x: 0, y: 0 });
  const trailRef = useRef<Point[]>([]);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const magneticElementRef = useRef<MagneticElement | null>(null);
  const animationFrameRef = useRef<number>();
  const isVisibleRef = useRef(false);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const lightning = lightningRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    
    if (!cursor || !lightning || !ring || !dot) return;

    isVisibleRef.current = true;
    cursor.style.opacity = "1";
    lightning.style.opacity = "1";

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const getMagneticElement = (x: number, y: number): MagneticElement | null => {
      const interactiveSelectors = [
        "a",
        "button",
        "[role='button']",
        "input",
        "textarea",
        "select",
        ".glass-card",
        "[data-magnetic]",
      ];

      for (const selector of interactiveSelectors) {
        const elements = document.querySelectorAll<HTMLElement>(selector);
        for (const element of elements) {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const distance = getDistance(x, y, centerX, centerY);
          const maxDistance = Math.max(rect.width, rect.height) * 0.8;

          if (distance < maxDistance) {
            return { element, rect };
          }
        }
      }
      return null;
    };

    const createLightningPath = (points: Point[]): string => {
      if (points.length < 2) return "";

      let path = `M ${points[0].x} ${points[0].y}`;
      
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const segments = Math.max(2, Math.floor(distance / 15));
          const segmentLength = distance / segments;
          
          for (let j = 1; j <= segments; j++) {
            const t = j / segments;
            const baseX = prev.x + dx * t;
            const baseY = prev.y + dy * t;
            
            const perpX = -dy / distance;
            const perpY = dx / distance;
            
            const offset = (Math.random() - 0.5) * 12 * (1 - t * 0.5);
            const x = baseX + perpX * offset;
            const y = baseY + perpY * offset;
            
            if (j === 1) {
              path += ` L ${x} ${y}`;
            } else {
              path += ` L ${x} ${y}`;
            }
          }
        } else {
          path += ` L ${curr.x} ${curr.y}`;
        }
      }
      
      return path;
    };

    const updateCursor = (timestamp: number) => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      
      let targetX = mouseX;
      let targetY = mouseY;
      let ringScale = isHoveringRef.current ? 1.4 : 1;
      let dotScale = isClickingRef.current ? 0.8 : 1;

      const magnetic = getMagneticElement(mouseX, mouseY);
      magneticElementRef.current = magnetic;

      if (magnetic) {
        const { rect } = magnetic;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = getDistance(mouseX, mouseY, centerX, centerY);
        const maxDistance = Math.max(rect.width, rect.height) * 0.6;
        const strength = Math.max(0, 1 - distance / maxDistance);
        const pullStrength = strength * 0.3;

        targetX = lerp(mouseX, centerX, pullStrength);
        targetY = lerp(mouseY, centerY, pullStrength);
        ringScale = 1.4 + strength * 0.3;
      }

      cursorRefPos.current.x = lerp(cursorRefPos.current.x, targetX, 0.15);
      cursorRefPos.current.y = lerp(cursorRefPos.current.y, targetY, 0.15);

      if (timestamp - lastUpdateRef.current > 16) {
        trailRef.current.push({
          x: cursorRefPos.current.x,
          y: cursorRefPos.current.y,
          timestamp,
        });

        const maxAge = 150;
        trailRef.current = trailRef.current.filter(
          (point) => timestamp - point.timestamp < maxAge
        );

        if (trailRef.current.length > 1) {
          const path = createLightningPath(trailRef.current);
          const pathElement = lightning.querySelector("path");
          if (pathElement) {
            pathElement.setAttribute("d", path);
            const opacity = Math.min(1, trailRef.current.length / 10);
            pathElement.style.opacity = `${opacity * 0.9}`;
          }
        }

        lastUpdateRef.current = timestamp;
      }

      cursor.style.transform = `translate(${cursorRefPos.current.x}px, ${cursorRefPos.current.y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(-50%, -50%) scale(${ringScale})`;
      dot.style.transform = `translate(-50%, -50%) scale(${dotScale})`;

      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest("[data-magnetic]") ||
        target.style.cursor === "pointer" ||
        window.getComputedStyle(target).cursor === "pointer"
      );

      if (isInteractive !== isHoveringRef.current) {
        isHoveringRef.current = isInteractive;
        if (ring) {
          ring.style.transition = "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
        }
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      if (dot) {
        dot.style.transition = "transform 0.1s ease-out";
      }
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
      if (dot) {
        dot.style.transition = "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)";
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      if (cursor) cursor.style.opacity = "0";
      if (lightning) lightning.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      if (cursor) cursor.style.opacity = "1";
      if (lightning) lightning.style.opacity = "1";
    };

    animationFrameRef.current = requestAnimationFrame(updateCursor);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <svg
        ref={lightningRef}
        className="fixed pointer-events-none z-[9998] top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300"
        style={{ mixBlendMode: "screen" }}
      >
        <defs>
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
            <stop offset="50%" stopColor="rgba(200, 220, 255, 0.7)" />
            <stop offset="100%" stopColor="rgba(150, 180, 255, 0.4)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d=""
          stroke="url(#lightningGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          className="lightning-path"
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
        />
      </svg>

      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
      >
        <div
          ref={ringRef}
          className="absolute inset-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 transition-transform duration-300 will-change-transform"
          style={{
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.4), 0 0 12px rgba(255, 255, 255, 0.2)",
          }}
        />
        <div
          ref={dotRef}
          className="absolute inset-0 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200 will-change-transform"
          style={{
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.5)",
          }}
        />
      </div>
    </>
  );
}
