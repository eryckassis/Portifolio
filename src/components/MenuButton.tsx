"use client";
import React, { useRef } from "react";
import gsap from "gsap";

export default function MenuButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<SVGSVGElement>(null);

  // Parallax effect (adapted from the jQuery code)
  function parallaxIt(
    e: React.MouseEvent,
    target: HTMLElement | SVGElement | null,
    movement: number
  ) {
    const container = containerRef.current;
    if (!container || !target) return;

    const rect = container.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    gsap.to(target, {
      x: ((relX - rect.width / 2) / rect.width) * movement,
      y: ((relY - rect.height / 2) / rect.height) * movement,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      width: 40,
      height: 40,
      duration: 0.3,
      overwrite: true,
    });
    gsap.to([circleRef.current, hamburgerRef.current], {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.3,
      overwrite: true,
    });
  };

  const handleMouseEnter = () => {
    gsap.to(containerRef.current, {
      width: 80,
      height: 80,
      duration: 0.3,
      overwrite: true,
    });
    gsap.to(circleRef.current, {
      scale: 1.3,
      duration: 0.3,
      overwrite: true,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    parallaxIt(e, circleRef.current, 32); // 80/2.5 (original era 80)
    parallaxIt(e, hamburgerRef.current, 16); // 40/2.5 (original era 40)
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: 24,
        right: 32,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s",
        zIndex: 1000,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={circleRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <svg
        ref={hamburgerRef}
        width={22}
        height={22}
        viewBox="0 0 22 22"
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <rect y="6" width="22" height="1.5" fill="#fff" rx="0.75" />
        <rect y="14" width="22" height="1.5" fill="#fff" rx="0.75" />
      </svg>
    </div>
  );
}
