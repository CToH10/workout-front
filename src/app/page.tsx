"use client";

import { ExerciseCard } from "@/components/ExerciseCard";
import { useApi } from "@/context/apiContext";
import { useEffect } from "react";

export default function Home() {
  const { allExercises, getAllExercises } = useApi();

  useEffect(() => {
    getAllExercises();
    console.log(allExercises);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ul className="flex gap-1 flex-col relative z-0">
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
