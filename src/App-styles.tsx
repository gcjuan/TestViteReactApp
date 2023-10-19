import { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Vite + React</h1>
      <h3>Inline Styles Demo</h3>
      <div
        style={{
          padding: "2em",
          border: "2px solid black",
          backgroundColor: "peachpuff",
          paddingTop: "50px",
        }}
      >
        <button
          onClick={onClick}
          style={{ border: "10px solid pink", backgroundColor: "red" }}
        >
          count is {count}
        </button>
      </div>
      <p>Hello World</p>
    </div>
  );
}

export default App;
