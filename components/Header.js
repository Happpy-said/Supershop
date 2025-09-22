"use client"
import Link from "next/link"
import { useCart } from "../context/CartContext"

export default function Header() {
  const { cart } = useCart()
  return (
    <header className="bg-beige shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green">
        <Link href="/">Supershop</Link>
      </h1>
      <nav className="flex gap-4 flex-wrap">
        <Link href="/boutique" className="text-green font-semibold hover:underline">Boutique</Link>
        <Link href="/cosmetiques" className="text-green font-semibold hover:underline">Cosmétiques</Link>
        <Link href="/nettoyage" className="text-green font-semibold hover:underline">Nettoyage</Link>
        <Link href="/bio" className="text-green font-semibold hover:underline">BIO</Link>
        <Link href="/hightech" className="text-green font-semibold hover:underline">High Tech</Link>
        <Link href="/panier" className="text-green font-semibold hover:underline">
          Panier ({cart.length})
        </Link>
      </nav>
    </header>
  )
}
