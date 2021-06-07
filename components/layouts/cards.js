import React from "react";
import { MdClose, MdEdit } from "react-icons/md";

const Cards = ({ title, children, onDelete }) => {
  const handleClick = (e) => {
    onDelete(e);
  };

  return (
    <>
      <div className="p-5 border-1 bg-white rounded-2xl relative undefined">
        <h2 className="text-lg font-bold text-gray-400 mb-1.5">{title}</h2>
        <div className="absolute top-5 right-5">
          <button
            onClick={handleClick}
            className="text-lg text-gray-600 focus:outline-none undefined"
          >
            <MdClose />
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Cards;
