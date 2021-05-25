import React from "react";
import Link from "next/link";
import AddWidgets from "../components/addWidgets";

const index = () => {
  return (
    <>
      <title>Widgets - Daytech Dashbroad</title>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <AddWidgets />
      </div>
    </>
  );
};

export default index;
