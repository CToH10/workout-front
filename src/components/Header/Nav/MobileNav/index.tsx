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
          <IoClose
            color="white"
            fontSize="1.5rem"
            className="animate-[spin_1s_ease-in-out]"
          />
        ) : (
          <FaDumbbell color="white" fontSize={"1.5rem"} className="animate-[pulse_1s_ease-in-out]"/>
        )}
      </button>

      {isOpen && (
        <section className="bg-grey-1 absolute right-4 -bottom-20 min-w-[150px] py-3 rounded-md transition ease-in duration-200">
          <DesktopNav flexDir="flex-col" />
        </section>
      )}
    </>
  );
};
