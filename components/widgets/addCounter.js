import React from "react";

const AddCounter = ({handleCounter}) => {
  return (
    <>
      <div className="w-1/3 pt-1.5 pl-1.5">
        <div
          className="text-center bg-white text-gray-600 rounded-2xl p-3 md:p-4 hover:bg-blue-500 hover:text-white cursor-pointer"
          onClick={handleCounter}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="mx-auto text-4xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm5 6h2v2H9v2H7v-2H5v-2h2V9h2v2zm4 0h6v2h-6v-2z"></path>
            </g>
          </svg>
          <h3 className="mt-1 font-semibold text-sm ">Counter</h3>
        </div>
      </div>
    </>
  );
};

export default AddCounter;
