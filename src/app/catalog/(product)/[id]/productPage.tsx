"use client";
import { notFound, useParams } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products } from "@/data/products";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  if (!product) return notFound();
  const { name, image, description, price, category } = product;

  return (
    <div>
      <Breadcrumbs />
      {`${id} product`}
    </div>
  );
};

export default ProductPage;
