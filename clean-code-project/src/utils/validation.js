export function validateLastName(lastName) {
  if (!lastName || lastName.trim().length === 0) {
    return 'Le nom est requis.'
  }
  if (lastName.trim().length < 2) {
    return 'Le nom doit contenir au moins 2 caractères.'
  }
  return ''
}

export function validateFirstName(firstName) {
  if (!firstName || firstName.trim().length === 0) {
    return 'Le prénom est requis.'
  }
  if (firstName.trim().length < 2) {
    return 'Le prénom doit contenir au moins 2 caractères.'
  }
  return ''
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
