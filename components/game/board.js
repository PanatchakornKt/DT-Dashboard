import React, { useState } from "react";
import Tile from "./Tile";
import {
  canSwap,
  shuffle,
  swap,
  isSolved,
  TILE_COUNT,
  GRID_SIZE,
  BOARD_SIZE,
} from "./Helpers";

const Board = ({ imgUrl }) => {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
      const swappedTiles = swap(
        tiles,
        tileIndex,
        tiles.indexOf(tiles.length - 1)
      );
      setTiles(swappedTiles);
    }
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleClick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };
  const hasWon = isSolved(tiles);

  return (
    <>
      <ul style={style} className="p-0 relative mb-4">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            imgUrl={imgUrl}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>
      {hasWon && isStarted && (
        <div className="p-5 border border-dashed border-gray-500 rounded-lg mb-3 font-semibold">
          👍🏼 Puzzle Solved 🎉
        </div>
      )}
      {!isStarted ? (
        <button
          onClick={handleStartClick}
          className="mb-3 bg-blue-500 hover:bg-blue-600 text-white focus:outline-none px-4 py-1 rounded-md"
        >
          Start game
        </button>
      ) : (
        <button
          onClick={handleShuffleClick}
          className="mb-3 bg-blue-500 hover:bg-blue-600 text-white focus:outline-none px-4 py-1 rounded-md"
        >
          Restart game
        </button>
      )}
      <p className="text-xs text-red-500 ">
        หมายเหตุ: เกมจะรีเซ็ตหากเปลี่ยนหรือรีเฟรชหน้าจอ
      </p>
    </>
  );
};

export default Board;
