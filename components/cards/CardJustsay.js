import React from "react";
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
