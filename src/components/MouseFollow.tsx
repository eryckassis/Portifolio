"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/globals.css";

type MouseFollowProps = {
  overlayRef?: React.RefObject<HTMLDivElement | null>;
};

const MouseFollow: React.FC<MouseFollowProps> = ({ overlayRef }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let linkAnimated = false;
    let firstMove = true;

    // Funções para animar as variáveis CSS do overlay
    const xTo = overlayRef?.current
      ? gsap.quickTo(overlayRef.current, "--x", {
          duration: 0.4,
          ease: "power4.out",
        })
      : undefined;
    const yTo = overlayRef?.current
      ? gsap.quickTo(overlayRef.current, "--y", {
          duration: 0.4,
          ease: "power4.out",
        })
      : undefined;

    // Timeline para animar o tamanho da máscara
    const tl = gsap.timeline({ paused: true });
    if (overlayRef?.current) {
      tl.to(overlayRef.current, {
        "--size": "250px",
        duration: 0.75,
        ease: "back.out(1.7)",
      });
    }

    // Timeline para hover em botões/links
    const btnTl = gsap.timeline({ paused: true });
    if (overlayRef?.current) {
      btnTl.to(overlayRef.current, {
        "--size": "20px",
        duration: 0.75,
        ease: "back.out(1.7)",
      });
    }

    // Handler principal do mousemove
    const moveHandler = (e: MouseEvent) => {
      // Move o círculo visual
      gsap.to(circleRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });

      // Move a máscara do overlay
      if (overlayRef?.current && !linkAnimated) {
        yTo && yTo(e.clientY);
        xTo && xTo(e.clientX);
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
        linkAnimated = true;
        gsap.to(circleRef.current, {
          width: 400,
          height: 400,
          duration: 0.3,
          ease: "power2.out",
        });
        btnTl.restart();
      } else {
        linkAnimated = false;
        gsap.to(circleRef.current, {
          width: 35,
          height: 35,
          duration: 0.3,
          ease: "power2.out",
        });
        btnTl.reverse();
      }
    };

    // Primeira movimentação: revela overlay e inicializa posição
    const onFirstMove = (e: MouseEvent) => {
      if (!firstMove) return;
      firstMove = false;
      if (overlayRef?.current) {
        gsap.set(overlayRef.current, {
          autoAlpha: 1,
          "--x": e.clientX,
          "--y": e.clientY,
        });
      }
    };

    window.addEventListener("mousemove", onFirstMove, { once: true });
    window.addEventListener("mousemove", moveHandler);

    // Hover effects (opcional)
    const handleHover = () => {
      gsap.to(circleRef.current, {
        scale: 1.2,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      tl.restart();
    };
    const handleUnhover = () => {
      gsap.to(circleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      tl.reverse();
    };

    const hoverEls = Array.from(
      document.querySelectorAll("a, button, .link, [role='button']")
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    // Estado inicial do overlay (preview)
    if (overlayRef?.current) {
      gsap.set(overlayRef.current, {
        autoAlpha: 1,
        "--x": window.innerWidth / 3,
        "--y": window.innerHeight / 2,
      });
      tl.progress(0.2);
    }

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
