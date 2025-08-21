"use client";
import React from "react";
import "../styles/MainTitle.css";
import "../styles/globals.css";
import "../styles/animations.css";

export default function MainTitle() {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="main-title-container">
      <div className="main-title-ad">
        <div className="main-title-ad-inner">
          <div className="link">N E</div>
        </div>
      </div>
      <div className="main-title-block">
        <div className="main-title-content">
          {/* Conteúdo principal oculto */}
          <div className="main-title-mask-overlay" style={{ display: "none" }}>
            <div className="main-title-mask-text">
              <div className="main-title-line-multi">
                <div className="link">MULTI</div>
              </div>
              <div className="travessao">
                <div className="link">–</div>
              </div>
              <div className="main-title-line-disciplined">
                <div className="link">DISCIPLINED</div>
              </div>
              <div className="main-title-line-developer">
                <div className="link">DEVELOPER</div>
              </div>
            </div>
          </div>

          {/* Agora o conteúdo principal está em hidden-content */}
          <div className="hidden-content" ref={overlayRef}>
            <div className="main-title-mask-text">
              <div className="main-title-line-multi">
                <div className="link">MULTI</div>
              </div>
              <div className="travessao">
                <div className="link">–</div>
              </div>
              <div className="main-title-line-disciplined">
                <div className="link">DISCIPLINED</div>
              </div>
              <div className="main-title-line-developer">
                <div className="link">DEVELOPER</div>
              </div>
            </div>
            <div className="main-title-extra">
              <div
                className="link"
                style={{
                  fontFamily: "NeueMontreal, sans-serif",
                  fontWeight: "bold",
                  bottom: "10px",
                }}
              >
                GOOD DESIGN IS HONEST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
