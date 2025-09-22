"use client"
import { motion } from "framer-motion"
import { useCart } from "../context/CartContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-beige border border-green rounded-lg p-4 shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-green font-semibold">{product.price} DT</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-green text-beige py-2 rounded font-bold hover:bg-green-700 transition"
      >
        Ajouter au panier
      </button>
    </motion.div>
  )
}
