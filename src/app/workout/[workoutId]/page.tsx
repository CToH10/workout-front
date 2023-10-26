"use client";

import { WorkoutToEditCard } from "@/components/WorkoutToEditCard";
import { useApi } from "@/context/apiContext";
import { getWorkoutDate } from "@/utils/workoutDate";
import { useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa6";

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
    <section className="absolute top-[185px] left-2/4 -translate-x-2/4 -translate-y-[25%] max-h-[360px] min-h-[360px] max-w-[300px] lg:max-w-[770px]">
      <section className="flex justify-between items-center mb-4 max-w-[340px] min-[1408px]:max-w-none">
        <h1 className="text-heading1 text-grey-10">
          {getWorkoutDate(workoutToPage?.date!)}
        </h1>
        <section className="buttons flex justify-between gap-4">
          <button className="btn-medium btn-brand1">{<FaPen />}</button>
          <button className="btn-medium btn-alert">{<FaTrash />}</button>
        </section>
      </section>
      <ul className="flex flex-wrap gap-6">
        {workoutToPage?.daily_exercise.map((workout) => {
          return (
            <li key={workout.exercise.id}>
              <WorkoutToEditCard workout={workout} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
