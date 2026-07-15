"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useGetProduct } from "@/api/hooks.tsx";
import { Spinner } from "@/ui/spinner";

export default function ProductModal() {
  const { id } = useParams();
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const animationClass = isClosing
    ? "modal-exit-animation"
    : "modal-enter-animation";

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      router.back();
    }, 400);
  }, [router]);

  const { data: productInfo, isLoading } = useGetProduct(String(id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full relative ${animationClass} flex flex-col items-center justify-center relative`}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{productInfo?.name}</h2>
            <Image
              src={productInfo?.image ?? ""}
              alt={productInfo?.name ?? ""}
              width={400}
              height={400}
            />
            <p>{productInfo?.description}</p>
            <p>{`Цена: ${productInfo?.price} ₽`}</p>
          </div>
        )}
      </div>
    </div>
  );
}
