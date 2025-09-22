export default function Panier() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Votre Panier</h1>
      <p className="text-center mb-8">Les produits ajoutés s’afficheront ici.</p>
      <div className="flex flex-col gap-4">
        {/* Ici viendront les cartes produits du panier */}
      </div>
      <div className="text-center mt-6">
        <button className="bg-green text-beige px-6 py-3 rounded font-bold hover:bg-green-700 transition">
          Passer la commande (paiement à la livraison)
        </button>
      </div>
    </div>
  )
}
