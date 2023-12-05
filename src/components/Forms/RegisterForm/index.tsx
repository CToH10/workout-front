import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/components/Field";
import { useApi } from "@/context/apiContext";
import { TRegister, registerSchema } from "@/schemas/userProfileSchemas";

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const { registerUser } = useApi();

  const onSubmit = (data: TRegister) => {
    registerUser(data);
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
      <div>
        <label htmlFor="trainingExp" className="label">
          Nível de experiência
        </label>
        <select
          id="trainingExp"
          {...register("trainingExp")}
          className="w-full mb-8 mt-3"
          aria-label="Selecionar nível de experiência"
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
        className="btn-big font-semibold w-4/5 btn-brand-opacity self-center"
      >
        Registrar
      </button>
    </form>
  );
};
