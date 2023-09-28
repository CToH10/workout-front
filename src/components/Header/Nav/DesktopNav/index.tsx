"use client";

import { useApi } from "@/context/apiContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoPersonSharp } from "react-icons/io5";

interface DesktopNavProps {
  flexDir?: string;
}

export const DesktopNav = ({ flexDir }: DesktopNavProps) => {
  const { token, logout, setModalOpen } = useApi();

  const router = useRouter();

  return (
    <section className={`flex items-center justify-between gap-3 ${flexDir}`}>
      {token ? (
        <>
          <button
            className="btn-medium"
            onClick={() => {
              router.push("/profile");
            }}
          >
            {<IoPersonSharp color="white" fontSize={"1.2rem"} />}
          </button>
          <button
            className={`btn-medium ${
              flexDir ? "w-4/5" : ""
            }  btn-brand-outline-light`}
            onClick={logout}
          >
            Sair
          </button>
        </>
      ) : (
        <>
          <Link
            className={`btn-medium ${
              flexDir ? "w-4/5" : ""
            } btn-brand-opacity text-center`}
            href="/login"
          >
            Login
          </Link>
          <Link
            href={"/login"}
            className={`btn-medium ${
              flexDir ? "w-4/5" : ""
            }  btn-brand-outline-light`}
            onClick={() => setModalOpen(true)}
          >
            Cadastrar
          </Link>
        </>
      )}
    </section>
  );
};
