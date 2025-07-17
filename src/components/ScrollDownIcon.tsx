export default function ScrollDownIcon() {
  return (
    <div
      style={{
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          border: "2px solid #000",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <path
            d="M16 10v12M16 22l6-6M16 22l-6-6"
            stroke="#000"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
