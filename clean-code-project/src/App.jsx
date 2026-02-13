import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ProductStock from './components/ProductStock'
import SignupForm from './components/SignupForm'
import LoginModal from './components/LoginModal'
import { isOutOfStock } from './utils/stock'
import './App.css'

const INITIAL_STOCK = 5

const PRODUCTS = [
  { icon: '\u{1F3A7}', name: 'AirPods Pro 3', description: 'Reduction de bruit adaptative, audio spatial et autonomie de 30h avec le boitier.', price: '279 \u20AC' },
  { icon: '\u2328', name: 'MacBook Air M4', description: 'Puce M4, ecran Liquid Retina 13 pouces, 18h d\'autonomie et design ultra-fin.', price: '1 199 \u20AC' },
  { icon: '\u231B', name: 'Apple Watch Ultra 3', description: 'Boitier titane, GPS double frequence, autonomie 36h et capteur de profondeur.', price: '899 \u20AC' },
]

function App() {
  const [stock, setStock] = useState(INITIAL_STOCK)
  const [showLogin, setShowLogin] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('')

  const outOfStock = isOutOfStock(stock)

  const handleBuy = () => {
    setStock((previous) => Math.max(0, previous - 1))
  }

  const handleLogin = (email) => {
    setLoggedInUser(email)
  }

  const handleLogout = () => {
    setLoggedInUser('')
  }

  return (
    <div className="layout">
      <Sidebar remainingStock={stock} totalStock={INITIAL_STOCK} />

      <div className="main-content">
        <header className="header">
          <nav className="nav">
            {loggedInUser ? (
              <div className="nav-user">
                <span className="nav-user-email">{loggedInUser}</span>
                <button className="nav-cta" onClick={handleLogout}>
                  Deconnexion
                </button>
              </div>
            ) : (
              <button className="nav-cta" onClick={() => setShowLogin(true)}>
                Se connecter
              </button>
            )}
          </nav>
        </header>

        <main>
          <section className="hero" id="hero">
            <span className="hero-badge">
              {outOfStock ? 'Rupture de stock' : 'Disponible'}
            </span>
            <h1>L'application qui simplifie <span className="text-gradient">votre quotidien</span></h1>
            <p className="hero-subtitle">
              CleanApp — une solution simple, rapide et intuitive
              pour organiser vos taches efficacement.
            </p>
            <a href="#product" className="hero-cta">
              {outOfStock ? 'Reserver mon exemplaire' : 'Je veux l\'acheter'}
            </a>
          </section>

          <hr className="section-separator" />

          <section className="features" id="features">
            {PRODUCTS.map((product) => (
              <div className="feature" key={product.name}>
                <div className="feature-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="feature-price">{product.price}</span>
              </div>
            ))}
          </section>

          <hr className="section-separator" />

          <ProductStock remainingStock={stock} onBuy={handleBuy} />

          {outOfStock && <SignupForm />}
        </main>

        <footer className="footer">
          <p>CleanApp &copy; 2026 — Projet Clean Code</p>
        </footer>
      </div>

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  )
}

export default App
