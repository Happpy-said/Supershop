"use client"
import { useCart } from "../../context/CartContext"

export default function Panier() {
  const { cart, removeFromCart, total, clearCart } = useCart()

  if (cart.length === 0) {
    return <p className="p-8 text-center text-xl">Votre panier est vide.</p>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Votre Panier</h1>

      <div className="flex flex-col gap-4">
        {cart.map((p) => (
          <div key={p.id} className="flex justify-between items-center bg-beige p-4 rounded border border-green">
            <div>
              <h3 className="font-bold">{p.name}</h3>
              <p>{p.quantity} x {p.price} DT</p>
            </div>
            <button
              onClick={() => removeFromCart(p.id)}
              className="bg-red-600 text-beige px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xl font-bold mb-4">Total : {total} DT</p>
        <button
          className="bg-green text-beige px-6 py-3 rounded font-bold hover:bg-green-700 transition"
          onClick={() => { alert("Commande passée ! Paiement à la livraison."); clearCart() }}
        >
          Passer la commande (paiement à la livraison)
        </button>
      </div>
    </div>
  )
}
