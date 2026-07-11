"use client";

import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { products } from "@/data/products";

export default function ProductModal() {
  const { id } = useParams();

  const productInfo = products.find((product) => product.id === Number(id));

  if (!productInfo) notFound();

  const { price, description, image, name } = productInfo;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full relative ${animationClass} flex flex-col items-center justify-center`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <Image src={image} alt={name} width={400} height={400} />
        <p>{description}</p>
        <p>{`Цена: ${price} ₽`}</p>
      </div>
    </div>
  );
}
