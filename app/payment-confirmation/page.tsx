"use client";

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Package, Truck, CreditCard } from "lucide-react";

export default function PaymentConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-8 rounded-lg shadow-md"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="inline-block mb-6"
          >
            <CheckCircle size={100} className="text-green-500" />
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl mb-8">
            Thank you for your purchase. Your order is confirmed.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="bg-gray-100 p-4 rounded-lg">
              <CreditCard size={40} className="mx-auto mb-2 text-blue-500" />
              <h3 className="font-semibold">Payment Processed</h3>
              <p className="text-sm text-gray-600">
                Your payment has been successfully processed.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Package size={40} className="mx-auto mb-2 text-orange-500" />
              <h3 className="font-semibold">Order Confirmed</h3>
              <p className="text-sm text-gray-600">
                Your order has been confirmed and is being prepared.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Truck size={40} className="mx-auto mb-2 text-green-500" />
              <h3 className="font-semibold">Shipping Soon</h3>
              <p className="text-sm text-gray-600">
                Your order will be shipped within 1-3 business days.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Link href="/products">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
