"use client";

import { useApi } from "@/context/apiContext";
import { DailyExerciseList } from "./DailyExercise";
import { getWorkoutDate } from "@/utils/workoutDate";
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface WorkoutListProps {
  className: string;
}

export const WorkoutList = ({ className }: WorkoutListProps) => {
  const { workoutByUser, deleteWorkout } = useApi();

  const router = useRouter();

  return (
    <section className={className}>
      <p className="text-heading2 text-grey-7 font-bold">Treinos</p>
      <ul className="lg:flex lg:flex-wrap gap-2 max-w-[850px] overflow-auto lg:max-w-[100%] lg:gap-x-2">
        {workoutByUser.map((workout) => {
          return workout.daily_exercise.length > 0 ? (
            <li
              key={workout.id}
              className="mb-3 max-w-[250px] min-w-[250px] max-h-[268px] overflow-auto lg:max-w-[270px] lg:min-w-[270px] scrollbar"
            >
              <section className="flex justify-between">
                <p className="text-heading3 text-grey-9 font-semibold">
                  {getWorkoutDate(workout.date)}
                </p>
                <section className="max-w-[35%] min-w-[35%] flex justify-between">
                  <button
                    className="btn-small btn-brand-opacity"
                    onClick={() => {
                      router.push(`workout/${workout.id}`);
                    }}
                  >
                    <FaPen />
                  </button>
                  <button
                    className="btn-small btn-alert"
                    onClick={() => {
                      deleteWorkout(workout.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </section>
              </section>
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
