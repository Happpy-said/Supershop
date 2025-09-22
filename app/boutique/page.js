"use client"
import { useState } from "react"
import { products } from "../../data/products"
import ProductCard from "../../components/ProductCard"

export default function Boutique() {
  const [filter, setFilter] = useState("all")
  const [sortPrice, setSortPrice] = useState("none")

  let filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter)
  if (sortPrice === "asc") filteredProducts.sort((a, b) => a.price - b.price)
  if (sortPrice === "desc") filteredProducts.sort((a, b) => b.price - a.price)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Boutique Supershop</h1>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button onClick={() => setFilter("all")} className="bg-green text-beige px-4 py-2 rounded hover:bg-green-700">Tous</button>
        <button onClick={() => setFilter("cosmetiques")} className="bg-green text-beige px-4 py-2 rounded hover:bg-green-700">Cosmétiques</button>
        <button onClick={() => setFilter("nettoyage")} className="bg-green text-beige px-4 py-2 rounded hover:bg-green-700">Nettoyage</button>
        <button onClick={() => setFilter("bio")} className="bg-green text-beige px-4 py-2 rounded hover:bg-green-700">BIO</button>
        <button onClick={() => setFilter("hightech")} className="bg-green text-beige px-4 py-2 rounded hover:bg-green-700">High Tech</button>
      </div>
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => setSortPrice("asc")} className="bg-beige text-green px-4 py-2 rounded border border-green hover:bg-green hover:text-beige transition">Prix ↑</button>
        <button onClick={() => setSortPrice("desc")} className="bg-beige text-green px-4 py-2 rounded border border-green hover:bg-green hover:text-beige transition">Prix ↓</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}
