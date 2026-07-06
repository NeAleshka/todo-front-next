"use client";

import { type SyntheticEvent, useState } from "react";
import { useMe } from "@/api/hooks.tsx";
import { env } from "@/config/env";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isPending, error } = useMe();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // window.location.href = `${env.backendUrl}/auth/google`;
  };

  const handleGoogleLogin = () => {
    window.location.href = `${env.backendUrl}/auth/google`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Вход</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? "Загрузка..." : "Войти"}
          </button>
        </form>

        <button
          type={"button"}
          onClick={handleGoogleLogin}
          className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Войти через Google
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center">{error.message}</p>
        )}
      </div>
    </div>
  );
}
