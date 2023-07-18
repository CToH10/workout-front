import { FaPen, FaTrash } from "react-icons/fa";
interface EditOrDeleteProps {
  className: string;
}
export const EditOrDelete = ({ className }: EditOrDeleteProps) => {
  return (
    <section
      className={`${className} flex justify-between items-center w-[150px] gap-2`}
    >
      <button className="btn-medium btn-brand-opacity">
        <FaPen />
      </button>
      <button className="btn-medium btn-alert">
        <FaTrash />
      </button>
    </section>
  );
};
