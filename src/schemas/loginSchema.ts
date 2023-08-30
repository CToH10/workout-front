import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export type TLogin = z.infer<typeof loginSchema>;
