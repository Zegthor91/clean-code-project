# CleanApp - Projet Clean Code

Landing page pour un produit fictif avec formulaire d'inscription, construite en appliquant les 5 piliers du Clean Code.

## Principes appliques

- **Lisibilite** : noms descriptifs, code auto-documente, pas de commentaires superflus
- **Simplicite (KISS)** : composants avec une seule responsabilite, pas d'abstraction inutile
- **DRY** : logique de validation centralisee et reutilisable
- **Robustesse** : validation des entrees (format email, date, longueur minimale)
- **Testabilite** : logique metier decouplee, 21 tests unitaires

## Stack technique

- React 19
- Vite
- Vitest + Testing Library

## Structure du projet

```
src/
  components/
    SignupForm.jsx          -- Formulaire d'inscription
    ValidationMessage.jsx   -- Message "Merci {prenom}"
  utils/
    validation.js           -- Fonctions de validation
  __tests__/
    validation.test.js      -- Tests logique metier (16 tests)
    SignupForm.test.jsx     -- Tests composant (5 tests)
  App.jsx                   -- Page principale
  App.css                   -- Styles
```

## Installation

```bash
npm install
```

## Commandes

```bash
npm run dev         # Serveur de developpement
npm run build       # Build de production
npm run test        # Lancer les tests
npm run test:watch  # Tests en mode watch
npm run lint        # Verification ESLint
```

## Fonctionnalites

- Landing page avec section hero et features
- Formulaire : nom, prenom, email, date de naissance
- Validation cote client avec messages d'erreur
- Message de confirmation personnalise "Merci {prenom}"
- Design sombre responsive
