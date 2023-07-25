"use client";

import { useApi } from "@/context/apiContext";
import { DailyExerciseList } from "./DailyExercise";
import { getWorkoutDate } from "@/utils/workoutDate";

export const WorkoutList = () => {
  const { workoutByUser } = useApi();
  return (
    <ul className="">
      {workoutByUser.map((workout) => {
        console.log(workout);

        return (
          <li key={workout.id} className="">
            <p className="text-heading3 text-grey-9">
              {getWorkoutDate(workout.date)}
            </p>
            <DailyExerciseList daily_workout={workout.daily_exercise} />
          </li>
        );
      })}
    </ul>
  );
};
