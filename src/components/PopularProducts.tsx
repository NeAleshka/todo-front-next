import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export const PopularProducts = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Популярные товары</h2>
        <Link
          href="/catalog"
          className="text-blue-600 font-medium hover:text-blue-700"
        >
          Смотреть все →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
