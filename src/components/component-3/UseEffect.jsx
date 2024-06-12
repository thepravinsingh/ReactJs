import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  // cleanup work here
  function callthisOnUnmount() {}

  useEffect(() => {
    console.log(name, "name updated");
    return callthisOnUnmount;
  }, [name]);

  useEffect(() => {
    console.log("first time mounted");
  }, []);

  useEffect(() => {}, [counter]);

  useEffect(() => {
    console.log(counter, "counter updated");
  }, [counter]);

  useEffect(() => {
    console.log("re-rendering happened");
  });

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
};

export default UseEffect;
