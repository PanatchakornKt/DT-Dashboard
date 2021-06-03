import React, { useState } from "react";
import Card from "../cards/card";
import { IoClose } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import Modal from "../modal";
import EditJust from "../cards/editJust";

const JustShout = ({ list, onDelete, onEditJustShout }) => {
  const [modalActiveEditJustShout, setModalActiveEditJustShout] =
    useState(false);

  const onEditSubmit = (id, value) => {
    onEditJustShout(id, value);
    setModalActiveEditJustShout(false);
  };

  const handleEdit = () => {
    setModalActiveEditJustShout(true);
  };

  const handleDelete = () => {
    onDelete(list);
  };

  const handleCancel = () => {
    setModalActiveEditJustShout(false);
  };
  return (
    <>
      {modalActiveEditJustShout && (
        <Modal onCancel={handleCancel}>
          <EditJust
            title="Edit JustShout"
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title="JustShout"
        key={list.id}
        list={list}
        onDelete={handleDelete}
        onEdit={handleEdit}
        closeBtn={<IoClose />}
        editBtn={<MdEdit />}
      >
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold">{list.value}</h1>
        </div>
        <div className="mt-6 "></div>
      </Card>
    </>
  );
};

export default JustShout;
