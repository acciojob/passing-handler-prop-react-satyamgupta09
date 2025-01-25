
import React, { useState } from "react";
import "./../styles/Child.css";
import "./../styles/App.css";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState("");

  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground.background);
  };

  return (
    <div
      className="fix-box"
      style={{ background: background }}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <p className="center">Click me to change color</p>
    </div>
  );
};

export default Selection;
