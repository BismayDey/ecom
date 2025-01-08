"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/lib/products";
import { useCart } from "@/lib/useCart";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ShoppingCart, Percent, Zap, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const { addToCart, addToWishlist } = useCart();

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to TechBazaar</h1>
          <p className="text-xl mb-6">
            Discover cutting-edge technology and premium products.
          </p>
          <Link href="/products">
            <Button size="lg" variant="secondary">
              Explore Now
            </Button>
          </Link>
        </motion.section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/products?category=${category}`}>
                  <div className="bg-gray-100 rounded-lg p-4 text-center hover:bg-gray-200 transition-colors">
                    <h3 className="font-semibold">{category}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex flex-col h-full">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {product.discount && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          <Percent size={14} className="inline mr-1" />
                          {product.discount}% OFF
                        </span>
                      )}
                      {product.newArrival && (
                        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          <Zap size={14} className="inline mr-1" />
                          NEW
                        </span>
                      )}
                    </div>
                  </Link>
                  <CardContent className="flex-grow">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </Link>
                    <p className="text-gray-600 mb-2">
                      ₹{product.price.toLocaleString()}
                      {product.discount && (
                        <span className="ml-2 text-sm line-through text-gray-400">
                          ₹
                          {Math.round(
                            product.price / (1 - product.discount / 100)
                          ).toLocaleString()}
                        </span>
                      )}
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={`star-${product.id}-${i}`}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={16}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews.length})
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {product.description.slice(0, 100)}...
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button onClick={() => addToCart(product)}>
                      <ShoppingCart size={20} className="mr-2" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => addToWishlist(product)}
                    >
                      <Heart size={20} />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 bg-gray-100 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">TechBazaar Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <p className="text-3xl font-bold mb-4">
                  ₹499<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> Free
                    shipping on all orders
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> Early
                    access to sales
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> 24/7
                    customer support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe</Button>
              </CardFooter>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Pro</h3>
                <p className="text-3xl font-bold mb-4">
                  ₹999<span className="text-sm font-normal">/month</span>
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="mr-2" /> All Basic features
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2" /> Exclusive product
                    access
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2" /> Priority shipping
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2" /> Monthly tech workshop
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Custom</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> All Pro
                    features
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" />{" "}
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> Custom
                    integration
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="mr-2 text-green-500" /> Bulk
                    ordering discounts
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </motion.section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p>
                TechBazaar is your one-stop shop for all things tech. We offer a
                wide range of high-quality electronics and gadgets.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/cart">Cart</Link>
                </li>
                <li>
                  <Link href="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: bismaydey001@gmail.com</p>
              <p>Phone: +91 8100314152</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 TechBazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
