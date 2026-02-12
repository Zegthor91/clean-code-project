import { useState } from 'react'
import { validateSignupForm, isFormValid } from '../utils/validation'
import ValidationMessage from './ValidationMessage'

const INITIAL_FORM = {
  lastName: '',
  firstName: '',
  email: '',
  birthDate: '',
}

const INITIAL_ERRORS = {
  lastName: '',
  firstName: '',
  email: '',
  birthDate: '',
}

function SignupForm() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [submittedName, setSubmittedName] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateSignupForm(formData)

    if (!isFormValid(validationErrors)) {
      setErrors(validationErrors)
      return
    }

    setSubmittedName(formData.firstName.trim())
    setFormData(INITIAL_FORM)
    setErrors(INITIAL_ERRORS)
  }

  return (
    <section className="signup-section" id="signup">
      <h2>Soyez prévenu dès la sortie</h2>
      <p className="signup-subtitle">
        Inscrivez-vous pour être notifié quand le produit sera disponible.
      </p>

      {submittedName && <ValidationMessage firstName={submittedName} />}

      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Dupont"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Marie"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="marie@exemple.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">Date de naissance</label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>

        <button type="submit" className="submit-button">
          S'inscrire
        </button>
      </form>
    </section>
  )
}

export default SignupForm
