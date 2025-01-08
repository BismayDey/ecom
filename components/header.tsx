import Link from "next/link";
import { ShoppingCart, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/useCart";
import { motion } from "framer-motion";

export function Header() {
  const { cartItems, wishlistItems } = useCart();

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          TechBazaar
        </Link>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </form>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart size={24} />
              {wishlistItems.length > 0 && (
                <motion.span
                  key={wishlistItems.length}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  {wishlistItems.length}
                </motion.span>
              )}
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <motion.span
                  key={cartItems.length}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  {cartItems.length}
                </motion.span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
