"use client"
import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(p => p.id === product.id)
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
      } else {
        return [...prev, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(p => p.id !== id))
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
