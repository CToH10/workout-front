"use client";

import { useApi } from "@/context/apiContext";
import { useEffect } from "react";

interface UserCardProps {
  className: string;
}

export const UserCard = ({ className }: UserCardProps) => {
  const { userData, profileInfo } = useApi();
  useEffect(() => {
    profileInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let experience: string = "Carregando";

  switch (userData?.trainingExp) {
    case "beg":
      experience = "Iniciante";
      break;
    case "int":
      experience = "Intermediário";
      break;
    case "adv":
      experience = "Avançado";
      break;
    case "pro":
      experience = "Profissional";
      break;
    default:
      experience = "Não informado";
  }

  return (
    <section
      className={`${className} w-[250px] max-w-[250px] flex flex-col gap-2 border rounded-md border-brand-4 py-1 px-2 bg-grey-1 -z-10`}
    >
      <h2 className="text-heading2 text-grey-10 overflow-hidden whitespace-nowrap text-ellipsis max-w-full max-h-10">
        {(userData && userData!.name) || "Carregando"}
      </h2>
      <p className="text-heading6 text-grey-10 overflow-hidden whitespace-nowrap text-ellipsis max-w-full max-h-10">
        {(userData && userData!.email) || "Carregando"}
      </p>
      <p className=" text-heading6 text-brand-3 overflow-hidden whitespace-nowrap text-ellipsis max-w-full max-h-10">
        {experience}
      </p>
    </section>
  );
};
