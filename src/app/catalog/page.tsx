import dynamic from "next/dynamic";

const CatalogPage = dynamic(() => import("./catalogPage"), {
  loading: () => <p>Загружаем график...</p>,
});

export default function Page() {
  return (
    <main>
      <CatalogPage />
    </main>
  );
}
