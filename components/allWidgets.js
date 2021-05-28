import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiAddCircleLine, RiSettings3Line } from "react-icons/ri";
import { BiBomb } from "react-icons/bi";
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
  const [modalEdit, setModalEdit] = useState(false);
  const [modalSetting, setModalSetting] = useState(false);
  const [modalJustsay, setModalJustsay] = useState(false);
  const [modalCounter, setModalCounter] = useState(false);

  const [checkError, setCheckError] = useState("");
  const [txtJustsay, setTxtJustsay] = useState("");
  const [editJustsay, setEditJustsay] = useState("");
  const [txtCounter, setTxtCounter] = useState("");
  const [txtTimer, setTxtTimer] = useState("");

  const [justsayList, setJustsayList] = useState([]);
  const [counterList, setCounterList] = useState([]);
  const [timerList, setTimerList] = useState([]);

  const [timer, setTimer] = useState(0);
  const [justsay, setJustsay] = useState(0);
  const [counter, setCounter] = useState(0);
  const [widgetsList, setWidgetsList] = useState(0);

  const id = Math.floor(Math.random() * 10000) + 1;
  const date = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(date);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  let hms = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
  const dateTime = `Added on ${mo} ${da}, ${ye}, ${hms}`;

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

  // const updateJustSay = (id, title, dateTime) => {
  //   const newJustsay = justsayList.map((justsaytext) => {
  //     justsaytext.id === id ? (id, title, dateTime) : justsaytext;
  //   });
  //   setTxtJustsay(newJustsay);
  //   setEditJustsay("");
  //   console.log("mapp");
  // };

  const onAddTxtJustSay = (e) => {
    e.preventDefault();
    if (!editJustsay) {
      setTxtJustsay("".trim());
      setCheckError("");
      if (txtJustsay.length < 3) {
        setCheckError("Please enter at least 3 characters.");
      } else {
        const title = "JusySay";
        const newWidget = { id, title, dateTime, txtJustsay };
        setJustsayList([...justsayList, newWidget]);
        setModalJustsay(false);
        setJustsay(justsay + 1);
        setWidgetsList(widgetsList + 1);
      }
    } else {
      //setEditJustsay("".trim());
      // const title = "JusySay";
      // const newWidget = { id, title, dateTime, txtJustsay };
      // setJustsayList([...justsayList, newWidget]);
      // setModalJustsay(false);
      // setJustsay(justsay + 1);
      // setWidgetsList(widgetsList + 1);
      // console.log("EditJustsay");
      // const newJustSay = justsayList.map((justsaytext) => {
      //   justsaytext.id === txtJustsay.id ? "katang" : null;
      // });
      // console.log(justsaytext);
      // const findJustsay = justsayList.find(
      //   (justsaytext) => justsaytext.id === txtJustsay.id
      // );
      // //console.log(findJustsay);
      // setEditJustsay(findJustsay);
      //updateJustSay(txtJustsay, editJustsay.id);
      //setTxtJustsay(txtJustsay);
      //setEditJustsay(txtJustsay);
    }
  };

  const onInputEditJustSay = (e) => {
    setEditJustsay(e.target.value);
  };

  const onAddTxtCounter = (e) => {
    e.preventDefault();
    setTxtCounter("");
    setCheckError("");
    if (Number(txtCounter) < 0) {
      setCheckError("Please enter at least 0.");
    } else if (txtCounter.length < 0) {
      setCheckError("Please provide some value.");
    } else {
      const title = "Counter";
      const newWidget = { id, title, dateTime, txtCounter };
      setCounterList([...counterList, newWidget]);
      setModalCounter(false);
      setCounter(counter + 1);
      setWidgetsList(widgetsList + 1);
    }
    console.log(counterList);
  };

  const onCancelText = () => {
    setModalJustsay(false);
    setModalCounter(false);
    setModalEdit(false);
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
    const title = "Timer";
    const newWidget = { id, title, dateTime, setTxtTimer };
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
          <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
          Add Widget
        </button>{" "}
        <button
          className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-500 hover:bg-gray-600"
          onClick={openSetting}
        >
          <RiSettings3Line className="inline-block text-xl relative -top-0.5" />{" "}
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
                <IoClose />
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
                  <p className="text-red-600 text-xs mt-1">{checkError}</p>
                </fieldset>
              </div>
            </div>
          </div>
        )}

        {modalEdit && (
          <div className="fixed flex items-center py-5 justify-center top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-50">
            <div className="relative bg-gray-200 m-5 p-6 pt-4 md:p-8 md:pt-6 rounded-2xl w-96 max-w-full max-h-full overflow-auto">
              <button
                onClick={onCancelText}
                className="absolute text-lg text-gray-600 top-4 right-4 focus:outline-none"
              >
                <IoClose />
              </button>
              <div>
                <fieldset>
                  <h2 className="text-xl mb-2">Edit JustSay</h2>
                  <form className="flex" onSubmit={onAddTxtJustSay}>
                    <div className="flex-1 mr-1">
                      <input
                        type="text"
                        className="w-full px-2.5 py-1 border focus:outline-none rounded-md"
                        placeholder="Enter text"
                        //defaultValue={txtJustsay}
                        onChange={onInputEditJustSay}
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
                  <p>test {editJustsay}</p>
                  {/* <p className="text-red-600 text-xs mt-1">{checkError}</p> */}
                </fieldset>
              </div>
            </div>
          </div>
        )}

        {justsay > 0 ? (
          <CardJustSay
            justsay={justsay}
            setJustsayList={setJustsayList}
            justsayList={justsayList}
            setJustsay={setJustsay}
            setWidgetsList={setWidgetsList}
            widgetsList={widgetsList}
            setModalEdit={setModalEdit}
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
                  <IoClose />
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
                    <p className="text-red-600 text-xs mt-1">{checkError}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {counter > 0 ? (
          <CardCounter
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
