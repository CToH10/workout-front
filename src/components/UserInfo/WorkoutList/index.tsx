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
      <ul>
        {workoutByUser.map((workout) => {
          return (
            <li key={workout.id} className="mb-3">
              <p className="text-heading3 text-grey-9 font-semibold">
                {getWorkoutDate(workout.date)}
              </p>
              <DailyExerciseList daily_workout={workout.daily_exercise} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
