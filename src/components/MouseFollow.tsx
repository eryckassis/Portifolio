"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/animations.css";

type MouseFollowProps = {
  overlayRef?: React.RefObject<HTMLDivElement | null>;
};

const MouseFollow: React.FC<MouseFollowProps> = ({ overlayRef }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move o círculo e a máscara radial seguindo o mouse
    const moveHandler = (e: MouseEvent) => {
      // Move o círculo
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });

      // Move a máscara do overlay (se houver)
      if (overlayRef?.current) {
        overlayRef.current.style.setProperty("--x", `${e.clientX}px`);
        overlayRef.current.style.setProperty("--y", `${e.clientY}px`);
      }

      // Detecta se está sobre link ou botão
      const target = e.target as HTMLElement;
      const isInteractive =
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.classList.contains("link") ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button");

      // Efeito de tamanho para círculo + máscara radial
      if (isInteractive) {
        gsap.to(circleRef.current, {
          width: 400,
          height: 400,
          duration: 0.3,
          ease: "power2.out",
        });
        if (overlayRef?.current) {
          gsap.to(overlayRef.current, {
            "--size": "400px",
            duration: 0.3,
            ease: "power2.out",
          } as gsap.TweenVars);
        }
      } else {
        gsap.to(circleRef.current, {
          width: 35,
          height: 35,
          duration: 0.3,
          ease: "power2.out",
        });
        if (overlayRef?.current) {
          gsap.to(overlayRef.current, {
            "--size": "120px",
            duration: 0.3,
            ease: "power2.out",
          } as gsap.TweenVars);
        }
      }
    };

    window.addEventListener("mousemove", moveHandler);

    // Hover effects (opcional)
    const handleHover = () => {
      gsap.to(circleRef.current, {
        scale: 1.2,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const handleUnhover = () => {
      gsap.to(circleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hoverEls = Array.from(
      document.querySelectorAll("a, button, .link, [role='button']")
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [overlayRef]);

  return <div ref={circleRef} className="circle" />;
};

export default MouseFollow;
