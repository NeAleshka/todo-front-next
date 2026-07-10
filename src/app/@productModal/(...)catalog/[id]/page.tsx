"use client";

import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function ProductModal() {
  const { id } = useParams();

  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);
  const animationClass = isClosing
    ? "modal-exit-animation"
    : "modal-enter-animation";
  // Функция закрытия модального окна
  const handleClose = useCallback(() => {
    // 1. Запускаем анимацию закрытия
    setIsClosing(true);

    // 2. Ждем завершения анимации (300мс как в CSS), затем меняем URL
    setTimeout(() => {
      router.back();
    }, 400);
  }, [router]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full relative ${animationClass}`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Товар {id} (Модальное окно)</h2>
        <p>Здесь подробная информация о товаре...</p>
        <p>ID: {id}</p>
      </div>
    </div>
  );
}
