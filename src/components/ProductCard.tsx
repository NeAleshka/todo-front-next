"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { Spinner } from "@/ui/spinner";

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGE = "/nof-found-img.jpg";

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const currentSrc = hasError ? FALLBACK_IMAGE : product.image;

  return (
    <Link
      className="flex flex-col gap-1"
      href={`catalog/${product.id}`}
      scroll={false}
    >
      <div className="relative w-50 h-50 overflow-hidden bg-gray-100">
        {isLoading && <Spinner />}
        <Image
          src={currentSrc} // Динамический src
          alt={product.name}
          width={200}
          height={200}
          className="object-cover w-full h-full"
          sizes="200px"
          unoptimized
          onLoad={() => setIsLoading(false)}
          onError={() => {
            if (!hasError) {
              setHasError(true);
              setIsLoading(false);
            }
          }}
        />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          <button type="button" className="add-to-cart-btn">
            В корзину
          </button>
        </div>
      </div>
    </Link>
  );
};
