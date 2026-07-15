"use client";
import { useGetAllProducts } from "@/api/hooks.tsx";

const CatalogPage = () => {
  const { data } = useGetAllProducts();

  return (
    <div>
      {data?.map((product) => (
        <div key={product.id}>{product.id}</div>
      ))}
    </div>
  );
};

export default CatalogPage;
