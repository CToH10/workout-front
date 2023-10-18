"use client";

import { DailyWorkoutType } from "@/@types/dailyWorkout";
import { TCreateWorkout } from "@/schemas/createWorkoutSchema";
import { TLogin } from "@/schemas/loginSchema";
import { TRegister } from "@/schemas/registerSchema";
import { api } from "@/service/api";
import {
  MuscleGroupListType,
  TAllExercises,
  TModalStyle,
  TUserData,
} from "@/utils/interfaces";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface ApiProviderData {
  login: (userData: TLogin) => Promise<void>;
  logout: () => void;
  token: string | undefined;
  protect: () => void;
  profileInfo: () => Promise<void>;
  userData: TUserData;
  workoutByUserInfo: () => Promise<void>;
  workoutByUser: DailyWorkoutType[];
  registerUser: (registerData: TRegister) => Promise<void>;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  modalStyle: TModalStyle;
  allExercises: TAllExercises | undefined;
  getAllExercises: () => Promise<TAllExercises | void>;
  allMuscleGroups: MuscleGroupListType | undefined;
  listMuscleGroups: () => Promise<void>;
  buildPageLists: () => Promise<void>;
  listByMuscleGroup: (muscleGroupId: number) => Promise<any>;
  createWorkout: () => Promise<number | undefined>;
  addExerciseToWorkout: (
    workoutId: number,
    data: TCreateWorkout
  ) => Promise<void>;
}

export const ApiContext = createContext<ApiProviderData>({} as ApiProviderData);

export function ApiProvider({ children }: Props) {
  const [token, setToken] = useState<string | undefined>(
    parseCookies(null, "workoutManager.token")["workoutManager.token"]
  );
  const [userId, setUserId] = useState<number | undefined>(
    Number(parseCookies(null, "workoutManager.id")["workoutManager.id"])
  );
  const [userData, setUserData] = useState();
  const [workoutByUser, setWorkoutByUser] = useState<Array<DailyWorkoutType>>(
    []
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [allExercises, setAllExercises] = useState<TAllExercises>();
  const [allMuscleGroups, setMuscleGroups] = useState<MuscleGroupListType>();

  const router = useRouter();

  const headers = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const login = async (userData: TLogin) => {
    try {
      const data = await api.post("login", userData);

      setCookie(null, "workoutManager.token", data.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });
      setCookie(null, "workoutManager.id", data.data.id, {
        maxAge: 60 * 30,
        path: "/",
      });

      setToken(data.data.token);
      setUserId(data.data.id);

      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const logout = () => {
    destroyCookie(null, "workoutManager.token");
    destroyCookie(null, "workoutManager.id");
    setToken(undefined);
    setUserId(undefined);
    setUserData(undefined);
    router.push("/");
  };

  const profileInfo = async () => {
    try {
      const userInfo = (await api.get(`users/${userId}`, headers)).data;

      workoutByUserInfo();

      setUserData(userInfo);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const protect = () => {
    if (!token) {
      router.push("/");
    }
  };

  const workoutByUserInfo = async () => {
    try {
      const workout = (await api.get(`workout/user/${userId}`, headers)).data
        .daily_workout;

      setWorkoutByUser(workout);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const registerUser = async (registerData: TRegister) => {
    try {
      const { confirmPassword, ...userData } = registerData;
      await api.post("users", userData);
      toast.success("Usuário criado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "300px",
      width: "80%",
      maxWidth: "500px",
      backgroundColor: "#0b0d0d",
      display: "grid",
      maxHeight: "91%",
    },
    overlay: {
      backgroundColor: "#ffffff2d",
      backdropFilter: "blur(4px)",
    },
  };

  const getAllExercises = async (): Promise<TAllExercises | void> => {
    try {
      const list = await api.get("exercises");
      setAllExercises(list.data);

      return list.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const createWorkout = async () => {
    try {
      const newWorkout = await api.post("workout", {}, headers);

      return +newWorkout.data.id;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const listMuscleGroups = async () => {
    try {
      const groupsList = await api.get("muscles");
      setMuscleGroups(groupsList.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const buildPageLists = async () => {
    await listMuscleGroups();
    await getAllExercises();
  };

  const listByMuscleGroup = async (muscleGroupId: number) => {
    try {
      const exerciseByMuscle = (await api.get(`exercises/${muscleGroupId}`))
        .data;

      return exerciseByMuscle;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  const addExerciseToWorkout = async (
    workoutId: number,
    data: TCreateWorkout
  ) => {
    try {
      await api.post(`workout/${workoutId}`, data, headers);
      toast.success("Exercício adicionado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.message}`);
        console.log(error);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <ApiContext.Provider
      value={{
        login,
        logout,
        token,
        protect,
        profileInfo,
        userData,
        workoutByUserInfo,
        workoutByUser,
        registerUser,
        modalOpen,
        setModalOpen,
        modalStyle,
        allExercises,
        getAllExercises,
        allMuscleGroups,
        listMuscleGroups,
        buildPageLists,
        listByMuscleGroup,
        createWorkout,
        addExerciseToWorkout,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
