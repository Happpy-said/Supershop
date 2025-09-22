import "../globals.css"  // ou "./globals.css" selon l’emplacement
import Header from "../components/Header"
import { CartProvider } from "../context/CartContext"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
