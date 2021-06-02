import React, { useState } from "react";
import { list } from "postcss";
import Button from "../button";

const EditJustSay = ({
  setJustSay,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  dateTime,
  handleAddWidgets,
  onEditSubmit,
  list,
}) => {
  const [checkError, setCheckError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      onEditSubmit(list.id, e.target.title.value.trim());
    }
  };

  return (
    <>
      <h2 className="text-xl mb-2">Edit JustSay</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            defaultValue={list.value}
            type="text"
            name="title"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            placeholder="Enter text"
          />
        </div>
        <Button>Add</Button>
      </form>
      <p className="text-red-600 text-xs mt-1">{checkError}</p>
    </>
  );
}

export default EditJustSay;
