"use client";

import { useWindowSize } from "@/utils/hooks/windowSize";
import { DesktopNav } from "./DesktopNav";

export const NavItems = () => {
  const size = useWindowSize();

  return (
    <nav className="w-1/5 flex items-center justify-center ">
      {size.width <= 430 ? (
        <>
          <p className="text-grey-10">{size.width}</p>
        </>
      ) : (
        <DesktopNav />
      )}
    </nav>
  );
};
