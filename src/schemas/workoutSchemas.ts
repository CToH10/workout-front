import { z } from "zod";

export const createWorkoutSchema = z.object({
  exerciseId: z.coerce.number(),
  weight: z.coerce.number(),
  reps: z.coerce.number(),
  series: z.coerce.number(),
});

export type TCreateWorkout = z.infer<typeof createWorkoutSchema>;
