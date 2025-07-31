"use client ";
import React, { useRef } from "react";
import gsap from "gsap";

export default function MenuButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  function parallaxIt(
    e: React.MouseEvent,
    target: HTMLElement | SVGElement | null,
    movement: number
  ) {
    const container = containerRef.current;
    if (!container || !target) return;
  }
}
