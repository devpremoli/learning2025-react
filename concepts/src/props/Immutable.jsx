import { useState } from "react";

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("green");

  return (
    <>
      <h2>Pick a Color</h2>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      <ColorDisplay color={selectedColor} />
    </>
  );
}

function ColorDisplay({ color }) {
  // don't change prop
  //color = "red"; // No Error because {color} is a local copy of props
  //props.color = "red"; // props are immutable. mutation of props triggers TypeError
  return (
    <div style={{ padding: "20px", backgroundColor: color, color: "#fff" }}>
      Selected Color: {color}
    </div>
  );
}
