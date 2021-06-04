import React from "react";
import Card from "../layouts/cards";
import { IoClose } from "react-icons/io5";

const Game = ({ onDelete, title, list }) => {
  const handleDelete = () => {
    onDelete(list);
  };

  return (
    <div className="md:inner md:w-1/2 pb-4 md:pr-4">
      <Card title="Game" key={list.id} onDelete={handleDelete} list={list}>
        <p>Game</p>
      </Card>
    </div>
  );
};

export default Game;
