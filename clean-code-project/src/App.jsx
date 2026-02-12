import SignupForm from './components/SignupForm'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <span className="logo">Clean<span className="logo-accent">App</span></span>
          <a href="#signup" className="nav-cta">S'inscrire</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <span className="hero-badge">Bientôt disponible</span>
          <h1>L'application qui simplifie <span className="text-gradient">votre quotidien</span></h1>
          <p className="hero-subtitle">
            CleanApp arrive bientôt. Une solution simple, rapide et intuitive
            pour organiser vos tâches efficacement.
          </p>
          <a href="#signup" className="hero-cta">Je veux être prévenu</a>
        </section>

        <hr className="section-separator" />

        <section className="features">
          <div className="feature">
            <div className="feature-icon">&#9889;</div>
            <h3>Simple</h3>
            <p>Interface épurée, sans superflu. Principe KISS appliqué.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">&#9889;</div>
            <h3>Rapide</h3>
            <p>Performance optimisée pour une expérience fluide.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">&#9889;</div>
            <h3>Fiable</h3>
            <p>Code robuste et testé pour une utilisation sans accroc.</p>
          </div>
        </section>

        <SignupForm />
      </main>

      <footer className="footer">
        <p>CleanApp &copy; 2026 — Projet Clean Code</p>
      </footer>
    </div>
  )
}

export default App
