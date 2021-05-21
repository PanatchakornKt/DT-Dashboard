import React, {useState} from "react";
import AddCounter from "./AddCounter";
import CardCounter from "./CardCounter";

const Counter = () => {

  const [counter, setCounter] = useState([]);
  return (
    <>
    <AddCounter counter={counter} setCounter={setCounter}/>
    <CardCounter counter={counter} setCounter={setCounter}/>
    </>
  );
};

export default Counter;
