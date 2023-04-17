import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function handleClickDecrement() {
    setCount(count - 1);
  }

  function handleClickIncrement() {
    setCount(count + 1);
  }

  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <div
          className="btn unselectable decrementButton"
          onClick={handleClickDecrement}
        >
          -
        </div>
        <div className="unselectable countDisplay">{count}</div>
        <div
          className="btn unselectable incrementButton"
          onClick={handleClickIncrement}
        >
          +
        </div>
        <div className="btn unselectable resetButton" onClick={resetCounter}>
          Reset
        </div>
      </div>
    </>
  );
}

export default App;
