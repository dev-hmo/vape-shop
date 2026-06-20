// ===== Product Data Layer =====
// Centralized product catalog with TypeScript types and helper functions

export type Category = "devices" | "pods" | "disposable";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  points: number;
  image: string;
  category: Category;
  description: string;
  flavor?: string;
  nicotine?: string;
  inStock: boolean;
  isNew: boolean;
  discount?: number;
  rating: number;
}

// Full product catalog
export const products: Product[] = [
  // === Devices ===
  {
    id: 1,
    name: "Refreshing Mint Device",
    slug: "refreshing-mint-device",
    price: 30000,
    originalPrice: 40000,
    points: 600,
    image: "/assets/images/product1.jpg",
    category: "devices",
    description:
      "Premium mint-flavored vape device with adjustable airflow and long-lasting battery. Perfect for all-day vaping with a clean, crisp mint experience.",
    flavor: "Mint",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Strawberry Yogurt Pro",
    slug: "strawberry-yogurt-pro",
    price: 30000,
    originalPrice: 40000,
    points: 600,
    image: "/assets/images/product2.jpg",
    category: "devices",
    description:
      "Indulge in the creamy sweetness of strawberry yogurt. This device features advanced coil technology for maximum flavor delivery.",
    flavor: "Strawberry Yogurt",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 25,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Mango Yogurt Elite",
    slug: "mango-yogurt-elite",
    price: 35000,
    originalPrice: 45000,
    points: 700,
    image: "/assets/images/product3.jpg",
    category: "devices",
    description:
      "Tropical mango meets creamy yogurt in this elite device. Features a sleek design with USB-C fast charging.",
    flavor: "Mango Yogurt",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 22,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Iced Coffee Vaporizer",
    slug: "iced-coffee-vaporizer",
    price: 30000,
    originalPrice: 40000,
    points: 600,
    image: "/assets/images/product4.jpg",
    category: "devices",
    description:
      "For coffee lovers — rich iced coffee flavor with a smooth finish. Features temperature control for the perfect hit every time.",
    flavor: "Iced Coffee",
    nicotine: "5%",
    inStock: true,
    isNew: false,
    discount: 25,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Cola Mint Fusion",
    slug: "cola-mint-fusion",
    price: 28000,
    originalPrice: 35000,
    points: 560,
    image: "/assets/images/product5.jpg",
    category: "devices",
    description:
      "A unique fusion of classic cola and cool mint. This compact device delivers bold flavors in a pocket-friendly form factor.",
    flavor: "Cola Mint",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 20,
    rating: 4.3,
  },
  {
    id: 6,
    name: "Nut Tobacco Classic",
    slug: "nut-tobacco-classic",
    price: 32000,
    originalPrice: 42000,
    points: 640,
    image: "/assets/images/product6.jpg",
    category: "devices",
    description:
      "Traditional tobacco taste with a nutty twist. Ideal for those transitioning from traditional cigarettes.",
    flavor: "Nut Tobacco",
    nicotine: "5%",
    inStock: true,
    isNew: false,
    discount: 24,
    rating: 4.4,
  },

  // === Pods ===
  {
    id: 7,
    name: "Citrus Monster Pod",
    slug: "citrus-monster-pod",
    price: 25000,
    originalPrice: 30000,
    points: 500,
    image: "/assets/images/product3.jpg",
    category: "pods",
    description:
      "Explosive citrus flavor in a convenient pod format. Compatible with all Vape Pi devices. 20,000 puff capacity.",
    flavor: "Citrus",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 17,
    rating: 4.7,
  },
  {
    id: 8,
    name: "Strawberry Yogurt Pod",
    slug: "strawberry-yogurt-pod",
    price: 22000,
    originalPrice: 28000,
    points: 440,
    image: "/assets/images/product2.jpg",
    category: "pods",
    description:
      "Creamy strawberry yogurt in a replaceable pod. Long-lasting flavor with consistent vapor production.",
    flavor: "Strawberry Yogurt",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 21,
    rating: 4.5,
  },
  {
    id: 9,
    name: "Blueberry Chill Pod",
    slug: "blueberry-chill-pod",
    price: 22000,
    originalPrice: 28000,
    points: 440,
    image: "/assets/images/product5.jpg",
    category: "pods",
    description:
      "Cool blueberry flavor with an icy finish. Perfect for hot days and refreshing vaping sessions.",
    flavor: "Blueberry",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 21,
    rating: 4.6,
  },
  {
    id: 10,
    name: "Mango Bliss Pod",
    slug: "mango-bliss-pod",
    price: 24000,
    originalPrice: 30000,
    points: 480,
    image: "/assets/images/product1.jpg",
    category: "pods",
    description:
      "Pure mango bliss in every puff. This pod delivers the authentic taste of ripe mangoes with a smooth inhale.",
    flavor: "Mango",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 20,
    rating: 4.8,
  },
  {
    id: 11,
    name: "Pineapple Blast Pod",
    slug: "pineapple-blast-pod",
    price: 23000,
    originalPrice: 29000,
    points: 460,
    image: "/assets/images/product4.jpg",
    category: "pods",
    description:
      "Tropical pineapple explosion with a tangy twist. Sweet and sour perfection in a pod.",
    flavor: "Pineapple",
    nicotine: "3%",
    inStock: false,
    isNew: false,
    discount: 21,
    rating: 4.4,
  },
  {
    id: 12,
    name: "Cool Mint Pod",
    slug: "cool-mint-pod",
    price: 20000,
    originalPrice: 25000,
    points: 400,
    image: "/assets/images/product6.jpg",
    category: "pods",
    description:
      "Classic cool mint for a clean and refreshing experience. The #1 bestselling pod flavor.",
    flavor: "Mint",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 20,
    rating: 4.9,
  },

  // === Disposables ===
  {
    id: 13,
    name: "Citrus Monster Disposable",
    slug: "citrus-monster-disposable",
    price: 15000,
    originalPrice: 20000,
    points: 300,
    image: "/assets/images/product3.jpg",
    category: "disposable",
    description:
      "20,000 puff disposable with intense citrus flavor. No charging, no refilling — just pure flavor.",
    flavor: "Citrus",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 25,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Grape Ice Disposable",
    slug: "grape-ice-disposable",
    price: 15000,
    originalPrice: 20000,
    points: 300,
    image: "/assets/images/product4.jpg",
    category: "disposable",
    description:
      "Sweet grape with an icy menthol kick. Compact and travel-friendly disposable design.",
    flavor: "Grape Ice",
    nicotine: "5%",
    inStock: true,
    isNew: false,
    discount: 25,
    rating: 4.3,
  },
  {
    id: 15,
    name: "Watermelon Splash Disposable",
    slug: "watermelon-splash-disposable",
    price: 18000,
    originalPrice: 22000,
    points: 360,
    image: "/assets/images/product1.jpg",
    category: "disposable",
    description:
      "Juicy watermelon flavor that's perfect for summer. High capacity with 15,000 puffs.",
    flavor: "Watermelon",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 18,
    rating: 4.7,
  },
  {
    id: 16,
    name: "Peach Mango Disposable",
    slug: "peach-mango-disposable",
    price: 16000,
    originalPrice: 20000,
    points: 320,
    image: "/assets/images/product5.jpg",
    category: "disposable",
    description:
      "Ripe peach and tropical mango blend. A fruity delight that lasts for thousands of puffs.",
    flavor: "Peach Mango",
    nicotine: "3%",
    inStock: true,
    isNew: false,
    discount: 20,
    rating: 4.6,
  },
  {
    id: 17,
    name: "Double Apple Disposable",
    slug: "double-apple-disposable",
    price: 15000,
    originalPrice: 19000,
    points: 300,
    image: "/assets/images/product2.jpg",
    category: "disposable",
    description:
      "Classic double apple flavor inspired by traditional shisha. Rich and aromatic.",
    flavor: "Double Apple",
    nicotine: "5%",
    inStock: true,
    isNew: false,
    discount: 21,
    rating: 4.4,
  },
  {
    id: 18,
    name: "Lychee Ice Disposable",
    slug: "lychee-ice-disposable",
    price: 17000,
    originalPrice: 22000,
    points: 340,
    image: "/assets/images/product6.jpg",
    category: "disposable",
    description:
      "Exotic lychee with a cool ice finish. Premium build quality with leak-proof design.",
    flavor: "Lychee Ice",
    nicotine: "3%",
    inStock: true,
    isNew: true,
    discount: 23,
    rating: 4.8,
  },
];

// ===== Helper Functions =====

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.rating >= 4.6).slice(0, 6);
}

export function getNewReleases(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getBestDeals(): Product[] {
  return products
    .filter((p) => p.discount && p.discount >= 20)
    .sort((a, b) => (b.discount || 0) - (a.discount || 0))
    .slice(0, 8);
}

export function searchProducts(query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.flavor?.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  );
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString()} MMK`;
}
