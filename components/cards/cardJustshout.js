import React, { useState } from "react";
import Form from "../layouts/Form";

const CardJustShout = ({ onAdd, defaultJustShout }) => {
  const [checkError, setCheckError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      onAdd("justShout", e.target.title.value.trim());
    }
  };
  return (
    <>
      <Form
        title="Add JustShout"
        type="text"
        placeholder="Enter text"
        defaultValue={defaultJustShout}
        onSubmit={onSubmit}
        checkError={checkError}
      />
    </>
  );
};

export default CardJustShout;
