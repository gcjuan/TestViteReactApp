import { useState } from "react";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Vite + React</h1>
      <h3>Vanilla Css Demo</h3>
      <div className="card">
        <button onClick={onClick}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
