import { useApi } from "@/context/apiContext";
import { IoPersonSharp } from "react-icons/io5";

interface DesktopNavProps {
  flexDir?: string;
}

export const DesktopNav = ({ flexDir }: DesktopNavProps) => {
  const { token, logout } = useApi();
  return (
    <section className={`flex items-center justify-between gap-3 ${flexDir}`}>
      {token ? (
        <>
          <button className="btn-medium">
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
          <button
            className={`btn-medium ${flexDir ? "w-4/5" : ""} btn-brand-opacity`}
          >
            Login
          </button>
          <button
            className={`btn-medium ${
              flexDir ? "w-4/5" : ""
            }  btn-brand-outline-light`}
          >
            Cadastrar
          </button>
        </>
      )}
    </section>
  );
};
