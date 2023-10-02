"use client";

import { ExerciseCard } from "@/components/ExerciseCard";
import { useApi } from "@/context/apiContext";
import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";

export default function Home() {
  const { allExercises, getAllExercises, token } = useApi();

  useEffect(() => {
    getAllExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono gap-8">
      <div className="relative z-0 w-full max-w-5xl font-mono">
        <p className="text-brand-3 hover:text-brand-2 hover:font-bold text-heading2 font-medium lg:w-4/6">
          Um ótimo lugar para controlar sua progressão e maximizar seus ganhos
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex lg:flex-col lg:items-start">
        <div className="flex justify-between w-full items-center h-[60px] mb-6">
          <h2 className="text-grey-10 text-heading4 font-bold">Exercícios</h2>
          {token && (
            <button
              className="btn-success btn-small h-[50%]"
              onClick={() => {
                console.log("click");
              }}
            >
              {<BiPlus />}
            </button>
          )}
        </div>
        <ul className="flex gap-1 flex-col relative z-0 flex-wrap max-h-96 w-full">
          {allExercises?.map((muscle) => ExerciseCard(muscle))}
        </ul>
        {/* <input type="text" name="" id="" placeholder="Algum texto" />
        <input type="date" name="" id="" />
        <input type="number" name="" id="" />
        <select name="" id="">
          <option value="">Opção</option>
          <option value="">Opção</option>
          <option value="">Opção</option>
        </select>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button className="btn-medium btn-grey-light">Botão</button>
        <button className="btn-small btn-brand1">Botão</button>
        <button className="btn-big btn-brand-opacity">Botão</button>
        <button className="btn-big btn-light">Botão</button>
        <button className="btn-big btn-brand-outline-light">Botão</button>
        <button className="btn-big btn-alert">Botão</button>
        <button className="btn-big btn-success">Botão</button> */}
      </div>
    </main>
  );
}
