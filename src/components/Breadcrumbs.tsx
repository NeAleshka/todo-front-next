"use client";

// components/Breadcrumbs.jsx
"use client"; // Обязательно, так как используем хук usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";

// Словарь переводов сегментов пути
const pathLabels = {
  catalog: "Каталог",
  products: "Товары",
  // добавь другие нужные переводы
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Разбиваем путь на части, убираем пустые строки (из-за начального слэша)
  const paths = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm text-gray-600"
    >
      {/* Всегда добавляем ссылку на главную */}
      <Link href="/" className="hover:text-blue-600 transition">
        Главная
      </Link>

      {paths.map((segment, index) => {
        // Проверяем, является ли сегмент ID (числом). Если да — не делаем ссылкой и меняем текст.
        const isId = !Number.isNaN(Number(segment));
        let productName = "";
        if (isId) {
          productName =
            products.find(({ id }) => id === Number(segment))?.name ?? "";
        }

        // Получаем красивое название или оставляем как есть (если нет перевода)
        const label =
          pathLabels[segment as keyof typeof pathLabels] ||
          (isId ? productName : "");
        // Формируем путь до текущего сегмента
        const href = `/${paths.slice(0, index + 1).join("/")}`;
        // Если это последний элемент и это ID, мы можем просто показать текст без ссылки
        const isLast = index === paths.length - 1;

        if ((isLast && isId) || !label) {
          return (
            <span key={href} className="ml-2 text-gray-400">
              / <span className="font-medium text-gray-800">{label}</span>
            </span>
          );
        }

        return (
          <span key={href} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <Link
              href={href}
              className="hover:text-blue-600 transition capitalize"
            >
              {label}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
