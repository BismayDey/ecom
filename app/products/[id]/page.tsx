"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { useCart } from "@/lib/useCart";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart, addToWishlist } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  if (!product) {
    notFound();
  }

  // Simulating multiple product images
  const productImages = [product.image, ...Array(3).fill(product.image)];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative bg-white p-4 rounded-lg shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square"
              >
                <Image
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight />
            </Button>
            <div className="flex justify-center mt-4 space-x-2">
              {productImages.map((_, index) => (
                <Button
                  key={`image-dot-${index}`}
                  variant="outline"
                  size="sm"
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4 text-primary">
              ₹{product.price.toLocaleString()}
            </p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`star-${i}`}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                  size={20}
                />
              ))}
              <span className="ml-2 text-gray-600">
                ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            {product.colors && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Colors:</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <Button
                      key={`color-${color}`}
                      variant="outline"
                      className={`w-8 h-8 rounded-full ${
                        selectedColor === color ? "ring-2 ring-primary" : ""
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && (
                        <Check className="text-white" size={16} />
                      )}
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside">
                {product.features.map((feature, index) => (
                  <li key={`feature-${index}`} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mb-6">
              <Button onClick={() => addToCart(product)} className="flex-1">
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" onClick={() => addToWishlist(product)}>
                <Heart size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          {product.reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-200 py-4 last:border-b-0"
            >
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{review.userName}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={`review-star-${review.id}-${i}`}
                      className={
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }
                      size={16}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-sm text-gray-500 mt-1">{review.date}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
