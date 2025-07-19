export default function SideNav() {
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: "40%",
        background: "#000",
        color: "#fff",
        borderRadius: "8px 0 0 8px",
        padding: "18px 12px",
        fontWeight: 900,
        fontSize: 22,
        letterSpacing: 1,
      }}
    >
      W.
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontSize: 13,
          fontWeight: 400,
          marginTop: 20,
        }}
      >
        Honors
      </div>
    </div>
  );
}
