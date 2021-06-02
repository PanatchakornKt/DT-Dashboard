import React, { useState } from "react";
import { CardEdit } from "../cards/card";
import { MdClose, MdEdit } from "react-icons/md";
import Modal from "../modal";
import EditJustShout from "../cards/editJustShout";

const JustShout = ({ title, list, onDelete, onEdit }) => {
  const [modalActiveEditJustShout, setModalActiveEditJustShout] = useState(false);

  const handleSubmit = (id, value) => {
    onEdit(id, value);
    setModalActiveEditJustShout(false);
  };

  const handleDelete = () => {
    onDelete(list);
  };

  const handleCancel = () => {
    setModalActiveEditJustShout(false);
  };

  const handleEdit = () => {
    setModalActiveEditJustShout(true);
  };

  return (
    <>
      {setModalActiveEditJustShout && (
        <Modal onCancel={handleCancel}>
          <EditJustShout onEditSubmit={handleSubmit} list={list} />
        </Modal>
      )}
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <CardEdit
          title="JustShout"
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

export default JustShout;
