export default function MenuButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 32,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#222",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22">
        <rect y="6" width="22" height="1" fill="#fff" />
        <rect y="14" width="22" height="1" fill="#fff" />
      </svg>
    </div>
  );
}
