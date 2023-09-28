"use client";
import { LoginForm } from "@/components/Forms/LoginForm";

export default function LoginPage() {
  return (
    <>
      <main className="flex flex-col gap-6 w-[80%] max-w-sm absolute position-center">
        <div className="flex flex-row justify-between items-center">
          <p className="text-heading7 text-brand-3 font-semibold">Ainda não é registrado?</p>
          <button
            className="btn-medium w-[35%] btn-brand1 text-btnMedium"
            onClick={() => {
              console.log("Open register form");
            }}
          >
            Cadastro
          </button>
        </div>
        <LoginForm />
      </main>
    </>
  );
}
