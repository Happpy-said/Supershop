"use client"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-green text-beige flex justify-between items-center p-4">
      <div className="text-2xl font-bold">Supershop</div>
      <nav className="hidden md:flex gap-6">
        <a href="/" className="hover:underline">Accueil</a>
        <a href="/boutique" className="hover:underline">Boutique</a>
        <div className="relative group">
          <button className="hover:underline">Catégories ▼</button>
          <div className="absolute left-0 mt-2 bg-beige text-green p-2 rounded shadow-lg hidden group-hover:block">
            <a href="/cosmetiques" className="block px-4 py-2 hover:bg-green hover:text-beige">Cosmétiques</a>
            <a href="/nettoyage" className="block px-4 py-2 hover:bg-green hover:text-beige">Nettoyage</a>
            <a href="/bio" className="block px-4 py-2 hover:bg-green hover:text-beige">Produits BIO</a>
            <a href="/hightech" className="block px-4 py-2 hover:bg-green hover:text-beige">High Tech</a>
          </div>
        </div>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-green text-beige flex flex-col items-center md:hidden">
          <a href="/" className="py-2">Accueil</a>
          <a href="/boutique" className="py-2">Boutique</a>
          <a href="/cosmetiques" className="py-2">Cosmétiques</a>
          <a href="/nettoyage" className="py-2">Nettoyage</a>
          <a href="/bio" className="py-2">Produits BIO</a>
          <a href="/hightech" className="py-2">High Tech</a>
          <a href="/contact" className="py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
