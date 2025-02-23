import { useState } from "react";
import { MyButton } from "../components/MyButton";

export function Home() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  function increase() {
    setCount(count + 1);
    setError("");
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError("No se puede bajar de cero");
    }
  }

  return (
    <div style={{textAlign: "center"}}>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <MyButton titulo="- 1" onClick={decrease} />
      <MyButton titulo="+ 1" onClick={increase} />
      {error && <p>{error}</p>}
    </div>
  );
}