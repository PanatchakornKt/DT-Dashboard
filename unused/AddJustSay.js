import React, { useState } from "react";

const AddJustSay = ({ justsay, setJustsay }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onInputAdd = (input) => {
    const id = Math.random() * 1000;
    const newSay = {
      id,
      input,
    };
    setJustsay([...justsay, newSay]);
  };
  return (
    <>
      <div className="p-5 border-1 bg-gray-200 rounded-2xl relative undefined">
        <div>
          <fieldset>
            <h2 className="text-xl mb-2">Add JustSay</h2>
            <form className="flex">
              <div className="flex-1 mr-1">
                <input
                  type="text"
                  value={input}
                  className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                  onChange={onInputChange}
                  placeholder="Enter text"
                  required
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

export default AddJustSay;
