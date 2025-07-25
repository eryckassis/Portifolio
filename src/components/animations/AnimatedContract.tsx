"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const PHRASE = "CURRENT CONTRACT DEVELOPER @NORDICSTUDIOS";

export default function AnimatedContract() {
  const lineRef = useRef<HTMLDivElement>(null);
  const entradaTl = useRef<gsap.core.Timeline | null>(null);
  const saidaTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Definindo Posição Inicial
    gsap.set(lineRef.current, { opacity: 1, y: 0 });
    // Limpa timelines em unmount
    return () => {
      entradaTl.current?.kill();
      saidaTl.current?.kill();
    };
  }, []);

  function entradaDoMouse() {
    saidaTl.current?.kill();
    entradaTl.current = gsap.timeline();
    entradaTl.current
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

  function saidaDoMouse() {
    entradaTl.current?.kill();
    saidaTl.current = gsap.timeline();
    saidaTl.current
      .to(lineRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      })
      .set(lineRef.current, { y: -24 })
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
      onMouseEnter={entradaDoMouse}
      onMouseLeave={saidaDoMouse}
    >
      <div ref={lineRef} style={{ display: "inline-block" }}>
        {PHRASE}
      </div>
    </div>
  );
}
