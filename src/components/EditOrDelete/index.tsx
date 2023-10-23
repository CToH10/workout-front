"use client";
import { FaPen, FaTrash } from "react-icons/fa";
import { useApi } from "@/context/apiContext";
import Modal from "react-modal";
import { useState } from "react";
import { EditUserProfileForm } from "../Forms/EditUserProfileForm";
import { DeleteProfileForm } from "../Forms/DeleteProfileForm";

interface EditOrDeleteProps {
  className: string;
}
type IFormToOpen = "edit" | "delete";

export const EditOrDelete = ({ className }: EditOrDeleteProps) => {
  const { modalOpen, modalStyle, setModalOpen } = useApi();
  const [formToOpen, setFormToOpen] = useState<IFormToOpen>("edit");
  return (
    <section
      className={`${className} flex justify-between items-center w-[150px] gap-2`}
    >
      <button
        className="btn-medium btn-brand-opacity"
        onClick={() => {
          setFormToOpen("edit");
          setModalOpen(true);
        }}
      >
        <FaPen />
      </button>
      <button
        className="btn-medium btn-alert"
        onClick={() => {
          setFormToOpen("delete");
          setModalOpen(true);
        }}
      >
        <FaTrash />
      </button>
      <Modal
        isOpen={modalOpen}
        style={modalStyle}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        parentSelector={() => document.body}
      >
        <button
          onClick={() => {
            setModalOpen(!modalOpen);
          }}
          className="btn-small btn-brand1 mb-8"
        >
          Fechar
        </button>
        <p className="text-grey-9 text-heading1">
          {formToOpen === "delete" ? (
            <DeleteProfileForm />
          ) : (
            <EditUserProfileForm />
          )}
        </p>
      </Modal>
    </section>
  );
};
