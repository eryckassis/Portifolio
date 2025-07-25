import React from "react";

export default function MainTitle() {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "60px 0 20px 0",
      }}
    >
      {/* AD acima do título */}
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: 2,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            marginLeft: "-350px",
            fontSize: 13,
            lineHeight: 1.5,
            letterSpacing: 4,
          }}
        >
          A D
        </div>
      </div>

      <div
        style={{
          position: "relative",
          marginLeft: "20px",
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "6vw", // Responsivo, ajuste conforme necessário
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            fontFamily: "'Inter', 'Arial Black', Arial, Helvetica, sans-serif",
            display: "inline-block",
            whiteSpace: "pre-line",
          }}
        >
          <div style={{ marginLeft: "-90px", letterSpacing: 4 }}>MULTI –</div>
          <div style={{ marginLeft: -100, letterSpacing: 4 }}>DISCIPLINED</div>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "80px", letterSpacing: 4 }}>
              DEVELOPER
            </div>
          </div>
          {/* GOOD DESIGN IS HONEST alinhado à direita da última linha */}
          <div
            style={{
              position: "absolute",
              right: "-230px", // ajuste conforme largura do container/tela
              bottom: 35,
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 1.4,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            GOOD DESIGN IS HONEST
          </div>
        </div>
      </div>
    </div>
  );
}
