import { TLogin, loginSchema } from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useApi } from "@/context/apiContext";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const { login } = useApi();

  const onSubmit = (data: TLogin) => {
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <Field
        label="Email"
        placeholder="Digite seu email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
        className="text-grey-whiteFixed"
      />
      <Field
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
        className="text-grey-whiteFixed"
      />
      <button
        type="submit"
        className="btn-big w-4/5 btn-brand-opacity self-center font-semibold"
      >
        Login
      </button>
    </form>
  );
};
