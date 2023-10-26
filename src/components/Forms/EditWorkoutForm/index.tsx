"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useApi } from "@/context/apiContext";
import { TEditWorkout, editWorkoutSchema } from "@/schemas/workoutSchemas";

interface EditWorkoutFormProps {
  id: number;
}

export const EditWorkoutForm = () => {
  const { setModalOpen, editExercise, exerciseToEdit } = useApi();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TEditWorkout>({
    resolver: zodResolver(editWorkoutSchema),
    mode: "onBlur",
    defaultValues: {
      reps: exerciseToEdit?.reps,
      weight: exerciseToEdit?.weight,
      series: exerciseToEdit?.series,
    },
  });

  const onSubmit = (data: TEditWorkout) => {
    editExercise(data);

    setModalOpen(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <Field
        label="Repetições"
        placeholder="Repetições"
        id="reps"
        register={register("reps")}
        error={errors.reps?.message}
      />
      <Field
        label="Peso"
        placeholder="Peso"
        id="weight"
        register={register("weight")}
        error={errors.weight?.message}
      />
      <Field
        label="Séries"
        placeholder="Séries"
        id="series"
        register={register("series")}
        error={errors.series?.message}
      />
      <Field
        label="Carga total"
        placeholder="Carga total"
        id="totalWeight"
        disabled={true}
        defaultValue={exerciseToEdit?.totalLoad}
      />
      <button
        type="submit"
        className="btn-big w-4/5 btn-brand-opacity self-center"
      >
        Editar exercício
      </button>
    </form>
  );
};
