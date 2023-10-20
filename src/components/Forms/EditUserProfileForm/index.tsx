"use client";
import { useApi } from "@/context/apiContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useForm } from "react-hook-form";
import { TUpdateUser, updateUserSchema } from "@/schemas/registerSchema";

export const EditUserProfileForm = () => {
  const { editProfile, userData } = useApi();

  let experience: "beg" | "int" | "adv" | "pro" | undefined;

  switch (userData?.trainingExp) {
    case "beg":
      experience = "beg";
      break;
    case "int":
      experience = "int";
      break;
    case "adv":
      experience = "adv";
      break;
    case "pro":
      experience = "pro";
      break;
    default:
      experience = undefined;
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TUpdateUser>({
    resolver: zodResolver(updateUserSchema),
    mode: "onBlur",
    defaultValues: {
      name: userData?.name,
      email: userData?.email,
      trainingExp: experience,
    },
  });

  const onSubmit = (data: any) => {
    editProfile(data);

    // console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center text-heading7 "
    >
      <Field
        label="Nome de usuário"
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
      <div>
        <label htmlFor="trainingExp" className="label">
          Nível de experiência
        </label>
        <select
          id="trainingExp"
          {...register("trainingExp")}
          className="w-full mb-8 mt-3"
          aria-label="Selecionar nível de experiência"
          disabled
        >
          <option value="">Escolha seu nível</option>
          <optgroup label="Até 06 meses de experiência">
            <option value="beg" aria-label="Iniciante">
              Iniciante
            </option>
          </optgroup>
          <optgroup label="De 06 meses a 02 anos de experiência">
            <option value="int" aria-label="Intermediário">
              Intermediário
            </option>
          </optgroup>
          <optgroup label="Mais de 02 anos de experiência">
            <option value="adv" aria-label="Avançado">
              Avançado
            </option>
          </optgroup>
          <option value="pro" aria-label="Profissional">
            Profissional
          </option>
        </select>
      </div>
      <Field
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <button
        type="submit"
        className="btn-medium w-4/5 btn-brand-opacity self-center"
      >
        Editar
      </button>
    </form>
  );
};
