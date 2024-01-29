import React from "react";

const ColorSelector = ({ onColorChange }) => {
  const colors = ["red", "green", "blue"];

  return (
    <div>
      <h2>Color Selector</h2>
      {colors.map((color) => (
        <button key={color} onClick={() => onColorChange(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
