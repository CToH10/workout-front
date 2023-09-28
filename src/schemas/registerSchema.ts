import { z } from "zod";

const strongPassword: RegExp = /((?=.d)(?=.[a-z])(?=.[A-Z])(?=.[W]).{8,64})/g;
const passwordMessage: string =
  "Must contain at least one lowercase, one uppercase, a number and a special character";

export const registerSchema = z
  .object({
    name: z.string().max(50).nonempty(),
    email: z.string().max(50).email().nonempty(),
    trainingExp: z.enum(["beg", "int", "adv", "pro"]).optional(),
    password: z.string().min(10).regex(strongPassword, passwordMessage),
    confirmPassword: z.string().nonempty(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match",
      });
    }
  });

export type TRegister = z.infer<typeof registerSchema>;
