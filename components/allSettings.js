import React, { useState } from "react";
import Button from "./button";

const AllSettings = ({
  listAllWidgets,
  children,
  setZero,
  totalTimer,
  defaultJustShout,
  onEditJustShout,
}) => {
  const [checkError, setCheckError] = useState("");
  const disabled = true;
  let tatalWidgets = listAllWidgets.length;
  let totalJust = 0;
  let totalJustSay = 0;
  let totalJustShout = 0;
  let totalCounter = 0;
  let cityName = "N/A"
  let coldest = 0;
  let temp = 100;
  let editJustShout = (
    <div
      title="JustShout text"
      className="p-5 border-1 bg-white rounded-2xl relative mb-4"
    >
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustShout text</h2>
      <fieldset disabled>
        <form className="flex">
          <div className="flex-1 mr-1">
            <input
              type="text"
              className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
              placeholder="Enter text"
              defaultValue=""
            />
          </div>
          <div>
            <Button disabled={disabled}>Edit</Button>
          </div>
        </form>
      </fieldset>
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      onEditJustShout(e.target.title.value.trim());
    }
  };

  listAllWidgets.map((list) => {
    if (list.type === "justSay" || list.type === "justShout") {
      if (list.type === "justShout" && list.value) {
        editJustShout = (
          <div
            title="JustShout text"
            className="p-5 border-1 bg-white rounded-2xl relative mb-4"
          >
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">
              JustShout text
            </h2>
            <fieldset>
              <form onSubmit={onSubmit} className="flex">
                <div className="flex-1 mr-1">
                  <input
                    name="title"
                    type="text"
                    className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                    placeholder="Enter text"
                    defaultValue={defaultJustShout}
                  />
                </div>
                <div>
                  <Button disabled={!disabled}>Edit</Button>
                </div>
              </form>
              <div className="text-red-600 text-xs mt-1">{checkError}</div>
            </fieldset>
          </div>
        );
      }
      totalJust = totalJust + list.value.length;
    } else if (list.type === "counter") {
      totalCounter = totalCounter + list.value;
    } else if (list.type === "weather") {
      coldest = `${parseInt(list.value.main.temp)}`;
      if (coldest < temp) {
        temp = coldest;
        cityName = list.value.name;
      }
    }
  });

  return (
    <>
      <h2 className="text-xl mb-4">Settings</h2>
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Statistics</h2>
        <div className="table">
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total widgets:</div>
            <div className="table-cell">{tatalWidgets}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">
              Total Just length:
            </div>
            <div className="table-cell">{totalJust}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total count: </div>
            <div className="table-cell">{totalCounter}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Total time: </div>
            <div className="table-cell">{totalTimer}</div>
          </div>
          <div className="table-row">
            <div className="table-cell pr-4 font-semibold">Coldest cities: </div>
            <div className="table-cell">{cityName}</div>
          </div>
        </div>
      </div>
      {editJustShout}
      <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Reset Zone</h2>
        <form onSubmit={onSubmit}>
          <div className="flex items-center">
            <select
              name="select"
              className="flex-1 mt-1 mr-1.5 py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 text-sm"
            >
              <option value="Counter">All counters</option>
              <option value="Timer">All timers</option>
            </select>
            <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600">
              Set zero
            </button>
          </div>
        </form>
      </div>
      {children}
    </>
  );
};

export default AllSettings;
