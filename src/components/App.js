import React, { useState } from "react";
import ColorSelector from "./ColourSelector";
import Selection from "./Selection";
import "../styles/App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Selector App</h1>
      <ColorSelector onColorChange={handleColorChange} />
      <Selection selectedColor={selectedColor} />
    </div>
  );
};

export default App;
