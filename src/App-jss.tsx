import { useState } from "react";
import "./style.css";
import { createUseStyles } from "react-jss";

function App() {
  // JSS block starts here
  const useStyles = createUseStyles({
    button: {
      backgroundColor: "red",
    },
  });
  const classes = useStyles();
  // JSS block ends here

  const [count, setCount] = useState(0);
  const onClick = () => setCount((count) => count + 1);

  return (
    <div>
      <h1>Vite + React</h1>
      <h3>Css-in-Js Demo with JSS</h3>
      <div className="card">
        <button className={classes.button} onClick={onClick}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
