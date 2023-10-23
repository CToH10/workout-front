"use client";

import { useApi } from "@/context/apiContext";
import { DailyExerciseList } from "./DailyExercise";
import { getWorkoutDate } from "@/utils/workoutDate";

interface WorkoutListProps {
  className: string;
}

export const WorkoutList = ({ className }: WorkoutListProps) => {
  const { workoutByUser } = useApi();
  return (
    <section className={className}>
      <p className="text-heading2 text-grey-7 font-bold">Treinos</p>
      <ul className="lg:flex lg:flex-wrap gap-2 max-w-[850px] overflow-auto">
        {workoutByUser.map((workout) => {
          return workout.daily_exercise.length > 0 ? (
            <li key={workout.id} className="mb-3 max-w-[250px] min-w-[250px] max-h-[268px] overflow-auto">
              <p className="text-heading3 text-grey-9 font-semibold">
                {getWorkoutDate(workout.date)}
              </p>
              <DailyExerciseList daily_workout={workout.daily_exercise} />
            </li>
          ) : (
            <></>
          );
        })}
      </ul>
    </section>
  );
};
