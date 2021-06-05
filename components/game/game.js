import React, { useState, useEffect } from "react";
import Card from "../layouts/cards";
import { IoClose } from "react-icons/io5";
import { gameSubject } from "./chess";
import Board from "./board"

const Game = ({ onDelete, title, list }) => {
  const [board, setBoard] = useState([]);

  const handleDelete = () => {
    onDelete(list);

    useEffect(() => {
      const subscribe = gameSubject.subscribe((game) => setBoard(game.board));
    }, []);
  };

  return (
    <div className="md:inner md:w-1/2 pb-4 md:pr-4">
      <Card title="Game" key={list.id} onDelete={handleDelete} list={list}>
        <p>Game</p>
        <Board />
      </Card>
    </div>
  );
};

export default Game;
