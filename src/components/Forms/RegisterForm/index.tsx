import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useApi } from "@/context/apiContext";
import { TRegister, registerSchema } from "@/schemas/registerSchema";

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  //   const { registerUser } = useApi();

  const onSubmit = (data: TRegister) => {
    // registerUser(data);
    const { confirmPassword, ...rest } = data;
    console.log(data);

    console.log(rest);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <Field
        label="Nome"
        placeholder="Digite seu nome"
        id="name"
        register={register("name")}
        error={errors.name?.message}
      />
      <Field
        label="Email"
        placeholder="Digite seu email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
      />
      {/* <Field
        label="Experiência de treino"
        placeholder="Digite seu email"
        id="trainingExp"
        register={register("trainingExp")}
        error={errors.trainingExp?.message}
      /> */}
      <Field
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Field
        type="password"
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        id="confirmPassword"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <button
        type="submit"
        className="btn-medium w-4/5 btn-brand-opacity self-center"
      >
        Registrar
      </button>
    </form>
  );
};
