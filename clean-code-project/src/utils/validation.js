const MIN_NAME_LENGTH = 2

function validateName(value, fieldLabel) {
  if (!value || value.trim().length === 0) {
    return `Le ${fieldLabel} est requis.`
  }
  if (value.trim().length < MIN_NAME_LENGTH) {
    return `Le ${fieldLabel} doit contenir au moins ${MIN_NAME_LENGTH} caractères.`
  }
  return ''
}

export function validateLastName(lastName) {
  return validateName(lastName, 'nom')
}

export function validateFirstName(firstName) {
  return validateName(firstName, 'prénom')
}

export function validateEmail(email) {
  if (!email || email.trim().length === 0) {
    return "L'email est requis."
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return "L'email n'est pas valide."
  }
  return ''
}

const MIN_AGE = 13

export function validateBirthDate(birthDate) {
  if (!birthDate) {
    return 'La date de naissance est requise.'
  }
  const date = new Date(birthDate)
  if (isNaN(date.getTime())) {
    return 'La date de naissance n\'est pas valide.'
  }
  if (date > new Date()) {
    return 'La date de naissance ne peut pas être dans le futur.'
  }
  const today = new Date()
  let age = today.getFullYear() - date.getFullYear()
  const monthDiff = today.getMonth() - date.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())) {
    age--
  }
  if (age < MIN_AGE) {
    return `Vous devez avoir au moins ${MIN_AGE} ans.`
  }
  return ''
}

export function validateSignupForm({ lastName, firstName, email, birthDate }) {
  return {
    lastName: validateLastName(lastName),
    firstName: validateFirstName(firstName),
    email: validateEmail(email),
    birthDate: validateBirthDate(birthDate),
  }
}

export function isFormValid(errors) {
  return Object.values(errors).every((error) => error === '')
}
