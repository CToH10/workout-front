import { DailyExerciseType } from "@/@types/dailyWorkout";

interface DailyExerciseListProps {
  daily_workout: DailyExerciseType[];
}

export const DailyExerciseList = ({
  daily_workout,
}: DailyExerciseListProps) => {
  return (
    <>
      {daily_workout.map((exercise) => {
        return (
          <section key={exercise.exercise.id}>
            <p className="text-heading6 font-semibold text-brand-3">
              {exercise.exercise.name}
            </p>
            <p className="text-heading7 text-grey-8">
              Séries: {exercise.series}
            </p>
            <p className="text-heading7 text-grey-8">Reps: {exercise.reps}</p>
            <p className="text-heading7 text-grey-8">Peso: {exercise.weight} kg</p>
            <p className="text-heading7 text-grey-8">
              Carga total: {exercise.totalLoad} kg
            </p>
          </section>
        );
      })}
    </>
  );
};
