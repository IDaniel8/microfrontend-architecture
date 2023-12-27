import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.textReact}>React Microfrontend App</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
      <h3>count is {count}</h3>
    </>
  );
}

export default App;
