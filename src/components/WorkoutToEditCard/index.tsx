import { DailyExerciseType } from "@/@types/dailyWorkout";
import { FaPen, FaTrash } from "react-icons/fa";

interface WorkoutToEditCard {
  workout: DailyExerciseType;
}

export const WorkoutToEditCard = ({ workout }: WorkoutToEditCard) => {
  return (
    <section className="exercise-card flex justify-between max-w-[340px] min-w-[340px]">
      <section className="info max-w-[165px] min-w-[165px]">
        <p className="text-heading7 text-brand-1 font-semibold max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis">
          {workout.exercise.name}
        </p>
        <p className="text-heading7 text-grey-10">
          Reps: <span className="font-semibold">{workout.reps}</span>
        </p>
        <p className="text-heading7 text-grey-10">
          Peso:{" "}
          <span className="font-semibold">
            {workout.weight} {workout.weight > 1 ? "kgs" : "kg"}
          </span>
        </p>
        <p className="text-heading7 text-grey-10">
          Séries: <span className="font-semibold">{workout.series}</span>
        </p>

        <p className="text-heading7 text-grey-10">
          Carga total:{" "}
          <span className="font-semibold">{workout.totalLoad} kgs</span>
        </p>
      </section>
      <section className="buttons flex gap-x-2 max-h-[30px]">
        <button className="btn-small btn-brand-outline-light w-[30px] flex justify-center items-center">
          {<FaPen />}
        </button>
        <button className="btn-small btn-alert w-[30px] flex justify-center items-center">
          {<FaTrash />}
        </button>
      </section>
    </section>
  );
};
