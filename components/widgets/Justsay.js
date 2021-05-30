import React, { useState } from "react";
import { CardEdit } from "../cards/card";
import { MdClose, MdEdit } from "react-icons/md";
import Modal from "../modal";
import EditJustSay from "../cards/editJustSay";

const JustSay = ({ title, list, onDelete, onEdit }) => {
  const [modalActiveEditJustSay, setModalActiveEditJustSay] = useState(false);

  const handleSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditJustSay(false);
  };

  const handleDelete = () => {
    onDelete(list);
  };

  const handleCancel = () => {
    setModalActiveEditJustSay(false);
  };

  const handleEdit = () => {
    setModalActiveEditJustSay(true);
  };

  return (
    <>
      {modalActiveEditJustSay && (
        <Modal onCancel={handleCancel}>
          <EditJustSay onEditSubmit={handleSubmit} list={list} />
        </Modal>
      )}
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <CardEdit
          title="JustSay"
          key={list.id}
          onDelete={handleDelete}
          list={list}
          onEdit={handleEdit}
        >
          <div className="text-center mt-8 mb-12">
            <h1 className="text-4xl font-bold">{list.value}</h1>
          </div>
          <div className="text-xs text-gray-400">
            <div className="mt-6"></div>
          </div>
        </CardEdit>
      </div>
    </>
  );
};

export default JustSay;
