"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const slides = [
  { id: 1, text: "Promo spéciale sur les cosmétiques 💄", bg: "#ffe4e1" },
  { id: 2, text: "Nettoyez malin avec nos produits 🧽", bg: "#e0ffff" },
  { id: 3, text: "Découvrez le meilleur du High Tech ⚡", bg: "#f0e68c" },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
          style={{ backgroundColor: slide.bg }}
        >
          {slide.text}
        </motion.div>
      ))}
    </div>
  )
}
