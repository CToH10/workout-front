import { TLogin, loginSchema } from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: TLogin) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-[80%] max-w-sm absolute position-center"
    >
      <Field
        label="Email"
        placeholder="Digite seu email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Field
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <button type="submit" className="btn-medium w-4/5 btn-brand-opacity self-center">
        Login
      </button>
    </form>
  );
};
