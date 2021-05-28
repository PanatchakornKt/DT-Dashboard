import React, { useState } from "react";
import CardCounterItem from "./CardCounterItem";

const CardCounter = ({
  counter,
  setCounter,
  setWidgetsList,
  widgetsList,
  counterList,
  setCounterList,
}) => {
  return (
    <>
      {counterList.map((countertext) => (
        <CardCounterItem
          key={countertext.id}
          countertext={countertext}
          counterList={counterList}
          setCounterList={setCounterList}
          setCounter={setCounter}
          counter={counter}
          setWidgetsList={setWidgetsList}
          widgetsList={widgetsList}
        />
      ))}
    </>
  );
};

export default CardCounter;
