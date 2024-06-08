import React from "react";
import Card from "../../components/component-1/Card";
import Avator from "../../components/component-1/Avator";

const FolderFirst = () => {
  return (
    <div>
      <Card
        name="Praveen"
        email="praveen@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Card
        name="Deepak"
        email="deepak@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Card
        name="Karan"
        email="karan@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Card
        name="Arjun"
        email="arjun@gmail.com"
        image="https://via.placeholder.com/200"
      />
      <Avator name="Random" image="https://via.placeholder.com/200" />
    </div>
  );
};

export default FolderFirst;
