export interface DailyExerciseType {
  exercise: {
    name: string;
    id: number;
  };
  reps: number;
  series: number;
  totalLoad: number;
  weight: number;
}

export interface DailyWorkoutType {
  daily_exercise: DailyExerciseType[];
  date: string;
  id: number;
  userId: number;
}

export interface MuscleGroupListType {
  name: string;
  id: number;
  exercises: [
    {
      id: number;
      name: string;
      muscleId: number;
      description: string | null;
    } | null
  ];
}
