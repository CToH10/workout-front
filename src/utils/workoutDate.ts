export const getWorkoutDate = (date: string) => {
  const thisYear = new Date();

  const workoutDate = new Date(date);

  const workoutDay = workoutDate.getDate();
  const workoutMonth = workoutDate.getMonth();
  const workoutYear = workoutDate.getFullYear();

  const showDate =
    workoutYear < thisYear.getFullYear()
      ? `${workoutDay}/${workoutMonth + 1}/${workoutYear}`
      : `${workoutDay}/${workoutMonth + 1}`;

  return showDate;
};
