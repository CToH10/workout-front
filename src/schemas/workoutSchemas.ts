import { z } from "zod";

export const createWorkoutSchema = z.object({
  exerciseId: z.coerce.number(),
  weight: z.coerce.number(),
  reps: z.coerce.number(),
  series: z.coerce.number(),
});

export const editWorkoutSchema = createWorkoutSchema.deepPartial();

export type TCreateWorkout = z.infer<typeof createWorkoutSchema>;

export type TEditWorkout = z.infer<typeof editWorkoutSchema>;
