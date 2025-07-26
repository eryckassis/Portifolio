"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollow: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move ambos círculos ao seguir o mouse
    const moveHandler = (e: MouseEvent) => {
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(followRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", moveHandler);

    // Hover em links/botões ativa animação de escala
    const hoverEls = Array.from(
      document.querySelectorAll("a, button, .magnetic-area")
    );
    const handleHover = () => {
      gsap.to(circleRef.current, { scale: 0, opacity: 1, duration: 0.3 });
      gsap.to(followRef.current, { scale: 3, duration: 0.3 });
    };
    const handleUnhover = () => {
      gsap.to(circleRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(followRef.current, { scale: 1, duration: 0.3 });
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div ref={followRef} className="circle-follow" />
      <div ref={circleRef} className="circle" />
    </>
  );
};

export default MouseFollow;
