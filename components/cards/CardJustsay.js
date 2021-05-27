import React from "react";
import { IoClose } from "react-icons/io5";
import Card from "../layouts/card";

const CardJustSay = ({
  txtJustsay,
  setWidgetsList,
  widgetsList,
  setJustsay,
  justsay,
  setJustsayList,
  justsayList,
}) => {
  const onClearJustsay = (txtJustsay) => {
    setJustsayList(
      justsayList.filter((justsaytext) => justsaytext.id !== txtJustsay.id)
    );
    setJustsay(justsay - 1);
    setWidgetsList(widgetsList - 1);
  };

  return (
    <>
      {justsayList.map((justsaytext) => (
        <Card key={justsaytext.id}>
          <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustSay</h2>
          <div className="absolute top-5 right-5">
            <button
              onClick={() => onClearJustsay(justsaytext)}
              className="text-lg text-gray-600 focus:outline-none undefined"
            >
              <IoClose />
            </button>
          </div>
          <div className="text-center mt-8 mb-12">
            <h1 className="text-4xl font-bold undefined">
              {justsaytext.txtJustsay}
            </h1>
          </div>
        </Card>
      ))}
    </>
  );
};

export default CardJustSay;
