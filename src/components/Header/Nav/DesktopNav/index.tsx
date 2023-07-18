interface DesktopNavProps {
  flexDir?: string;
}

export const DesktopNav = ({ flexDir }: DesktopNavProps) => {
  return (
    <section className={`flex items-center justify-between gap-3 ${flexDir}`}>
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
    </section>
  );
};
