// Mock data for products and categories
const products = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 4899,
    originalPrice: 5299,
    discount: 8,
    category: "smartphones",
    image: "/placeholder.svg",
    description: "El iPhone 15 Pro Max más avanzado con chip A17 Pro, cámara de 48MP y titanio.",
    stock: 15,
    reviews: 4.8
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 4299,
    originalPrice: 4799,
    discount: 10,
    category: "smartphones",
    image: "/placeholder.svg",
    description: "Galaxy S24 Ultra con S Pen integrado, cámara de 200MP y pantalla Dynamic AMOLED.",
    stock: 8,
    reviews: 4.7
  },
  {
    id: "3",
    name: "MacBook Pro 16\"",
    brand: "Apple",
    price: 8999,
    originalPrice: 9999,
    discount: 10,
    category: "laptops",
    image: "/placeholder.svg",
    description: "MacBook Pro 16 pulgadas con chip M3 Pro, 18GB RAM y 512GB SSD.",
    stock: 5,
    reviews: 4.9
  },
  {
    id: "4",
    name: "Dell XPS 15",
    brand: "Dell",
    price: 6499,
    originalPrice: 7299,
    discount: 11,
    category: "laptops",
    image: "/placeholder.svg",
    description: "Dell XPS 15 con procesador Intel i7, 16GB RAM y pantalla OLED 4K.",
    stock: 12,
    reviews: 4.6
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    category: "audio",
    image: "/placeholder.svg",
    description: "Audífonos inalámbricos con cancelación de ruido líder en la industria.",
    stock: 20,
    reviews: 4.8
  },
  {
    id: "6",
    name: "AirPods Pro 2",
    brand: "Apple",
    price: 699,
    originalPrice: 899,
    discount: 22,
    category: "audio",
    image: "/placeholder.svg",
    description: "AirPods Pro de segunda generación con cancelación activa de ruido.",
    stock: 25,
    reviews: 4.7
  },
  {
    id: "7",
    name: "iPad Pro 12.9\"",
    brand: "Apple",
    price: 3999,
    originalPrice: 4499,
    discount: 11,
    category: "tablets",
    image: "/placeholder.svg",
    description: "iPad Pro 12.9 pulgadas con chip M2, 128GB y compatibilidad con Apple Pencil.",
    stock: 10,
    reviews: 4.8
  },
  {
    id: "8",
    name: "Samsung Galaxy Tab S9",
    brand: "Samsung",
    price: 2899,
    originalPrice: 3299,
    discount: 12,
    category: "tablets",
    image: "/placeholder.svg",
    description: "Galaxy Tab S9 con S Pen incluido, pantalla AMOLED y 256GB de almacenamiento.",
    stock: 7,
    reviews: 4.6
  },
  {
    id: "9",
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    category: "wearables",
    image: "/placeholder.svg",
    description: "Apple Watch Series 9 con GPS, pantalla Always-On y resistencia al agua.",
    stock: 18,
    reviews: 4.7
  },
  {
    id: "10",
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    category: "wearables",
    image: "/placeholder.svg",
    description: "Galaxy Watch 6 con monitoreo avanzado de salud y batería de larga duración.",
    stock: 22,
    reviews: 4.5
  },
  {
    id: "11",
    name: "ASUS ROG Strix G15",
    brand: "ASUS",
    price: 5499,
    originalPrice: 6299,
    discount: 13,
    category: "gaming",
    image: "/placeholder.svg",
    description: "Laptop gaming con RTX 4060, AMD Ryzen 7 y pantalla 144Hz.",
    stock: 6,
    reviews: 4.6
  },
  {
    id: "12",
    name: "Razer DeathAdder V3",
    brand: "Razer",
    price: 199,
    originalPrice: 279,
    discount: 29,
    category: "gaming",
    image: "/placeholder.svg",
    description: "Mouse gaming ergonómico con sensor Focus Pro 30K y switches ópticos.",
    stock: 35,
    reviews: 4.7
  }
];

const categories = [
  { id: "smartphones", name: "SMARTPHONES" },
  { id: "laptops", name: "LAPTOPS" },
  { id: "audio", name: "AUDIO" },
  { id: "tablets", name: "TABLETS" },
  { id: "wearables", name: "WEARABLES" },
  { id: "gaming", name: "GAMING" }
];

// Simulate async data fetching
const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      resolve(filteredProducts);
    }, 1000);
  });
};

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      resolve(product);
    }, 1000);
  });
};

export { products, categories, getProducts, getProductsByCategory, getProductById };