import React, { useState } from "react";
import Card from "../cards/card";
import { MdClose, MdEdit } from "react-icons/md";
import Modal from "../modal";
import EditJust from "../cards/editJust";

const JustSay = ({ list, onDelete, onEdit }) => {
  const [modalActiveEditJustSay, setModalActiveEditJustSay] = useState(false);

  const handleDelete = () => {
    onDelete(list);
  };

  const handleCancel = () => {
    setModalActiveEditJustSay(false);
  };

  const handleEdit = () => {
    setModalActiveEditJustSay(true);
  };

  const onEditSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditJustSay(false);
  };

  return (
    <>
      {modalActiveEditJustSay && (
        <Modal onCancel={handleCancel}>
          <EditJust
            title="Edit JustSay"
            onEditSubmit={onEditSubmit}
            list={list}
          />
        </Modal>
      )}
      <Card
        title="JustSay"
        key={list.id}
        list={list}
        closeBtn={<MdClose />}
        editBtn={<MdEdit />}
        onDelete={handleDelete}
        onEdit={handleEdit}
      >
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold">{list.value}</h1>
        </div>
        <div className="mt-6 "></div>
      </Card>
    </>
  );
};

export default JustSay;
