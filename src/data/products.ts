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
    image: "https://via.placeholder.com/300x300?text=Smartphone",
    description: "Современный смартфон с отличной камерой и быстрым процессором",
    category: "Электроника"
  },
  {
    id: 2,
    name: "Ноутбук Pro",
    price: 89990,
    image: "https://via.placeholder.com/300x300?text=Laptop",
    description: "Мощный ноутбук для работы и развлечений",
    category: "Электроника"
  },
  {
    id: 3,
    name: "Наушники Wireless",
    price: 7990,
    image: "https://via.placeholder.com/300x300?text=Headphones",
    description: "Беспроводные наушники с шумоподавлением",
    category: "Электроника"
  },
  {
    id: 4,
    name: "Кроссовки Sport",
    price: 5990,
    image: "https://via.placeholder.com/300x300?text=Sneakers",
    description: "Удобные кроссовки для бега и повседневной носки",
    category: "Обувь"
  },
  {
    id: 5,
    name: "Рюкзак Urban",
    price: 3490,
    image: "https://via.placeholder.com/300x300?text=Backpack",
    description: "Стильный городской рюкзак с отделением для ноутбука",
    category: "Аксессуары"
  },
  {
    id: 6,
    name: "Часы Smart",
    price: 12990,
    image: "https://via.placeholder.com/300x300?text=Watch",
    description: "Умные часы с мониторингом здоровья и уведомлениями",
    category: "Электроника"
  }
];
