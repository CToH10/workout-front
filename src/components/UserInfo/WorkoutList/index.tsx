"use client";

import { useApi } from "@/context/apiContext";
import { DailyExerciseList } from "./DailyExercise";
import { getWorkoutDate } from "@/utils/workoutDate";
import { FaPen, FaTrash } from "react-icons/fa";
import Link from "next/link";

interface WorkoutListProps {
  className: string;
}

export const WorkoutList = ({ className }: WorkoutListProps) => {
  const { workoutByUser, deleteWorkout } = useApi();

  return (
    <section className={className}>
      <p className="text-heading2 text-grey-7 font-bold">Treinos</p>
      <ul className="lg:grid-cols-3 lg:grid md:grid md:grid-cols-2 gap-2 max-w-[850px] overflow-auto lg:max-w-[100%] lg:gap-x-2 scrollbar">
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
                  <Link
                    className="btn-small btn-brand-opacity flex items-center justify-center"
                    href={`workout/${workout.id}`}
                  >
                    <FaPen />
                  </Link>
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
