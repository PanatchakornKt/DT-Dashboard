import React, { useState, useEffect } from "react";
import Card from "../layouts/Cards";
import Button from "../Button";
import { IoClose } from "react-icons/io5";

const Counter = ({ title, list, onDelete, zero, setZero }) => {
  const onClickDelete = function () {
    onDelete(list);
  };

  useEffect(() => {
    if (zero == "Counter") {
      setCount(0);
      setZero("");
    }
  }, [zero]);

  const [count, setCount] = useState(list.value);
  let resetButton;
  let decrease;
  let disabled = true;

  const handleClick = () => {
    setCount(0);
  };

  if (count == 0) {
    resetButton = (
      <Button doClick={handleClick} disabled={disabled}>
        Set zero
      </Button>
    );
    decrease = (
      <button className="text-5xl rounded-full w-10 text-center focus:outline-none text-gray-300">
        -
      </button>
    );
  } else {
    resetButton = (
      <Button doClick={handleClick} disabled={!disabled}>
        Set zero
      </Button>
    );
    decrease = (
      <button
        onClick={() => setCount(list.value - 1)}
        className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
      >
        -
      </button>
    );
  }
  list.value = count;
  return (
    <>
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <Card
          title="Counter"
          key={list.id}
          onDelete={onClickDelete}
          list={list}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mt-4 mb-6">
              {decrease}
              <div className="text-6xl mx-7">{count}</div>
              <button
                onClick={() => setCount(list.value + 1)}
                className="text-5xl rounded-full w-10 text-center focus:outline-none text-blue-500"
              >
                +
              </button>
            </div>
            {resetButton}
          </div>
          <div className="mt-6"></div>
        </Card>
      </div>
    </>
  );
};

export default Counter;
