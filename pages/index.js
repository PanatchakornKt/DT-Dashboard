import React from "react";
import Link from "next/link";
import AddWidgets from "../components/addWidgets";
import CardDefault from "../components/CardDefault";
import CardJustSay from "../components/CardJustsay";
import CardCounter from "../components/CardCounter";
import CardTimer from "../components/CardTimer";

const index = () => {
  return (
    <>
      <title>Widgets - Daytech Dashbroad</title>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <AddWidgets />
        <div className="md:flex md:flex-wrap md:mr-4">
          <CardDefault />
          <CardJustSay />
          <CardTimer />
          <CardCounter />
        </div>
      </div>
    </>
  );
};

export default index;
