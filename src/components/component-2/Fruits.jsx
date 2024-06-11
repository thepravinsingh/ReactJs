import React, { useState } from "react";

const Fruits = () => {
  const [fruit, setFruit] = useState("Apple");
  const [inputText, setInputText] = useState("");

  const updateFruit = () => {
    setFruit(inputText);
  };

  function updateInputText(event) {
    const curInputValue = event.target.value;
    setInputText(curInputValue);
  }

  return (
    <>
      <p>The value of Fruits is {fruit}</p>
      <p>The value of Fruits is {inputText}</p>
      <input type="text" onChange={updateInputText} />
      {/* <button
        onClick={() => {
          setFruit("Papaya");
        }}
      >
        Papaya
      </button>
      <button
        onClick={() => {
          setFruit("Mango");
        }}
      >
        Mango
      </button>
      <button onClick={() => updateFruit("Banana")}>Banana</button> */}

      <button onClick={() => updateFruit()}>Submit</button>
    </>
  );
};

export default Fruits;
