import React from "react";

const Selection = ({ selectedColor }) => {
  const boxes = [1, 2, 3];

  return (
    <div>
      <h2>Selection Boxes</h2>
      {boxes.map((box) => (
        <div
          key={box}
          className="fix-box"
          style={{ backgroundColor: selectedColor || "white" }}
        >
          Box {box}
        </div>
      ))}
    </div>
  );
};

export default Selection;
