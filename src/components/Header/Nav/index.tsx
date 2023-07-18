"use client";

import { useWindowSize } from "@/utils/hooks/windowSize";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const NavItems = () => {
  const size = useWindowSize();

  return (
    <nav className="w-1/5 flex items-center justify-center relative">
      {size.width <= 430 ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};
