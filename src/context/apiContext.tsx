"use client";

import { DailyWorkoutType } from "@/@types/dailyWorkout";
import { TLogin } from "@/schemas/loginSchema";
import { TRegister } from "@/schemas/registerSchema";
import { api } from "@/service/api";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface ApiProviderData {
  login: (userData: any) => Promise<void>;
  logout: () => void;
  token: string | undefined;
  protect: () => void;
  profileInfo: () => Promise<void>;
  userData:
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
  workoutByUserInfo: () => Promise<void>;
  workoutByUser: DailyWorkoutType[];
  registerUser: (registerData: TRegister) => Promise<void>;
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
      toast.success("Usuário criado com sucesso")
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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
