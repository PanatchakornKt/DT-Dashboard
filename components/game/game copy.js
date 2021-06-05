import React, { useState, useEffect } from "react";
import Card from "../layouts/cards";
import { IoClose } from "react-icons/io5";
import Board from "./board";
import { updateURLParameter } from "./helpers";

const Game = ({ onDelete, title, list }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  const handleImageChange = (e) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img", e.target.value)
    );
  };
  const handleDelete = () => {
    onDelete(list);
  };

  return (
    <div className="md:inner md:w-1/2 pb-4 md:pr-4">
      <Card title="Game" key={list.id} onDelete={handleDelete} list={list}>
        <div className="App">
          <h1>React sliding puzzle</h1>
          <Board imgUrl={imgUrl} />
          <input value={imgUrl} onChange={handleImageChange} />
        </div>
      </Card>
    </div>
  );
};

export default Game;