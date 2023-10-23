"use client";

import { useApi } from "@/context/apiContext";

export const DeleteProfileForm = () => {
  const { deleteProfile, setModalOpen } = useApi();

  return (
    <section className="flex flex-col justify-center gap-3">
      <h3 className="text-heading7 text-grey-5 w-full text-center">
        Você terá até 30 dias para recuperar o perfil, depois disso todos os
        dados serão deletados
      </h3>
      <h2 className="text-heading3 text-grey-8 w-full text-center">
        Tem certeza que quer desativar o perfil?
      </h2>
      <div className="flex justify-center gap-2 w-full">
        <button
          className="btn-medium btn-alert"
          onClick={() => deleteProfile()}
        >
          Sim
        </button>
        <button
          className="btn-medium btn-light"
          onClick={() => setModalOpen(false)}
        >
          Cancelar
        </button>
      </div>
    </section>
  );
};
