"use client";
import { ExerciseCard } from "@/components/ExerciseCard";
import { CreateWorkoutForm } from "@/components/Forms/CreateWorkoutForm";
import { useApi } from "@/context/apiContext";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "react-modal";

export default function Home() {
  const {
    allExercises,
    token,
    modalOpen,
    setModalOpen,
    modalStyle,
    buildPageLists,
  } = useApi();

  useEffect(() => {
    buildPageLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono gap-8">
      <div className="relative z-0 w-full max-w-5xl font-mono">
        <p className="text-brand-3 hover:text-brand-2 hover:font-bold text-heading2 font-medium lg:w-4/6">
          Um ótimo lugar para controlar sua progressão e maximizar seus ganhos
        </p>
      </div>
      {token && (
        <div className="w-full max-w-5xl flex flex-col gap-4 lg:flex-row justify-between items-center">
          <h3 className="font-mono text-brand-4 font-semibold text-heading5">
            Adicionar sessão de treino
          </h3>
          <button
            className="btn-success btn-small h-[50%] w-1/2 max-w-[120px]"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {<BiPlus className="inline" />}
          </button>
          <Modal
            isOpen={modalOpen}
            style={modalStyle}
            contentLabel="Novo treino"
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
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
            <CreateWorkoutForm />
          </Modal>
        </div>
      )}
      <div className="w-full max-w-5xl justify-between font-mono text-sm lg:flex lg:flex-col lg:items-start">
        <div className="flex justify-between w-full items-center h-[60px] mb-6">
          <h2 className="text-grey-10 text-heading4 font-bold">
            Sugestão de exercícios
          </h2>
        </div>
        <ul className="flex gap-1 flex-col relative z-0 lg:flex-wrap max-h-96 w-full overflow-auto scrollbar">
          {allExercises?.map((muscle) => ExerciseCard(muscle))}
        </ul>
      </div>
    </main>
  );
}
