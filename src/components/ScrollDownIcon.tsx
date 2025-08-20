"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import "../styles/globals.css";

const ScrollDownIcon: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<SVGSVGElement>(null);
  const ringInnerRef = useRef<SVGSVGElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  // Magnet effect para os dois anéis
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (
      !container ||
      !ringOuterRef.current ||
      !ringInnerRef.current ||
      !arrowRef.current
    )
      return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const halfW = width / 2;
    const halfH = height / 2;
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Outer ring segue mais
    const xOuter = gsap.utils.interpolate(-halfW, halfW, mouseX / width);
    const yOuter = gsap.utils.interpolate(-halfH, halfH, mouseY / height);

    // Inner ring segue menos
    const xInner = xOuter * 0.5;
    const yInner = yOuter * 0.5;

    // Animação Arrow

    const xArrow = xOuter * 0.7;
    const yArrow = yOuter * 0.7;

    gsap.to(ringOuterRef.current, {
      x: xOuter,
      y: yOuter,
      duration: 0.3,
      ease: "power2",
      overwrite: true,
    });
    gsap.to(ringInnerRef.current, {
      x: xInner,
      y: yInner,
      duration: 0.4,
      ease: "power2",
      overwrite: true,
    });
    gsap.to(arrowRef.current, {
      x: xArrow,
      y: yArrow,
      duration: 0.35,
      ease: "power2",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (!ringOuterRef.current || !ringInnerRef.current) return;
    gsap.to(ringOuterRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2",
      overwrite: true,
    });
    gsap.to(ringInnerRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power2",
      overwrite: true,
    });
    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      duration: 0.55,
      ease: "power2",
      overwrite: true,
    });
  };

  return (
    <div
      className="magnet-container"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={ringOuterRef}
        className="ring-svg ring-outer"
        width="120"
        height="120"
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#111"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        ref={ringInnerRef}
        className="ring-svg ring-inner"
        width="120"
        height="120"
        style={{ position: "absolute", left: 0, top: 0 }}
      >
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="#000000ff"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        ref={arrowRef}
        className="arrow-svg"
        width="36px"
        height="36px"
        style={{
          position: "absolute",
          left: "40px",
          top: "40px",
          transform: "translate(-4%, -4%)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <g stroke="#000000ff" strokeWidth="4" strokeLinecap="round">
          <line x1="18" y1="10" x2="18" y2="24" />
          <polyline
            points="11,18 18,27 25,18"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default ScrollDownIcon;
