"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/animations.css";

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

    // Funções de hover
    const handleHover = () => {
      gsap.to(circleRef.current, { scale: 0, opacity: 1, duration: 0.3 });
      gsap.to(followRef.current, { scale: 3, duration: 0.3 });
      console.log(handleHover);
    };
    const handleUnhover = () => {
      gsap.to(circleRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(followRef.current, { scale: 1, duration: 0.3 });
    };

    // Função para adicionar listeners a todos os elementos alvo
    const addListeners = (els: Element[]) => {
      els.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };
    // Função para remover listeners
    const removeListeners = (els: Element[]) => {
      els.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };

    // Inicialmente adiciona listeners
    let hoverEls = Array.from(
      document.querySelectorAll("a, button, .magnetic-area")
    );
    addListeners(hoverEls);

    // MutationObserver para monitorar adição de elementos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (!(node instanceof Element)) return;
            // Se o próprio node for alvo
            if (node.matches && node.matches("a, button, .magnetic-area")) {
              addListeners([node]);
              hoverEls.push(node);
            }
            // Se filhos do node forem alvo
            const found = node.querySelectorAll
              ? node.querySelectorAll("a, button, .magnetic-area")
              : [];
            if (found.length) {
              addListeners(Array.from(found));
              hoverEls = hoverEls.concat(Array.from(found));
            }
          });
        }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      removeListeners(hoverEls);
      observer.disconnect();
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
