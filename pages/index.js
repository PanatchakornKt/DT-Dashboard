import React from "react";
import Link from "next/link";
import AllWidgets from "../components/allWidgets";

const index = () => {
  return (
    <>
      <title>Widgets - Daytech Dashbroad</title>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <AllWidgets />
      </div>
    </>
  );
};

export default index;
