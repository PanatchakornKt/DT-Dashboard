import React, { useState } from "react";
import Card from "./layouts/card";

const CardCounter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  const onReset = () => {
    setNumber(0);
  };

  return (
    <>
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
        <div class="absolute top-5 right-5">
          <button class="text-lg text-gray-600 focus:outline-none undefined">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
        {number > 0 ? (
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onDecrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={onReset}
            >
              Set zero
            </button>
          </div>
        ) : (
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-gray-300"
                disabled
                onClick={onDecrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={onIncrease}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
              disabled
              onClick={onReset}
            >
              Set zero
            </button>
          </div>
        )}
        <div className="mt-6"></div>
      </Card>
    </>
  );
};

export default CardCounter;
