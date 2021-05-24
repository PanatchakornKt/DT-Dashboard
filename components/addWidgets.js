import React, { useState } from "react";
import Modal from "./modal";

import CardTimer from "./CardTimer";

const AddWidgets = () => {
  const [modalActive, setModalActive] = useState(false);

  const [justsay, setJustsay] = useState("");
  const [counter, setCounter] = useState("");
  const [timer, setTimer] = useState("");

  const openModal = () => {
    setModalActive(true);
  };

  const onCancel = () => {
    setModalActive(false);
  };

  const handleJustsay = function () {
    setModalActive(false);
    setJustsay("");
    console.log("justsay");
  };

  const handleCounter = function () {
    setModalActive(false);
    setCounter("");
    console.log("counter");
  };

  const handleTimer = function () {
    setModalActive(false);
    setTimer("");
    console.log("timer");
  };

  return (
    <div className="mb-4">
      <button
        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
        onClick={openModal}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="inline-block text-xl relative -top-0.5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
          </g>
        </svg>{" "}
        Add Widget
      </button>{" "}
      <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="inline-block text-xl relative -top-0.5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
          </g>
        </svg>{" "}
        Settings
      </button>
      <Modal modalActive={modalActive} onCancel={onCancel}>
        <h2 className="text-xl undefined">Add widget</h2>
        <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
          <div className="w-1/3 pt-1.5 pl-1.5">
            <div
              className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={handleJustsay}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="mx-auto text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M464 512a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
              </svg>
              <h3 className="mt-1 font-semibold text-sm ">JustSay</h3>
            </div>
          </div>

          <div className="w-1/3 pt-1.5 pl-1.5">
            <div
              className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={handleCounter}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="mx-auto text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm5 6h2v2H9v2H7v-2H5v-2h2V9h2v2zm4 0h6v2h-6v-2z"></path>
                </g>
              </svg>
              <h3 className="mt-1 font-semibold text-sm ">Counter</h3>
            </div>
          </div>
          <div className="w-1/3 pt-1.5 pl-1.5">
            <div
              className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
              onClick={handleTimer}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="mx-auto text-4xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152"
                ></path>
                <path d="M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z"></path>
              </svg>
              <h3 className="mt-1 font-semibold text-sm ">Timer</h3>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddWidgets;
