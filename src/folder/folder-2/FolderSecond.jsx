import React, { useState } from "react";
import Counter from "../../components/component-2/Counter";
import Fruits from "../../components/component-2/Fruits";
import Notes from "../../components/component-2/Notes";
import Child1 from "../../components/component-2/Child1";
import Child2 from "../../components/component-2/Child2";

const FolderSecond = () => {
  const [countInParent, setCountInParent] = useState(0);
  function updateCountParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log("I will start uploading the data now");
  }

  return (
    <>
      {/* <Counter /> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} />
    </>
  );
};

export default FolderSecond;
