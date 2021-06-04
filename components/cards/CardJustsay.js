import React, { useState } from "react";
import Form from "../layouts/form";

const CardJustSay = ({ onAdd }) => {
  const [checkError, setCheckError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      onAdd("justSay", e.target.title.value.trim());
    }
  };
  return (
    <>
      <Form
        title="Add JustSay"
        type="text"
        placeholder="Enter text"
        onSubmit={onSubmit}
        checkError={checkError}
      />
    </>
  );
};

export default CardJustSay;
