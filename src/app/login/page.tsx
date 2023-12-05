"use client";
import { LoginForm } from "@/components/Forms/LoginForm";
import { RegisterForm } from "@/components/Forms/RegisterForm";
import { useApi } from "@/context/apiContext";
import Modal from "react-modal";

export default function LoginPage() {
  const { modalOpen, setModalOpen, modalStyle } = useApi();

  return (
    <>
      <main className="flex flex-col gap-6 w-[80%] max-w-sm absolute position-center">
        <div className="flex flex-row justify-between items-center">
          <p className="text-heading7 text-brand-3 font-semibold">
            Ainda não é registrado?
          </p>
          <button
            className="btn-big w-[35%] btn-brand1 text-btnBig"
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
          >
            Cadastro
          </button>
        </div>
        <LoginForm />
        <Modal
          isOpen={modalOpen}
          style={modalStyle}
          contentLabel="Formulário de cadastro"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          parentSelector={() => document.body}
        >
          <button
            onClick={() => setModalOpen(!modalOpen)}
            className="btn-small btn-brand1 mb-8"
          >
            Fechar
          </button>
          <RegisterForm />
        </Modal>
      </main>
    </>
  );
}
