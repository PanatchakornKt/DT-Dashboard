import React, { useState } from "react";
import AddJustSay from "./AddJustSay";
import CardJustSay from "./CardJustSay";

const JustSay = () => {
  const [justsay, setJustsay] = useState([]);
  return (
    <>
      <AddJustSay justsay={justsay} setJustsay={setJustsay} />
      <CardJustSay justsay={justsay} setJustsay={setJustsay} />
    </>
  );
};

export default JustSay;
