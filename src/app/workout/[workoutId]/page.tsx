"use client";

import { WorkoutToEditCard } from "@/components/WorkoutToEditCard";
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
      <h1 className="text-heading1 text-grey-10">
        {getWorkoutDate(workoutToPage?.date!)}
      </h1>
      <ul>
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
