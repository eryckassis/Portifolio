export default function SoundToggle() {
  return (
    <div
      style={{
        position: "absolute",
        left: 30,
        bottom: 80,
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        fontWeight: 700,
        letterSpacing: 2,
        fontSize: 15,
        color: "#000",
        opacity: 0.5,
      }}
    >
      SOUND <span style={{ fontWeight: 900, color: "#000" }}>OFF</span>
    </div>
  );
}
