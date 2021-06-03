import React, { useState } from "react";
import Form from "../layouts/form";

const EditJust = ({ onEditSubmit, list, title }) => {
  const [checkError, setCheckError] = useState("");
  const dfValue = list.value;

  if (list.type === "weather") {
    dfValue = list.value.name;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      if (list.type === "justSay") {
        onEditSubmit(list.id, e.target.title.value.trim());
      } else if (list.type === "justShout") {
        onEditSubmit(e.target.title.value.trim());
      } else if (list.type === "weather" || list.type === "noWeather") {
        onEditSubmit(list.id, list.type, e.target.title.value.trim());
      }
    }
  };

  return (
    <>
      <Form
        type="text"
        title={title}
        onSubmit={onSubmit}
        defaultValue={dfValue}
        checkError={checkError}
      />
    </>
  );
};

export default EditJust;
