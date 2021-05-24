import React from "react";
import Link from "next/link";
import CardJustSay from "../components/CardJustsay";
import CardCounter from "../components/CardCounter";
import CardTimer from "../components/CardTimer";

const index = () => {
  return (
    <>
      <title>Widgets - Daytech Dashbroad</title>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4">
          <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="inline-block text-xl relative -top-0.5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
              </g>
            </svg>{" "}
            Add Widget
          </button>
          {" "}
          <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              className="inline-block text-xl relative -top-0.5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
              </g>
            </svg>{" "}
            Settings
          </button>
        </div>
        <div className="md:flex md:flex-wrap md:mr-4">
          <CardJustSay />
          <CardCounter />
          <CardTimer />
        </div>
      </div>
    </>
  );
};

export default index;
