import React, { useState } from "react";
import Button from "../button";

const CardJustShout = ({
  setJustShout,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  dateTime,
  handleAddWidgets,
}) => {
  const [checkError, setCheckError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      setJustShout(e.target.title.value.trim());
      handleCancel();

      const id = Math.floor(Math.random() * 10000) + 1;
      const data = {
        value: e.target.title.value.trim(),
        id: id,
        date: dateTime,
        type: "justSay",
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  };
  return (
    <>
      <h2 className="text-xl mb-2">Add JustShout</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
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
};

export default CardJustShout;
