"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

interface DeleteProps {
  onDelete: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50 ">
      <div className="bg-white rounded-[0.4rem] p-4 shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Delete</h2>
        <p>Are you sure you want to delete this ticket?</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const Delete: React.FC<DeleteProps> = ({ onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleDelete = () => {
    setModalOpen(!isModalOpen);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-500 w-7 h-7 hover:text-red-200 hover:cursor-pointer"
        onClick={handleDelete} // Trigger handleDelete on click
      />{" "}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Delete;
