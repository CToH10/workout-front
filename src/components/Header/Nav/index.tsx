"use client";

import { useWindowSize } from "@/utils/hooks/windowSize";

export const NavItems = () => {
  const size = useWindowSize();

  return (
    <nav>
      {size.width <= 430 ? (
        <>
          <p className="text-grey-10">{size.width}</p>
        </>
      ) : (
        <p className="text-grey-10">{size.height}</p>
      )}
    </nav>
  );
};
