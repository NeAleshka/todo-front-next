import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
}

export function HeroSection({ title, description, buttonText }: HeroSectionProps) {
  return (
    <section className="mb-12">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">{description}</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

interface ProductsSectionProps {
  title: string;
  products: Product[];
  viewAllLink: string;
}

export function ProductsSection({ title, products, viewAllLink }: ProductsSectionProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <a href={viewAllLink} className="text-blue-600 font-medium hover:text-blue-700">
          Смотреть все →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <span className="text-4xl mb-4 block">{feature.icon}</span>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
