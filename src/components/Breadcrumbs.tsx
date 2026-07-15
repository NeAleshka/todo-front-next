"use client";

// components/Breadcrumbs.jsx
"use client"; // Обязательно, так как используем хук usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

// Словарь переводов сегментов пути
const pathLabels = {
  catalog: "Каталог",
  products: "Товары",
  // добавь другие нужные переводы
};

interface BreadcrumbProps {
  productName?: string;
}

export default function Breadcrumbs({ productName }: BreadcrumbProps) {
  const pathname = usePathname();

  const paths = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center text-sm text-gray-600"
    >
      <Link href="/" className="hover:text-blue-600 transition">
        Главная
      </Link>

      {paths.map((segment, index) => {
        const isId = !Number.isNaN(Number(segment));
        const label =
          pathLabels[segment as keyof typeof pathLabels] ||
          (isId ? productName : "");
        const href = `/${paths.slice(0, index + 1).join("/")}`;
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
