import React, { useState } from "react";

const Child1 = (props) => {
  const [countInChild1, setCountInChild1] = useState(0);

  function updateCountInChild() {
    setCountInChild1(countInChild1 + 1);
    props.onCountUpdate(countInChild1 + 1);
  }

  return (
    <div>
      <p>Inside the Child 1: {countInChild1}</p>
      <button onClick={updateCountInChild}>Increment</button>
    </div>
  );
};

export default Child1;
