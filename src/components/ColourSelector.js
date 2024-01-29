import React from "react";
import "../styles/ColorSelector.css";

const ColorSelector = ({ onColorChange }) => {
  const colors = ["orange", "green", "blue"];

  return (
    <div className="color-selector-container">
      <h2>Color Selector</h2>
      {colors.map((color) => (
        <button
          key={color}
          className={`color-button color-${color}`}
          onClick={() => onColorChange(color)}
          data-testid={color.toLowerCase()} // Add data-testid
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
