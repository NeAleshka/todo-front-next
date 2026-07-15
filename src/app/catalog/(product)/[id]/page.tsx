import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/api/hooks.tsx";
import ProductPage from "@/app/catalog/(product)/[id]/productPage";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound();

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

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};

export default Page;
