"use client";

import { api } from "@/service/api";
import { AxiosError } from "axios";
import router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface ApiProviderData {
  login: (userData: any) => Promise<void>;
  logout: () => void;
}

export const ApiContext = createContext<ApiProviderData>({} as ApiProviderData);

export function ApiProvider({ children }: Props) {
  const [token, setToken] = useState<string | undefined>(
    parseCookies(null, "workoutManager.token")["workoutManager.token"]
  );

  const login = async (userData: any) => {
    try {
      const data = await api.post("login", userData);

      setCookie(null, "workoutManager.token", data.data, {
        maxAge: 60 * 30,
        path: "/",
      });

      setToken(data.data);

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
    destroyCookie(null, "motorShop.token");
    setToken(undefined);
    router.push("/");
  };

  return (
    <ApiContext.Provider value={{ login, logout }}>
      {children}
    </ApiContext.Provider>
  );
}

export const useApi = () => useContext(ApiContext);
