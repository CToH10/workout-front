import { FaPen, FaTrash } from "react-icons/fa";
interface EditOrDeleteProps {
  className: string;
  editProfileFunction: any;
  deleteProfileFunction: any;
}

export const EditOrDelete = ({
  className,
  deleteProfileFunction,
  editProfileFunction,
}: EditOrDeleteProps) => {
  return (
    <section
      className={`${className} flex justify-between items-center w-[150px] gap-2`}
    >
      <button
        className="btn-medium btn-brand-opacity"
        onClick={() => {
          editProfileFunction();
        }}
      >
        <FaPen />
      </button>
      <button
        className="btn-medium btn-alert"
        onClick={() => {
          deleteProfileFunction();
        }}
      >
        <FaTrash />
      </button>
    </section>
  );
};
