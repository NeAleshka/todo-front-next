"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProductDto } from "@/api/models";
import { Spinner } from "@/ui/spinner";

interface ProductCardProps {
  product: ProductDto;
}

const FALLBACK_IMAGE = "/nof-found-img.jpg";

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const currentSrc = hasError ? FALLBACK_IMAGE : product.image;

  return (
    <div>
      <Link
        className="flex flex-col gap-1"
        href={`catalog/${product.id}`}
        scroll={false}
      >
        <div className="relative w-50 h-50 overflow-hidden bg-gray-100">
          {isLoading && <Spinner />}
          <Image
            src={currentSrc ?? ""}
            alt={product.name}
            sizes="200px"
            unoptimized
            priority
            fill
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
          {/*<span className="product-category">{product.category}</span>*/}
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">
              {product.price.toLocaleString()} ₽
            </span>
            <button type="button" className="add-to-cart-btn">
              В корзину
            </button>
          </div>
        </div>
      </Link>
      <Link
        href={`catalog/${product.id}`}
        target={"_blank"}
        className={"text-blue-500 hover:underline hover:text-blue-950"}
      >
        Подробнее
      </Link>
    </div>
  );
};
