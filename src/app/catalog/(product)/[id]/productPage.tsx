"use client";
import type { ProductDto } from "@/api/models";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  product: ProductDto;
}

const ProductPage = ({ product }: PageProps) => {
  return (
    <div>
      <Breadcrumbs productName={product.name} />
      {product?.name}
    </div>
  );
};

export default ProductPage;
