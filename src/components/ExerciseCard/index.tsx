type ExerciseCardProps = {
  name: String;
  description: null | String;
  id: number;
  muscle: {
    name: String;
  };
};

export const ExerciseCard = ({
  name,
  description,
  id,
  muscle,
}: ExerciseCardProps) => {
  return (
    <>
      <li
        key={id}
        className="border-2 rounded border-brand-3 hover:border-brand-2 max-w-full h-[110px] flex flex-col gap-[2px] items-center justify-center hover:text-grey-10 text-body1 text-grey-5"
      >
        <p className="font-bold max-w-[80%] text-center overflow-hidden text-ellipsis">
          {name}
        </p>
        <p className="font-thin max-w-[80%] text-center overflow-hidden text-ellipsis text-body2 text-grey-10">
          {muscle.name}
        </p>
      </li>
    </>
  );
};
