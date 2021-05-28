import React, { useState } from "react";
import CardJustsayItem from "./CardJustsayItem";

const CardJustSay = ({
  justsay,
  setJustsayList,
  justsayList,
  setJustsay,
  setWidgetsList,
  widgetsList,
  setModalEdit,
}) => {
  return (
    <>
      {justsayList.map((justsaytext) => (
        <CardJustsayItem
          key={justsaytext.id}
          justsaytext={justsaytext}
          justsay={justsay}
          setJustsayList={setJustsayList}
          justsayList={justsayList}
          setJustsay={setJustsay}
          setWidgetsList={setWidgetsList}
          widgetsList={widgetsList}
          setModalEdit={setModalEdit}
        />
      ))}
    </>
  );
};

export default CardJustSay;
