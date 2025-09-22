
import "./globals.css"
import Header from "../components/Header"
import { CartProvider } from "../context/CartContext"

export const metadata = {
  title: "Supershop",
  description: "Boutique en ligne multi-catégories",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <footer className="bg-green text-beige text-center p-4 mt-8">
            © 2025 Supershop. Tous droits réservés.
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
