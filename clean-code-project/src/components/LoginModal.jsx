import { useState } from 'react'

function LoginModal({ onClose, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('Veuillez remplir tous les champs.')
      return
    }

    onLogin(email.trim())
    onClose()
  }

  const clearError = () => setError('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    clearError()
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    clearError()
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" role="dialog" aria-label="Connexion">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          &times;
        </button>

        <h2 className="modal-title">Se connecter</h2>
        <p className="modal-subtitle">Accedez a votre espace CleanApp</p>

        {error && <p className="modal-error">{error}</p>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Mot de passe</label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Votre mot de passe"
            />
          </div>

          <button type="submit" className="submit-button">
            Connexion
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
