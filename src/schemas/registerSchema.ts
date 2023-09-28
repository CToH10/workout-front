import { z } from "zod";

const strongPassword: RegExp =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const passwordMessage: string =
  "Must contain at least one lowercase, one uppercase and a number; can contain a special character";

export const registerSchema = z
  .object({
    name: z.string().max(50).nonempty(),
    email: z.string().max(50).email().nonempty(),
    trainingExp: z.enum(["beg", "int", "adv", "pro"]).optional(),
    password: z.string().min(10).regex(strongPassword, passwordMessage),
    confirmPassword: z.string().nonempty(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match",

        path: ["confirmPassword"],
      });
    }
  });

export type TRegister = z.infer<typeof registerSchema>;
