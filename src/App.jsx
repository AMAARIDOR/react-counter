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
      <button onClick={handleClickDecrement}>-</button>
      <div>{count}</div>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={resetCounter}>Reset Counter</button>
    </>
  );
}

export default App;
