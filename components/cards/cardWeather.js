import React, { useState } from "react";
import Form from "../layouts/form";
import weatherAPI from "../../pages/api/weatherAPI";

const CardWeather = ({ onAdd }) => {
  const [checkError, setCheckError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.title.value.trim().length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      try {
        const res = await weatherAPI.get("/data/2.5/weather", {
          params: {
            q: e.target.title.value,
            units: "metric",
          },
        });
        const { data } = res;
        onAdd("weather", data);
      } catch {
        onAdd("noWeather", e.target.title.value);
      }
    }
  };

  return (
    <>
      <Form
        title="Add Weather"
        onSubmit={onSubmit}
        type="text"
        placeholder="Enter a city"
        checkError={checkError}
      />
    </>
  );
};
export default CardWeather;
