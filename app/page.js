import Banner from "../components/Banner"

export default function Home() {
  return (
    <div>
      <Banner />
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Bienvenue sur Supershop 🛒</h2>
        <p className="text-lg">
          Découvrez nos catégories : Cosmétiques, Produits de nettoyage, Produits BIO et High Tech.
        </p>
      </section>
    </div>
  )
}
