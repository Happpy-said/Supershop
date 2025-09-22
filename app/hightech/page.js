"use client"
import { useState } from "react"
import { products } from "../../data/products"
import ProductCard from "../../components/ProductCard"

export default function HighTech() {
  const [sortPrice, setSortPrice] = useState("none")
  let filteredProducts = products.filter(p => p.category === "hightech")
  if (sortPrice === "asc") filteredProducts.sort((a, b) => a.price - b.price)
  if (sortPrice === "desc") filteredProducts.sort((a, b) => b.price - a.price)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">High Tech</h1>
      <p className="text-center mb-8">Découvrez nos produits High Tech.</p>

      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setSortPrice("asc")} className="bg-beige text-green px-4 py-2 rounded border border-green hover:bg-green hover:text-beige transition">Prix ↑</button>
        <button onClick={() => setSortPrice("desc")} className="bg-beige text-green px-4 py-2 rounded border border-green hover:bg-green hover:text-beige transition">Prix ↓</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
