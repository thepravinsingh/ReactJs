import React, { useRef, useState } from "react";

const UseForm = () => {
  const [name, setName] = useState("");
  const [fruits, setFruits] = useState("");

  const nameInputRef = useRef(null);
  const fruitSelectRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("submit clicked");
    const nameInputValue = nameInputRef.current.value;
    const fruitValue = fruitSelectRef.current.value;
    alert(nameInputValue + fruitValue);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setFruits(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }}>
      <label htmlFor="name">Name</label>
      {/* <input type="text" onChange={(event) => setName(event.target.value)} /> */}
      <input type="text" id="nameInput" ref={nameInputRef} />

      <br />
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="grapeFruit">GrapeFruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="Mango">Mango</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default UseForm;
