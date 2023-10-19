import { useState } from "react";
import "./style.css";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  button: {
    backgroundColor: "red",
    width: "100px",
    height: 50,
  },
});

function App() {
  const classes = useStyles();

  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Vite + React</h1>
      <h3>Css-in-Js Demo with JSS</h3>
      <div>
        <button className={classes.button} onClick={onClick}>
          count is {count}
        </button>
      </div>
      <p className="footer">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
