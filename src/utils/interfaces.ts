export type TUserData =
  | {
      name: string;
      email: string;
      trainingExp: string;
      id: number;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
    }
  | undefined;

export type TModalStyle = {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    minWidth: string;
    width: string;
    maxWidth: string;
    backgroundColor: string;
    display: string;
  };
  overlay: {
    backgroundColor: string;
  };
};

export type TAllExercises = [
  {
    name: String;
    description: null | String;
    id: number;
    muscle: {
      name: String;
    };
  }
];
