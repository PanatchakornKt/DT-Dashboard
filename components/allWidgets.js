import React, { useState } from "react";
import WidgetsCard from "./cards/widgetsCard";
import { Card } from "./cards/card";
import { Cards } from "./cards/card";
import Modal from "./modal";
import Button from "./button";
import AllSettings from "./allSettings";

import JustSay from "./widgets/JustSay";
import JustShout from "./widgets/Justshout";
import Counter from "./widgets/Counter";
import Timer from "./widgets/Timer";
import CardJustSay from "./cards/cardJustsay";
import CardJustShout from "./cards/cardJustshout";
import CardCounter from "./cards/cardCounter";

import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  RiAddCircleLine,
  RiIncreaseDecreaseLine,
  RiSettings3Line,
} from "react-icons/ri";

const AllWidgets = () => {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveSettings, setModalActiveSettings] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveJustShout, setModalActiveJustShout] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);
  const [modalActiveWeather, setModalActiveWeather] = useState(false);
  const [listAllWidgets, setListAllWidgets] = useState([]);

  const [justSay, setJustSay] = useState("");
  const [justShout, setJustShout] = useState("");
  const [counter, setCounter] = useState("");
  const [timer, setTimer] = useState("");
  const [weather, setWeather] = useState("");
  const [zero, setZero] = useState("");
  const [totalTimer, setTotalTimer] = useState("00:00");

  const check = false;
  const disabled = false;

  const date = new Date();
  const year = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  const time = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
  const dateTime = `${month} ${day}, ${year}, ${time}`;

  const handleClick = () => {
    setModalActiveMenu(true);
  };

  const handleJustSay = () => {
    setModalActiveMenu(false);
    setModalActiveJustSay(true);
    setJustSay();
  };

  const handleJustShout = () => {
    setModalActiveMenu(false);
    setModalActiveJustShout(true);
    setJustShout();
  };

  const handleCounter = () => {
    setModalActiveMenu(false);
    setModalActiveCounter(true);
    setCounter();
  };

  const handleTimer = () => {
    setModalActiveMenu(false);
    setTimer("");
    handleCancel();

    const id = Math.floor(Math.random() * 10000) + 1;
    const data = {
      value: "",
      id: id,
      date: dateTime,
      type: "timer",
    };
    setListAllWidgets([...listAllWidgets, data]);
  };

  const handleWeather = () => {
    setModalActiveMenu(false);
    setModalActiveWeather(true);
    setWeather();
  };

  const handleSettings = () => {
    setModalActiveSettings(true);
  };

  const handleCancel = () => {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveJustShout(false);
    setModalActiveCounter(false);
    setModalActiveSettings(false);
  };

  const handleDelete = (list) => {
    if (listAllWidgets.length > 0) {
      setListAllWidgets(
        listAllWidgets.filter((widget) => widget.id !== list.id)
      );
    }
  };

  const handleClear = () => {
    setListAllWidgets([]);
    setModalActiveSettings(false);
  };

  const onEdit = (newId, newValue) => {
    let newlistAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
      }
      newlistAllWidgets.push(data);
    });
    setListAllWidgets(newlistAllWidgets);
  };
  const mapNewData = (list, value) => {
    listAllWidgets.map((data) => {
      if (data.id === list.id) {
        return { ...data, value };
      } else {
        return data;
      }
    });

    let getTimer = listAllWidgets
      .filter((data) => data.type === "timer")
      .map((data) => data.value);
    if (getTimer.length != 0) {
      getTimer = getTimer.reduce((prev, next) => prev + next);
    }
    const min = ("0" + Math.floor((getTimer / 60000) % 60)).slice(-2);
    const sec = ("0" + Math.floor((getTimer / 1000) % 60)).slice(-2);
    setTotalTimer(min + ":" + sec);
  };

  const checkWidgets = check;
  const handleAddWidgets = () => {
    if (listAllWidgets.length > 0) {
      return listAllWidgets.map((list) => {
        if (list.type === "justSay") {
          return (
            <JustSay
              onEdit={onEdit}
              key={list.id}
              title={justSay}
              list={list}
              onDelete={handleDelete}
            />
          );
        }else if (list.type === "justShout") {
          return (
            <JustShout
              onEdit={onEdit}
              key={list.id}
              title={justShout}
              list={list}
              onDelete={handleDelete}
            />
          );
        } else if (list.type === "counter") {
          return (
            <Counter
              zero={zero}
              setZero={setZero}
              key={list.id}
              title={counter}
              list={list}
              onDelete={handleDelete}
            />
          );
        } else if (list.type === "timer") {
          return (
            <Timer
              totalTime={totalTimer}
              setTotalTimer={setTotalTimer}
              zero={zero}
              setZero={setZero}
              key={list.id}
              title={timer}
              list={list}
              onDelete={handleDelete}
              mapNewData={mapNewData}
            />
          );
        }
      });
    } else {
      return (
        <>
          <div className="md:inner md:w-1/2 pb-4 md:pr-4">
            <Cards title=" ">
              <div className="text-center text-gray-400 my-8 font-light">
                <p className="text-4xl mb-2">No widgets at all </p>
                <p>
                  Click{" "}
                  <button
                    onClick={handleClick}
                    className="font-normal text-blue-400 focus:outline-none"
                  >
                    {" "}
                    HERE{" "}
                  </button>{" "}
                  to add a new one
                </p>
              </div>
            </Cards>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <h2 className="text-xl undefined">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4 space-x-1">
          <Button doClick={handleClick} disabled={disabled}>
            <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
            Add Widget
          </Button>
          <Button
            doClick={handleSettings}
            checkColor="darkGray"
            disabled={!disabled}
          >
            <RiSettings3Line className="inline-block text-xl relative -top-0.5" />{" "}
            Settings
          </Button>
        </div>

        <div className="md:flex md:flex-wrap md:-mr-4">
          {handleAddWidgets()}
        </div>

        {modalActiveMenu && (
          <Modal onCancel={handleCancel}>
            <h2 className="text-xl undefined">Add widget</h2>
            <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
              <div onClick={handleJustSay} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetsCard title="JustSay">
                  <AiOutlineMessage className="mx-auto text-4xl" />
                </WidgetsCard>
              </div>
              <div onClick={handleJustShout} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetsCard title="JustShout">
                  <HiOutlineSpeakerphone className="mx-auto text-4xl" />
                </WidgetsCard>
              </div>
              <div onClick={handleCounter} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetsCard title="Counter">
                  <RiIncreaseDecreaseLine className="mx-auto text-4xl" />
                </WidgetsCard>
              </div>
              <div onClick={handleTimer} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetsCard title="Timer">
                  <IoTimerOutline className="mx-auto text-4xl" />
                </WidgetsCard>
              </div>
              <div onClick={handleWeather} className="w-1/3 pt-1.5 pl-1.5">
                <WidgetsCard title="Weather">
                  <TiWeatherPartlySunny className="mx-auto text-4xl" />
                </WidgetsCard>
              </div>
            </div>
          </Modal>
        )}

        {modalActiveJustSay && (
          <Modal onCancel={handleCancel}>
            <CardJustSay
              setJustSay={setJustSay}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              dateTime={dateTime}
            />
          </Modal>
        )}

        {modalActiveJustShout && (
          <Modal onCancel={handleCancel}>
            <CardJustShout
              setJustShout={setJustShout}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              dateTime={dateTime}
            />
          </Modal>
        )}

        {modalActiveCounter && (
          <Modal onCancel={handleCancel}>
            <CardCounter
              setCounter={setCounter}
              handleAddWidgets={handleAddWidgets}
              handleCancel={handleCancel}
              setListAllWidgets={setListAllWidgets}
              listAllWidgets={listAllWidgets}
              dateTime={dateTime}
            />
          </Modal>
        )}

        {modalActiveSettings && (
          <Modal onCancel={handleCancel}>
            <AllSettings
              setZero={setZero}
              listAllWidgets={listAllWidgets}
              totalTimer={totalTimer}
            >
              <div className="p-5 border-1 bg-white rounded-2xl relative mb-4">
                <h2 className="text-lg font-bold text-gray-400 mb-1.5">
                  Delete Zone
                </h2>
                <button
                  className="text-white focus:outline-none px-4 py-1 rounded-md bg-red-500 hover:bg-red-600 w-full mb-1"
                  onClick={handleClear}
                >
                  {" "}
                  Delete all widgets
                </button>
              </div>
            </AllSettings>
          </Modal>
        )}
      </div>
    </>
  );
};

export default AllWidgets;
