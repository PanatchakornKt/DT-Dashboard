import React, { useState } from "react";

const AddCounter = ({ counter, setCounter }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onInputAdd = (input) => {
    const id = Math.random() * 1000;
    const newCount = {
      id,
      input,
    };
    setCounter([...counter, newCount]);
  };

  return (
    <>
      <div className="p-5 border-1 bg-gray-200 rounded-2xl relative undefined">
        <div>
          <fieldset>
            <h2 className="text-xl mb-2">Add Counter</h2>
            <form className="flex">
              <div className="flex-1 mr-1">
                <input
                  type="number"
                  value={input}
                  className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                  onChange={onInputChange}
                  placeholder="Enter the initial value"
                />
              </div>
              <div></div>
            </form>
          </fieldset>
        </div>
      </div>
      <button
        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 mt-3"
        onClick={() => onInputAdd(input)}
      >
        Add
      </button>
    </>
  );
};

export default AddCounter;
