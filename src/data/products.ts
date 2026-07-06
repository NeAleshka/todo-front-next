export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Смартфон XYZ",
    price: 29990,
    image:
      "https://img.freepik.com/premium-photo/smart-phone-isolated-white-screen-with-empty-background-mockup_752648-43.jpg?semt=ais_hybrid&w=740&q=80",
    description:
      "Современный смартфон с отличной камерой и быстрым процессором",
    category: "Электроника",
  },
  {
    id: 2,
    name: "Ноутбук Pro",
    price: 89990,
    image:
      "https://img.freepik.com/premium-vector/modern-laptop-mockup-with-blank-screen-vector-illustration_1253202-50094.jpg",
    description: "Мощный ноутбук для работы и развлечений",
    category: "Электроника",
  },
  {
    id: 3,
    name: "Наушники Wireless",
    price: 7990,
    image:
      "https://img.magnific.com/premium-photo/headphone-white-background-airpods-white-background_69110-266.jpg?semt=ais_hybrid&w=740&q=80",
    description: "Беспроводные наушники с шумоподавлением",
    category: "Электроника",
  },
  {
    id: 4,
    name: "Кроссовки Sport",
    price: 5990,
    image:
      "https://img.magnific.com/free-psd/classic-red-hightop-canvas-sneakers-stylish-footwear-fashion-trend-comfortable-shoes-casual-wear-white-laces-cool-design-iconic-style_632498-28888.jpg?semt=ais_hybrid",
    description: "Удобные кроссовки для бега и повседневной носки",
    category: "Обувь",
  },
  {
    id: 5,
    name: "Рюкзак Urban",
    price: 3490,
    image:
      "https://img.freepik.com/premium-photo/orange-backpack-with-black-strap-that-says-word-it_1275823-205.jpg",
    description: "Стильный городской рюкзак с отделением для ноутбука",
    category: "Аксессуары",
  },
  {
    id: 6,
    name: "Часы Smart",
    price: 12990,
    image:
      "https://avatars.mds.yandex.net/get-mpic/5146425/2a0000019b0f5a745f4c64fe068516526fd2/orig",
    description: "Умные часы с мониторингом здоровья и уведомлениями",
    category: "Электроника",
  },
];
