import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import Card from "../layouts/card";

const CardCounterItem = ({
  countertext,
  setCounterList,
  counterList,
  counter,
  setCounter,
  setWidgetsList,
  widgetsList,
}) => {
  const [number, setNumber] = useState(parseInt(countertext.txtCounter));

  const onClearCounter = (txtCounter) => {
    setCounterList(
      counterList.filter((counter) => counter.id !== countertext.id)
    );
    setCounter(counter - 1);
    setWidgetsList(widgetsList - 1);
  };

  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-400 mb-1.5">Counter</h2>
      <div className="absolute top-5 right-5">
        <button
          onClick={() => onClearCounter(countertext)}
          className="text-lg text-gray-600 focus:outline-none undefined"
        >
          <IoClose />
        </button>
      </div>
      {number > 0 ? (
        <div className="text-center" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center justify-center mt-4 mb-6">
            <button
              className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
              onClick={() => setNumber((number) => number - 1)}
            >
              -
            </button>
            <div className="text-6xl mx-7">{number}</div>
            <button
              className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
              onClick={() => setNumber((number) => number + 1)}
            >
              +
            </button>
          </div>
          <button
            className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
            onClick={() => setNumber(0)}
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
              onClick={() => setNumber((number) => number - 1)}
            >
              -
            </button>
            <div className="text-6xl mx-7">{number}</div>
            <button
              className="text-5xl rounded-full w-10 test-center focus:outline-none text-blue-500"
              onClick={() => setNumber((number) => number + 1)}
            >
              +
            </button>
          </div>
          <button
            className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default"
            disabled
            onClick={() => setNumber(0)}
          >
            Set zero
          </button>
        </div>
      )}
      <div className="mt-6"></div>
    </Card>
  );
};

export default CardCounterItem;
