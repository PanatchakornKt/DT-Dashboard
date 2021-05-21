import React, { useState } from "react";
import Card from "./Card";

const CardTimer = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

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
            <div className="mt-6"></div>
          </>
        ) : (
          " "
        )}
      </Card>
    </>
  );
};

export default CardTimer;
