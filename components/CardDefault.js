import React from "react";
import Card from "./layouts/card";

const CardDefault = () => {
  return (
    <Card>
      <h2 className="text-lg font-bold text-gray-400 mb-1.5"></h2>
      <div className="text-center text-gray-400 my-8 font-light">
        <p className="text-4xl mb-2">No widgets at all</p>
        <p>
          Click{" "}
          <button className="font-normal text-blue-400 focus:outline-none">
            HERE
          </button>{" "}
          to add a new one
        </p>
      </div>
    </Card>
  );
};

export default CardDefault;
