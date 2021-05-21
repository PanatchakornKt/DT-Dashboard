import React, { useState } from "react";

const CardCounter = ({ input, setInput, counter, setCounter }) => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  const onDeleteCounter = (input) => {
    setCounter(counter.filter((counters) => counters.id !== input.id));
  };

  const onIncrement = (input) => {
    //console.log(input);
    const showInput = input.input;
    console.log(showInput);
    setNumber(showInput);
    console.log(number);

    //setInput(input + 1);
    //newData input + 1;
    //const data = input + 1;
    //console.log(data);
    //console.log(newData);
    //setCounter([...counter, input]);
    //console.log(setCounter)
  };

  const onDecrement = ({ input }) => {
    console.log(input, "-");
  };
  const onReset = ({ input }) => {
    console.log(input, "0");
  };

  return (
    <>
      {counter.map((counters) => (
        <div
          key={counters.id}
          className="p-5 border-1 bg-white rounded-2xl relative undefined mt-3"
        >
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
          <div className="absolute top-5 right-5">
            <button
              className="text-lg text-gray-600 focus:outline-none undefined"
              onClick={() => onDeleteCounter(counters)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={() => onDecrement(counters)}
              >
                -
              </button>
              <div className="text-6xl mx-7">{counters.input}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={() => onIncrement(counters)}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={() => onReset(counters)}
            >
              Set zero
            </button>
          </div>
          <div className="mt-6"></div>
        </div>
      ))}

      {number > 0 ? (
        <div className="p-5 border-1 bg-white rounded-2xl relative undefined mt-3">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={decrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={increase}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={reset}
            >
              Set zero
            </button>
          </div>
          <div className="mt-6"></div>
        </div>
      ) : (
        <div className="p-5 border-1 bg-white rounded-2xl relative undefined mt-3">
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
          <div className="text-center" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-gray-300" disabled
                onClick={decrease}
              >
                -
              </button>
              <div className="text-6xl mx-7">{number}</div>
              <button
                className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
                onClick={increase}
              >
                +
              </button>
            </div>
            <button
              className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default" disabled
              onClick={reset}
            >
              Set zero
            </button>
          </div>
          <div className="mt-6"></div>
        </div>
      )}
    </>
  );
};

export default CardCounter;
