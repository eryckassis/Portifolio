import React, { useRef } from "react";
import "../styles/masked.css";

type MaskedImageProps = {
  overlayRef?: React.RefObject<HTMLDivElement | null>;
};
const MaskedImage: React.FC<MaskedImageProps> = ({ overlayRef }) => {
  return (
    <div className="masked-image-container">
      <div className="mask-svg">
        {/* overlayRef aponta para o elemento da máscara */}
        <div
          className="masked-shape"
          ref={overlayRef as React.RefObject<HTMLDivElement>}
          style={
            {
              "--x": "50vw",
              "--y": "50vh",
              "--size": "250px",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
};

export default MaskedImage;
