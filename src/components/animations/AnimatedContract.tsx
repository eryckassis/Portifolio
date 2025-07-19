"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const PHRASE = "CURRENT CONTRACT DEVELOPER @UNCOMMONSTUDIO";

export default function AnimatedContract() {
  const lineRef = useRef<HTMLDivElement>(null);
  const enterTl = useRef<gsap.core.Timeline | null>(null);
  const leaverTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Definindo Posição Inicial
    gsap.set(lineRef.current, { opacity: 1, y: 0 });
    // Limpa timelines em unmount
    return () => {};
  }, []);

  function handleHover() {
    if (enterTl.current) enterTl.current.kill();
    enterTl.current = gsap.timeline();
    enterTl.current
      .to(lineRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      })
      .set(lineRef.current, { y: 24 })
      .to(lineRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.32,
        ease: "power2.in",
      });
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 30,
        left: 0,
        right: 0,
        width: "100%",
        textAlign: "center",
        fontSize: 15,
        fontWeight: 500,
        letterSpacing: 0.5,
        zIndex: 10,
        cursor: "pointer",
        userSelect: "none",
        fontFamily: "inherit",
      }}
      onMouseEnter={handleHover}
    >
      <div ref={lineRef} style={{ display: "inline-block" }}>
        {PHRASE}
      </div>
    </div>
  );
}
