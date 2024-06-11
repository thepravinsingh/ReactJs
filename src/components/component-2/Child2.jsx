import React from "react";

const Child2 = ({ countFromParent, uploadData }) => {
  const showPrivateData = true;

  return (
    <>
      <div>
        {showPrivateData ? (
          <p>This is private: Hello</p>
        ) : (
          <p>This is not private : Hi</p>
        )}
        {showPrivateData && <p>This is private: hello</p>}
      </div>

      <div>Count inside child2: {countFromParent}</div>
      <button onClick={uploadData}>Upload Data</button>
    </>
  );
};

export default Child2;
