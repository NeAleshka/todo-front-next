import type { Metadata } from "next";
import ProductPage from "@/app/catalog/(product)/[id]/productPage";
import { products } from "@/data/products";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  return {
    title: `My Shop | ${product?.name}`,
    description: product?.description,
    openGraph: {
      type: "website",
      title: product?.name,
      description: product?.description,
      images: [product?.image ?? ""],
      siteName: "My Shop",
    },
  };
}

const Page = () => {
  return (
    <div>
      <ProductPage />
    </div>
  );
};

export default Page;
