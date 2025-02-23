import { useState } from "react";

export function Page2() {
  const [color, setColor] = useState("gray");

  return (
    <div style={{textAlign: "center"}}>
      <h1>Selector de Color</h1>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          margin: "auto"
        }}
      ></div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", justifyContent: "center" }}>
        {["red", "blue", "green", "yellow"].map((clr) => (
          <button
            key={clr}
            onClick={() => setColor(clr)}
            style={{backgroundColor: clr, color: "black"}}>
            {clr}
          </button>
        ))}
      </div>
    </div>
  );
}