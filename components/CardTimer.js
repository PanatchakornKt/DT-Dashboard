import React, { useState } from "react";
import Card from "./layouts/card";

const CardTimer = ({ setTimer, setWidgetsList, widgetsList}) => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const onClearTime = () => {
    setTimer(0);
    setWidgetsList(widgetsList - 1);
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 2000));
  };

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedM === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => {
    start();
  };

  const h = () => {
    if (time.h === 0) {
      return " ";
    } else {
      return <span>{time.h >= 0 ? time.h : "0" + time.h}</span>;
    }
  };

  const m = () => {
    if (time.m === 0) {
      return " ";
    } else {
      return <span>{time.m >= 0 ? time.m : "0" + time.m}</span>;
    }
  };

  return (
    <>
      <Card>
        {status === 0 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="absolute top-5 right-5">
              <button
                onClick={onClearTime}
                className="text-lg text-gray-600 focus:outline-none undefined"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  {h()}
                  {m()}
                  <span>{time.s >= 10 ? time.h : "0" + time.s}</span>:
                  <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
                </div>
              </div>
              <button
                onClick={start}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Start
              </button>
              <button
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300 cursor-default ml-2"
                disabled
              >
                Reset
              </button>
            </div>
            <div className="mt-6"></div>
          </>
        ) : (
          ""
        )}

        {status === 1 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="absolute top-5 right-5">
              <button className="text-lg text-gray-600 focus:outline-none undefined">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  {h()}
                  {m()}
                  <span>{time.s >= 10 ? time.h : "0" + time.s}</span>:
                  <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
                </div>
              </div>
              <button
                onClick={stop}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Pause
              </button>
              <button
                onClick={reset}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 ml-2"
              >
                Reset
              </button>
            </div>
            <div className="mt-6"></div>
          </>
        ) : (
          ""
        )}

        {status === 2 ? (
          <>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5">Timer</h2>
            <div className="absolute top-5 right-5">
              <button className="text-lg text-gray-600 focus:outline-none undefined">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mt-4 mb-6">
                <div className="text-6xl mx-7">
                  {h()}
                  {m()}
                  <span>{time.s >= 10 ? time.h : "0" + time.s}</span>:
                  <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
                </div>
              </div>
              <button
                onClick={resume}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Start
              </button>
              <button
                onClick={reset}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 ml-2"
              >
                Reset
              </button>
            </div>
          </>
        ) : (
          " "
        )}
      </Card>
    </>
  );
};

export default CardTimer;
