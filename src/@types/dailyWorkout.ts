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
