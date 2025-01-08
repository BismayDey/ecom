export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: Review[];
  features: string[];
  stock: number;
  brand: string;
  discount?: number;
  newArrival?: boolean;
  colors?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "OnePlus 9 Pro 5G",
    description:
      "Flagship smartphone with Hasselblad camera for mobile, 120 Hz Fluid Display, and Warp Charge 65T.",
    price: 64999,
    image:
      "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&q=80",
    category: "Smartphones",
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        userName: "Aarav Patel",
        rating: 5,
        comment: "Excellent camera quality and super fast charging!",
        date: "2023-05-15",
      },
      {
        id: "r2",
        userName: "Diya Sharma",
        rating: 4,
        comment: "Great phone, but a bit pricey.",
        date: "2023-05-10",
      },
    ],
    features: [
      "Snapdragon 888 5G",
      "8GB RAM",
      "256GB Storage",
      "4500 mAh Battery",
    ],
    stock: 50,
    brand: "OnePlus",
    discount: 10,
    colors: ["Pine Green", "Morning Mist", "Stellar Black"],
  },
  {
    id: "2",
    name: "boAt Rockerz 550 Wireless Headphone",
    description:
      "Over-Ear Wireless Headphone with upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation.",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
    rating: 4.2,
    reviews: [
      {
        id: "r3",
        userName: "Arjun Gupta",
        rating: 4,
        comment: "Good sound quality, comfortable for long use.",
        date: "2023-05-08",
      },
      {
        id: "r4",
        userName: "Ishaan Reddy",
        rating: 5,
        comment: "Amazing battery life!",
        date: "2023-05-05",
      },
    ],
    features: [
      "20 Hours Playback",
      "50MM Drivers",
      "Bluetooth v5.0",
      "Voice Assistant Support",
    ],
    stock: 100,
    brand: "boAt",
    newArrival: true,
    colors: ["Black", "Blue", "Red"],
  },
  {
    id: "3",
    name: "Fossil Gen 5 Smartwatch",
    description:
      "Touchscreen smartwatch with built-in GPS, heart rate monitoring, and smartphone notifications.",
    price: 22995,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
    rating: 4.3,
    reviews: [
      {
        id: "r5",
        userName: "Anaya Kapoor",
        rating: 4,
        comment: "Stylish and functional, but battery life could be better.",
        date: "2023-05-03",
      },
      {
        id: "r6",
        userName: "Vihaan Singh",
        rating: 5,
        comment: "Love the customizable watch faces!",
        date: "2023-04-30",
      },
    ],
    features: [
      "Wear OS by Google",
      "Heart Rate Tracking",
      "GPS",
      "NFC for Google Pay",
    ],
    stock: 30,
    brand: "Fossil",
    discount: 15,
    colors: ["Black", "Silver", "Rose Gold"],
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description:
      "High-back mesh office chair with lumbar support, adjustable headrest, and 3D armrests.",
    price: 15999,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80",
    category: "Furniture",
    rating: 4.7,
    reviews: [
      {
        id: "r7",
        userName: "Anika Joshi",
        rating: 5,
        comment: "Very comfortable for long work hours.",
        date: "2023-04-28",
      },
      {
        id: "r8",
        userName: "Reyansh Kumar",
        rating: 4,
        comment: "Good quality, but assembly was a bit tricky.",
        date: "2023-04-25",
      },
    ],
    features: [
      "Ergonomic Design",
      "Breathable Mesh Back",
      "Adjustable Lumbar Support",
      "360° Swivel",
    ],
    stock: 20,
    brand: "Ergolite",
    colors: ["Black", "Gray"],
  },
  {
    id: "5",
    name: "Canon EOS R6 Mirrorless Camera",
    description:
      "Full-frame mirrorless camera with 4K video capability, in-body image stabilization, and dual pixel autofocus.",
    price: 215995,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    category: "Cameras",
    rating: 4.8,
    reviews: [
      {
        id: "r9",
        userName: "Zara Mehta",
        rating: 5,
        comment: "Exceptional image quality and low-light performance.",
        date: "2023-04-22",
      },
      {
        id: "r10",
        userName: "Advait Choudhury",
        rating: 4,
        comment: "Great camera, but quite expensive.",
        date: "2023-04-20",
      },
    ],
    features: [
      "20MP Full-Frame Sensor",
      "4K60p Video",
      "8-Stop Image Stabilization",
      "Dual Card Slots",
    ],
    stock: 15,
    brand: "Canon",
    newArrival: true,
  },
  {
    id: "6",
    name: "MacBook Pro 16-inch",
    description:
      "Powerful laptop with M1 Pro chip, 16-inch Liquid Retina XDR display, and up to 21 hours of battery life.",
    price: 239900,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    category: "Laptops",
    rating: 4.9,
    reviews: [
      {
        id: "r11",
        userName: "Rohan Malhotra",
        rating: 5,
        comment: "Incredible performance and battery life!",
        date: "2023-05-25",
      },
      {
        id: "r12",
        userName: "Priya Desai",
        rating: 5,
        comment: "Perfect for professional video editing.",
        date: "2023-05-23",
      },
    ],
    features: [
      "M1 Pro chip",
      "16GB RAM",
      "512GB SSD",
      "16-inch Liquid Retina XDR display",
    ],
    stock: 10,
    brand: "Apple",
    newArrival: true,
    colors: ["Space Gray", "Silver"],
  },
  {
    id: "7",
    name: "Sony PlayStation 5",
    description:
      "Next-gen gaming console with ultra-high speed SSD, 4K-TV gaming, and ray tracing.",
    price: 49990,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",
    category: "Gaming",
    rating: 4.8,
    reviews: [
      {
        id: "r13",
        userName: "Arjun Kapoor",
        rating: 5,
        comment: "Amazing graphics and super fast loading times!",
        date: "2023-05-28",
      },
      {
        id: "r14",
        userName: "Riya Sharma",
        rating: 4,
        comment: "Great console, but hard to find in stock.",
        date: "2023-05-26",
      },
    ],
    features: [
      "4K gaming",
      "Ray tracing",
      "Ultra-high speed SSD",
      "Haptic feedback",
    ],
    stock: 5,
    brand: "Sony",
    discount: 5,
  },
  {
    id: "8",
    name: "Samsung 65-inch QLED 4K Smart TV",
    description:
      "65-inch QLED 4K TV with Quantum Processor 4K, 100% Color Volume with Quantum Dot, and Alexa built-in.",
    price: 179990,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
    category: "TVs",
    rating: 4.7,
    reviews: [
      {
        id: "r15",
        userName: "Vikram Singh",
        rating: 5,
        comment: "Stunning picture quality and smart features!",
        date: "2023-05-30",
      },
      {
        id: "r16",
        userName: "Neha Gupta",
        rating: 4,
        comment: "Great TV, but the user interface could be more intuitive.",
        date: "2023-05-29",
      },
    ],
    features: [
      "65-inch QLED 4K",
      "Quantum Processor 4K",
      "100% Color Volume",
      "Alexa built-in",
    ],
    stock: 8,
    brand: "Samsung",
    discount: 10,
  },
];
