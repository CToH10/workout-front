"use client";

import { useApi } from "@/context/apiContext";
import { getWorkoutDate } from "@/utils/workoutDate";
import { useEffect } from "react";

export default function EditWorkout({
  params,
}: {
  params: { workoutId: number | string };
}) {
  const { protect, workoutToPage, workoutById } = useApi();

  useEffect(() => {
    protect();
    workoutById(Number(params.workoutId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="absolute top-[185px] left-2/4 -translate-x-2/4 translate-y-2/4">
      <h1 className="text-heading1 text-grey-10">{getWorkoutDate(workoutToPage?.date!)}</h1>
      {workoutToPage?.daily_exercise.map((workout) => {
        return (
          <div key={workout.exercise.id}>
            <p className="text-heading7 text-brand-3">{workout.exercise.name}</p>
            <p className="text-heading7 text-grey-10">Reps: {workout.reps}</p>
            <p className="text-heading7 text-grey-10">Peso: {workout.weight}</p>
            <p className="text-heading7 text-grey-10">Séries: {workout.series}</p>
            <p className="text-heading7 text-grey-10">Carga total: {workout.totalLoad}</p>
          </div>
        );
      })}
    </section>
  );
}
