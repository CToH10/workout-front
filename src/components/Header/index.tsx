import { NavItems } from "./Nav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-4/5 absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-9 drop-shadow box-shadow-white border-b-2 border-b-grey-9 pb-2 min-h-[54px]">
      <Link className="text-grey-10 font-extrabold" href="/">
        Workout Manager
      </Link>
      <NavItems />
    </header>
  );
};
