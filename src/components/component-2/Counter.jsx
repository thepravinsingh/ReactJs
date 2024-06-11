import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <p>The value of count is : {count}</p>
      <button onClick={updateCount}>Increment</button>
    </>
  );
  butt;
};

export default Counter;
