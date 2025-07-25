"use client";

import useClock from "../hooks/useClock";

export default function Clock() {
  const time = useClock();
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        right: 40,
        background: "#000",
        color: "#fff",
        padding: "10px 18px",
        borderRadius: 2,
        fontSize: 14,
        fontFamily: "monospace",
      }}
    >
      {time ? time : "Loading..."}
    </div>
  );
}
