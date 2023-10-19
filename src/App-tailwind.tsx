import { useState } from "react";
import "./tailwindstyle.css";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Vite + React</h1>
      <h3>Tailwind Demo</h3>
      <div className="bg-[#75c4e1] pt-5 pb-5">
        <button onClick={onClick}>count is {count}</button>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
