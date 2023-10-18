"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useApi } from "@/context/apiContext";
import {
  TCreateWorkout,
  createWorkoutSchema,
} from "@/schemas/createWorkoutSchema";
import { MuscleGroupType } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CreateWorkoutForm = () => {
  const [exercises, setExercises] = useState([]);
  const [workoutId, setWorkoutId] = useState<null | number>(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<TCreateWorkout>({
    resolver: zodResolver(createWorkoutSchema),
    mode: "onBlur",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const {
    allMuscleGroups,
    listByMuscleGroup,
    createWorkout,
    addExerciseToWorkout,
  } = useApi();

  const onSubmit = async (data: TCreateWorkout) => {
    let submissionId: number | null = null;
    if (workoutId === null) {
      submissionId = (await createWorkout()) || null;
      setWorkoutId(submissionId);
    } else {
      submissionId = workoutId;
    }

    if (
      data.exerciseId === 0 ||
      data.reps === 0 ||
      data.series === 0 ||
      data.weight === 0
    ) {
      toast.error("Formulário incompleto");
    }

    if (typeof submissionId === "number") {
      addExerciseToWorkout(submissionId, data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-5"
    >
      <label className="label" htmlFor="muscleGroup">
        Grupo Muscular
      </label>
      <select
        id="muscleGroup"
        className="w-full"
        aria-label="Selecionar nível de experiência"
        onChange={async (e) => {
          setExercises(await listByMuscleGroup(Number(e.currentTarget.value)));
        }}
      >
        <option value="">Escolha o grupo muscular</option>
        {allMuscleGroups?.map((muscleGroup: MuscleGroupType) => {
          return (
            <option value={muscleGroup.id} key={muscleGroup.id}>
              {muscleGroup.name}
            </option>
          );
        })}
      </select>
      <label className="label" htmlFor="exerciseId">
        Exercício
      </label>
      <select
        id="exerciseId"
        {...register("exerciseId")}
        className="w-full"
        aria-label="Selecionar nível de experiência"
      >
        <option value="">
          {exercises.length <= 0
            ? "Primeiro o grupo muscular"
            : "Escolha o exercício"}
        </option>
        {exercises?.map((muscleGroup: MuscleGroupType) => {
          return (
            <option value={muscleGroup.id} key={muscleGroup.id}>
              {muscleGroup.name}
            </option>
          );
        })}
      </select>
      <Field
        type="number"
        label="Repetições"
        placeholder="Quantas repetições?"
        id="reps"
        register={register("reps")}
        error={errors.reps?.message}
      />
      <Field
        type="number"
        label="Séries"
        placeholder="Quantas séries?"
        id="series"
        register={register("series")}
        error={errors.series?.message}
      />
      <Field
        type="number"
        label="Peso"
        placeholder="Quantos quilos?"
        id="weight"
        register={register("weight")}
        error={errors.weight?.message}
      />
      <button
        type="submit"
        className="btn-medium w-4/5 btn-brand-opacity self-center"
      >
        Adicionar exercício
      </button>
    </form>
  );
};
