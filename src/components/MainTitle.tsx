"use client";
import React from "react";
import "../styles/globals.css";
import "../styles/globals.css";
// import removido: animations.css agora está em globals.css

export default function MainTitle() {
  const overlayRef1 = React.useRef<HTMLDivElement>(null);
  const overlayRef2 = React.useRef<HTMLDivElement>(null);

  return (
    <div className="main-title-container">
      <div className="main-title-ad">
        <div className="main-title-ad-inner">
          <div className="link">N E</div>
        </div>
      </div>

      <div className="main-title-block">
        <div className="main-title-content">
          <div className="main-title-mask-overlay">
            <div className="main-title-mask-text">
              <div className="main-title-line-multi">
                <div className="link">MULTI -</div>
              </div>
              <div className="main-title-line-disciplined">
                <div className="link">DISCIPLINED</div>
              </div>
              <div className="main-title-line-developer">
                <div className="link">DEVELOPER</div>
              </div>
            </div>
          </div>
          <div className="hidden-content" ref={overlayRef1}>
            <div className="link">MASCAREDISSSOM</div>
          </div>
          <div className="hidden-content" ref={overlayRef2}>
            <div className="link">DEVELOPER</div>
          </div>
          <div className="main-title-extra">
            <div className="link">GOOD DESIGN IS HONEST</div>
          </div>
        </div>
      </div>
    </div>
  );
}
