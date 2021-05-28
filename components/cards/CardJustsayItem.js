import React, { useState } from "react";
import { MdEdit, MdClose } from "react-icons/md";
import Card from "../layouts/card";
const CardJustsayItem = ({
  justsaytext,
  justsay,
  setJustsayList,
  justsayList,
  setJustsay,
  setWidgetsList,
  widgetsList,
  setModalEdit,
}) => {
  const [input, setInput] = useState(justsaytext.txtJustsay);

  const onClearJustsay = (txtJustsay) => {
    setJustsayList(
      justsayList.filter((justsay) => justsay.id !== txtJustsay.id)
    );
    setJustsay(justsay - 1);
    setWidgetsList(widgetsList - 1);
  };

  const updateJustsay = () => {
    setModalEdit(true);
  };

  return (
    <>
      <Card>
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">JustSay</h2>
        <div className="absolute top-5 right-5">
          <button
            className="text-lg text-gray-600 focus:outline-none undefined"
            onClick={() => updateJustsay()}
          >
            <MdEdit />
          </button>
          <button
            onClick={() => onClearJustsay(justsaytext)}
            className="text-lg text-gray-600 focus:outline-none undefined"
          >
            <MdClose />
          </button>
        </div>
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl font-bold undefined">{input}</h1>
        </div>
      </Card>
    </>
  );
};

export default CardJustsayItem;
