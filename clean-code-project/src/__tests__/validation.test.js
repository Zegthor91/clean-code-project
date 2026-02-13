import { describe, it, expect } from 'vitest'
import {
  validateLastName,
  validateFirstName,
  validateEmail,
  validateBirthDate,
  validateSignupForm,
  isFormValid,
} from '../utils/validation'

describe('validateLastName', () => {
  it('retourne une erreur si le nom est vide', () => {
    expect(validateLastName('')).toBe('Le nom est requis.')
  })

  it('retourne une erreur si le nom est trop court', () => {
    expect(validateLastName('A')).toBe('Le nom doit contenir au moins 2 caractères.')
  })

  it('retourne vide si le nom est valide', () => {
    expect(validateLastName('Dupont')).toBe('')
  })
})

describe('validateFirstName', () => {
  it('retourne une erreur si le prénom est vide', () => {
    expect(validateFirstName('')).toBe('Le prénom est requis.')
  })

  it('retourne une erreur si le prénom est trop court', () => {
    expect(validateFirstName('A')).toBe('Le prénom doit contenir au moins 2 caractères.')
  })

  it('retourne vide si le prénom est valide', () => {
    expect(validateFirstName('Jean')).toBe('')
  })
})

describe('validateEmail', () => {
  it('retourne une erreur si le mail est vide', () => {
    expect(validateEmail('')).toBe("L'email est requis.")
  })

  it('retourne une erreur si le format est invalide', () => {
    expect(validateEmail('pas-un-email')).toBe("L'email n'est pas valide.")
  })

  it('retourne vide si le mail est valide', () => {
    expect(validateEmail('jean@test.com')).toBe('')
  })
})

describe('validateBirthDate', () => {
  it('retourne une erreur si la date est vide', () => {
    expect(validateBirthDate('')).toBe('La date de naissance est requise.')
  })

  it('retourne une erreur si la date est dans le futur', () => {
    expect(validateBirthDate('2099-01-01')).toBe(
      'La date de naissance ne peut pas être dans le futur.'
    )
  })

  it('retourne vide si la date est valide', () => {
    expect(validateBirthDate('2000-05-15')).toBe('')
  })

  it('retourne une erreur si la personne a moins de 13 ans', () => {
    const today = new Date()
    const tooYoung = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate())
    const dateString = tooYoung.toISOString().split('T')[0]
    expect(validateBirthDate(dateString)).toBe('Vous devez avoir au moins 13 ans.')
  })
})

describe('validateSignupForm', () => {
  it('retourne des erreurs pour un formulaire entièrement vide', () => {
    const errors = validateSignupForm({
      lastName: '',
      firstName: '',
      email: '',
      birthDate: '',
    })

    expect(errors.lastName).toBeTruthy()
    expect(errors.firstName).toBeTruthy()
    expect(errors.email).toBeTruthy()
    expect(errors.birthDate).toBeTruthy()
  })

  it('retourne aucune erreur pour un formulaire valide', () => {
    const errors = validateSignupForm({
      lastName: 'Dupont',
      firstName: 'Jean',
      email: 'jean@test.com',
      birthDate: '2000-05-15',
    })

    expect(isFormValid(errors)).toBe(true)
  })
})

describe('isFormValid', () => {
  it('retourne true quand toutes les erreurs sont vides', () => {
    expect(isFormValid({ lastName: '', firstName: '', email: '', birthDate: '' })).toBe(true)
  })

  it('retourne false quand au moins une erreur existe', () => {
    expect(isFormValid({ lastName: 'Erreur', firstName: '', email: '', birthDate: '' })).toBe(false)
  })
})
