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
