import React, { useState } from "react";
import Modal from "./modal";

import Card from "../components/layouts/card";
import CardJustSay from "./cards/CardJustsay";
import CardCounter from "./cards/CardCounter";
import CardTimer from "./cards/CardTimer";

import AddJustSay from "./widgets/addJustsay";
import AddCounter from "./widgets/addCounter";
import AddTimer from "./widgets/addTime";

const AllWidgets = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalSetting, setModalSetting] = useState(false);
  const [modalJustsay, setModalJustsay] = useState(false);
  const [modalCounter, setModalCounter] = useState(false);

  const [txtJustsay, setTxtJustsay] = useState("");
  const [txtCounter, setTxtCounter] = useState("");
  const [txtTimer, setTxtTimer] = useState("");

  const [justsayList, setJustsayList] = useState([]);
  const [counterList, setCounterList] = useState([]);
  const [timerList, setTimerList] = useState([]);

  const [timer, setTimer] = useState(0);
  const [justsay, setJustsay] = useState(0);
  const [counter, setCounter] = useState(0);
  const [widgetsList, setWidgetsList] = useState(0);

  const openModal = () => {
    setModalActive(true);
  };

  const openSetting = () => {
    setModalSetting(true);
  };

  const onCancel = () => {
    setModalActive(false);
    setModalSetting(false);
  };

  const onClearAll = () => {
    setModalSetting(false);
    setJustsay(0);
    setCounter(0);
    setTimer(0);
    setWidgetsList(0);
  };

  const onInputJustSay = (e) => {
    setTxtJustsay(e.target.value);
  };

  const onInputCounter = (e) => {
    setTxtCounter(e.target.value);
  };

  const onAddTxtJustSay = (e) => {
    e.preventDefault();
    setTxtJustsay("");
    const id = Math.floor(Math.random() * 10000) + 1;
    const dateTime = new Date();
    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    const title = "JusySay";
    const newWidget = { id, title, time, txtJustsay };
    setJustsayList([...justsayList, newWidget]);
    setModalJustsay(false);
    setJustsay(justsay + 1);
    setWidgetsList(widgetsList + 1);
  };

  const onAddTxtCounter = (e) => {
    e.preventDefault();
    setTxtCounter("");
    const id = Math.floor(Math.random() * 10000) + 1;
    const dateTime = new Date();
    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    const title = "Counter";
    const newWidget = { id, title, time, txtCounter };
    setCounterList([...counterList, newWidget]);
    setModalCounter(false);
    setCounter(counter + 1);
    setWidgetsList(widgetsList + 1);
  };

  const onCancelText = () => {
    setModalJustsay(false);
    setModalCounter(false);
  };

  const handleJustsay = () => {
    setModalActive(false);
    setModalJustsay(true);
  };

  const handleCounter = () => {
    setModalActive(false);
    setModalCounter(true);
  };

  const handleTimer = () => {
    setModalActive(false);
    setTxtTimer("");
    const id = Math.floor(Math.random() * 10000) + 1;
    const dateTime = new Date();
    const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
    const title = "Timer";
    const newWidget = { id, title, time, setTxtTimer };
    setTimerList([...timerList, newWidget]);
    setTimer(timer + 1);
    setWidgetsList(widgetsList + 1);
  };

  return (
    <>
      <div className="mb-4">
        <button
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
          onClick={openModal}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </g>
          </svg>{" "}
          Add Widget
        </button>{" "}
        <button
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600"
          onClick={openSetting}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="inline-block text-xl relative -top-0.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
            </g>
          </svg>{" "}
          Settings
        </button>
      </div>
      <div className="md:flex md:flex-wrap md:mr-4">
        {modalActive && (
          <Modal modalActive={modalActive} onCancel={onCancel}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className="flex flex-wrap text-center mt-1.5 -ml-1.5">
              <AddJustSay handleJustsay={handleJustsay} />
              <AddCounter handleCounter={handleCounter} />
              <AddTimer handleTimer={handleTimer} />
            </div>
          </Modal>
        )}

        {modalSetting && (
          <Modal modalSetting={modalSetting} onCancel={onCancel}>
            <h2 className="text-xl mb-4">Setting</h2>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                Statistics
              </h2>
              <div className="table">
                <div className="table-row">
                  <div className="table-cell pr-4 font-semibold">
                    Total widgets:{" "}
                  </div>
                  <div className="table-cell">{widgetsList}</div>
                </div>
              </div>
            </div>
            <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
              <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                Delete Zone
              </h2>
              <button
                onClick={onClearAll}
                className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1"
              >
                {" "}
                Delete all widgets
              </button>
            </div>
          </Modal>
        )}

        {widgetsList === 0 ? (
          <Card>
            <h2 className="text-lg font-bold text-gray-400 mb-1.5"></h2>
            <div className="text-center text-gray-400 my-8 font-light">
              <p className="text-4xl mb-2">No widgets at all</p>
              <p>
                Click{" "}
                <button
                  onClick={openModal}
                  className="font-normal text-blue-400 focus:outline-none"
                >
                  HERE
                </button>{" "}
                to add a new one
              </p>
            </div>
          </Card>
        ) : null}

        {modalJustsay && (
          <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
            <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
              <button
                onClick={onCancelText}
                className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                </svg>
              </button>
              <div>
                <fieldset>
                  <h2 className="text-xl mb-2">Add JustSay</h2>
                  <form className="flex" onSubmit={onAddTxtJustSay}>
                    <div className="flex-1 mr-1">
                      <input
                        type="text"
                        className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                        placeholder="Enter text"
                        value={txtJustsay}
                        onChange={onInputJustSay}
                        required
                      ></input>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
                      >
                        {" "}
                        Add
                      </button>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        )}

        {justsay > 0 ? (
          <CardJustSay
            txtJustsay={txtJustsay}
            justsay={justsay}
            setJustsay={setJustsay}
            widgetsList={widgetsList}
            setWidgetsList={setWidgetsList}
            justsayList={justsayList}
            setJustsayList={setJustsayList}
          />
        ) : null}

        {modalCounter && (
          <div>
            <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
              <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
                <button
                  onClick={onCancelText}
                  className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                  </svg>
                </button>
                <div>
                  <div>
                    <h2 className="text-xl mb-2">Add Counter</h2>
                    <form className="flex" onSubmit={onAddTxtCounter}>
                      <div className="flex-1 mr-1">
                        <input
                          type="number"
                          className="w-full px-2.5 py-1 focus:outline-none rounded-md"
                          placeholder="Enter the initial value"
                          value={txtCounter}
                          onChange={onInputCounter}
                          required
                        ></input>
                      </div>
                      <div>
                        <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
                          {" "}
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {counter > 0 ? (
          <CardCounter
            txtCounter={txtCounter}
            setTxtCounter={setTxtCounter}
            counter={counter}
            setCounter={setCounter}
            widgetsList={widgetsList}
            setWidgetsList={setWidgetsList}
            counterList={counterList}
            setCounterList={setCounterList}
          />
        ) : null}

        {timer > 0 ? (
          <CardTimer
            txtTimer={txtTimer}
            timer={timer}
            setTimer={setTimer}
            widgetsList={widgetsList}
            setWidgetsList={setWidgetsList}
            timerList={timerList}
            setTimerList={setTimerList}
          />
        ) : null}
      </div>
    </>
  );
};

export default AllWidgets;
