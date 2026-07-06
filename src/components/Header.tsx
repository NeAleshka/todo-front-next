"use client";
import Link from "next/link";
import { useMe } from "@/api/hooks.tsx";
import { Spinner } from "@/ui/spinner";

export const Header = () => {
  const { isLoading, isError } = useMe();
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🛍️</span>
            <span className="text-xl font-bold text-gray-900">MyShop</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-900 font-medium hover:text-blue-600"
            >
              Главная
            </Link>
            <Link
              href="/catalog"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              Каталог
            </Link>
            <Link
              href="/about"
              className="text-gray-600 font-medium hover:text-blue-600"
            >
              О нас
            </Link>
          </nav>
          <div className="flex items-center space-x-4 relative">
            {isLoading ? (
              <div className={"relative max-h-full w-16"}>
                <Spinner />
              </div>
            ) : isError ? (
              <Link
                href="/login"
                className="text-gray-600 font-medium hover:text-blue-600"
              >
                Войти
              </Link>
            ) : null}

            <button
              type={"button"}
              className="relative p-2 text-gray-600 hover:text-blue-600"
            >
              <span className="text-2xl">🛒</span>
              {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>*/}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
