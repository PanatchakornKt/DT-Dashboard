import React, { useState, useEffect } from "react";
import Card from "../layouts/Cards";
import Button from "../Button";
import { IoClose } from "react-icons/io5";

const Timer = ({
  title,
  list,
  onDelete,
  zero,
  setZero,
  mapNewData,
  totalTimer,
  setTotalTimer,
}) => {
  let disabled = true;
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const handleDelete = () => {
    onDelete(list);
  };

  useEffect(() => {
    if (zero == "Timer") {
      setTime(0);
      setTimerOn(false);
      setZero("");
    }
  }, [zero]);

  useEffect(() => {
    mapNewData(list, time);
  }, [time]);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const onClick_1 = () => {
    setTimerOn(true);
  };

  const onClick_2 = () => {
    setTimerOn(false);
  };

  const onClick_3 = () => {
    setTime(0);
    setTimerOn(false);
  };

  list.value = time;
  return (
    <div className="md:inner md:w-1/2 pb-4 md:pr-4">
      <Card title="Timer" key={list.id} onDelete={handleDelete} list={list}>
        <div className="text-center space-x-1">
          <div className="text-6xl mx-7 flex items-center justify-center mt-4 mb-6">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </div>
          {!timerOn && (
            <Button doClick={onClick_1} disabled={!disabled}>
              Start
            </Button>
          )}
          {timerOn && (
            <Button doClick={onClick_2} disabled={!disabled}>
              Pause
            </Button>
          )}
          {!timerOn && time == 0 && (
            <Button doClick={onClick_3} disabled={disabled}>
              Reset
            </Button>
          )}
          {timerOn && (
            <Button doClick={onClick_3} disabled={!disabled}>
              Reset
            </Button>
          )}
          {!timerOn && time > 0 && (
            <Button doClick={onClick_3} disabled={!disabled}>
              Reset
            </Button>
          )}
        </div>
        <div className="mt-6"></div>
      </Card>
    </div>
  );
};

export default Timer;
