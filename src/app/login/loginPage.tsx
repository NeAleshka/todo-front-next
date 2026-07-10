"use client";

import { type HTMLProps, type SyntheticEvent, useState } from "react";
import { useSignIn, useSignUp } from "@/api/hooks.tsx";
import type { SignInBody, SignUpBody } from "@/api/operation-types";
import { env } from "@/config/env";

interface TabProps extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  isSelected?: boolean;
  name?: string;
}

const Tab = ({ isSelected, name, ...rest }: TabProps) => {
  return (
    <button type="button" {...rest}>
      <div className={"cursor-pointer"}>
        <h1 className="text-2xl font-bold text-center mb-0.5">{name}</h1>
        {isSelected && <div className={"w-full h-0.5 bg-black"}></div>}
      </div>
    </button>
  );
};

const LoginPage = () => {
  const [data, setData] = useState<SignUpBody | SignInBody>({
    email: "",
    password: "",
  });
  const [tab, setTab] = useState<"signIn" | "signUp">("signIn");

  const { mutateAsync: signIn } = useSignIn();
  const { mutateAsync: signUp } = useSignUp();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if ("name" in data) {
      signUp({ data }).then(() => {
        setData({ email: "", password: "", name: "" });
      });
    } else
      signIn({ data }).then(() => {
        setData({ email: "", password: "", name: "" });
      });
  };

  const handleGoogleLogin = () => {
    window.location.href = `${env.backendUrl}/auth/google`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
        <div className={"flex justify-center items-center gap-2"}>
          <Tab
            name={"Вход"}
            onClick={() => setTab("signIn")}
            isSelected={tab === "signIn"}
          />
          <Tab
            name={"Регистрация"}
            onClick={() => setTab("signUp")}
            isSelected={tab === "signUp"}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={data?.email ?? ""}
            onChange={(e) =>
              setData((prevState) => {
                return { ...prevState, email: e.target.value };
              })
            }
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={data?.password ?? ""}
            onChange={(e) =>
              setData((prevState) => {
                return { ...prevState, password: e.target.value };
              })
            }
            className="w-full px-4 py-2 border rounded-lg"
          />
          {tab === "signUp" && (
            <input
              placeholder="Имя"
              value={"name" in data ? data?.name : ""}
              onChange={(e) =>
                setData((prevState) => {
                  return { ...prevState, name: e.target.value };
                })
              }
              className="w-full px-4 py-2 border rounded-lg"
            />
          )}
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Войти
          </button>
        </form>

        <button
          type={"button"}
          onClick={handleGoogleLogin}
          className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Войти через Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
