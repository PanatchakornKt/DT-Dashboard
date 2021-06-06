import React, { useState } from "react";
import Modal from "../Modal";
import { MdClose, MdEdit, MdRefresh } from "react-icons/md";
import weatherAPI from "../../pages/api/weatherAPI";
import Card from "../cards/Card";
import WidgetsEdit from "../cards/WidgetsEdit";

const Weather = ({ list, onDelete, onData }) => {
  const [modalActiveDataWeather, setModalActivDataWeather] = useState(false);
  let dataName;
  let dataIconDesc;
  let dataTemp;
  let refreshBtn;

  const handleCancel = () => {
    setModalActivDataWeather(false);
  };
  const handleEdit = () => {
    setModalActivDataWeather(true);
  };
  const handleDelete = () => {
    onDelete(list);
  };

  const handleRefresh = async () => {
    const res = await weatherAPI.get("/data/2.5/weather", {
      params: {
        q: list.value.name,
        units: "metric",
      },
    });
    const { data } = res;
    // if (list.type === "weather") {
    onData(list.id, "weather", data);
    //onData(list.id, "noWeather", list.value.name);
    //}
  };

  //   try {
  //     const res = await weatherAPI.get("/data/2.5/weather", {
  //       params: {
  //         q: list.value.name,
  //         units: "metric",
  //       },
  //     });
  //     const { data } = res;
  //     onData(list.id, "weather", data);
  //     console.log(data);
  //   } catch {
  //     onData(list.id, "noWeather", list.value.name);
  //   }
  // };

  const onEditSubmit = async (id, type, name) => {
    try {
      const res = await weatherAPI.get("/data/2.5/weather", {
        params: {
          q: name,
          units: "metric",
        },
      });
      const { data } = res;
      onData(id, "weather", data);
    } catch {
      onData(id, "noWeather", name);
    }
    setModalActivDataWeather(false);
  };

  if (list.type === "noWeather") {
    dataName = (
      <h3 className="text-xl font-bold capitalize text-red-600">
        {list.value}
      </h3>
    );
    dataIconDesc = (
      <h4 className="text-red-400 -mt-1">
        <span className="align-middle">City not found</span>
      </h4>
    );
    dataTemp = (
      <h2 className="text-red-500 mt-1 text-5xl font-extralight">--</h2>
    );
  } else if (list.type === "weather") {
    refreshBtn = <MdRefresh />;
    dataName = (
      <h3 className="text-xl font-bold capitalize">{list.value.name}</h3>
    );
    dataIconDesc = (
      <h4 className="text-gray-400 -mt-1 flex justify-center items-center">
        <img
          className="h-10 w-10"
          src={`http://openweathermap.org/img/wn/${list.value.weather[0].icon}@2x.png`}
          alt="logo"
        />
        <span className="pr-2">{list.value.weather[0].description}</span>
      </h4>
    );
    dataTemp = (
      <h2 className="text-gray-500 mt-1 text-5xl font-extralight">
        {`${parseInt(list.value.main.temp)}°`}
      </h2>
    );
  }

  return (
    <>
      {modalActiveDataWeather && (
        <Modal onCancel={handleCancel}>
          <WidgetsEdit
            title="Edit Weather"
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title={"Weather" || "noWeather"}
        closeBtn={<MdClose />}
        editBtn={<MdEdit />}
        refreshBtn={refreshBtn}
        key={list.id}
        onDelete={handleDelete}
        onEdit={handleEdit}
        restart={handleRefresh}
        list={list}
      >
        <div className="text-center">
          {dataName}
          {dataIconDesc}
          {dataTemp}
          <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">
              Last updated on {list.date}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Weather;
