import { useState } from "react";
import { FaDumbbell } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { DesktopNav } from "../DesktopNav";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn-medium" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoClose color="white" fontSize="1.5rem" />
        ) : (
          <FaDumbbell color="white" fontSize={"1.5rem"} />
        )}
      </button>

      {isOpen && (
        <section className="bg-grey-0 absolute right-4 -bottom-20 min-w-[150px] py-3  border-y-2 border-grey-9">
          <DesktopNav flexDir="flex-col" />
        </section>
      )}
    </>
  );
};
