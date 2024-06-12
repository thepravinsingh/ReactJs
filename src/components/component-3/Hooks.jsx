import React, { useEffect, useRef, useState } from "react";

const Hooks = () => {
  const [counter, setCounter] = useState(0);
  const refCounter = useRef(0);
  let normalCounter = 0;

  useEffect(() => {
    console.log("state counter", counter);
    console.log("normal", normalCounter);
    console.log("ref counter", refCounter.current);

    return () => {
      console.log("unMounting component");
    };
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    refCounter.current = refCounter.current + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Hooks;
