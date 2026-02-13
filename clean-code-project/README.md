# CleanApp - Projet Clean Code

Landing page pour un produit fictif avec systeme de stock, formulaire de reservation, authentification et dashboard, construite en appliquant les 5 piliers du Clean Code.

## Principes appliques

- **Lisibilite** : noms descriptifs, constantes nommees (pas de magic numbers), donnees extraites en tableaux de configuration
- **Simplicite (KISS)** : composants avec une seule responsabilite, pas d'abstraction inutile
- **DRY** : logique de validation factorisee (validateName generique), utilitaire stock partage entre composants
- **Robustesse** : validation des entrees (format email, date, longueur minimale, age minimum 13 ans), protection division par zero
- **Testabilite** : logique metier decouplee, 50 tests unitaires couvrant 7 fichiers

## Stack technique

- React 19
- Vite
- Vitest + Testing Library + user-event

## Structure du projet

```
src/
  components/
    Sidebar.jsx             -- Dashboard lateral (navigation, stock, statut)
    ProductStock.jsx        -- Compteur de stock avec bouton d'achat
    SignupForm.jsx          -- Formulaire de reservation
    ValidationMessage.jsx   -- Message "Merci {prenom}"
    LoginModal.jsx          -- Modale de connexion (email/mot de passe)
  utils/
    validation.js           -- Fonctions de validation (nom, email, date, age)
    stock.js                -- Utilitaires stock (isOutOfStock, getStockPercentage)
  __tests__/
    validation.test.js      -- Tests validation (17 tests)
    stock.test.js           -- Tests utilitaires stock (7 tests)
    SignupForm.test.jsx     -- Tests formulaire (5 tests)
    ProductStock.test.jsx   -- Tests compteur stock (5 tests)
    Sidebar.test.jsx        -- Tests sidebar (7 tests)
    LoginModal.test.jsx     -- Tests modale connexion (5 tests)
    App.test.jsx            -- Tests integration (4 tests)
  App.jsx                   -- Page principale
  App.css                   -- Styles (theme sombre, responsive)
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

- Sidebar avec navigation, barre de progression du stock et indicateur de disponibilite
- Section hero avec badge dynamique (Disponible / Rupture de stock)
- Catalogue de 3 produits electroniques (AirPods Pro 3, MacBook Air M4, Apple Watch Ultra 3)
- Compteur de stock avec decrementation a chaque achat
- Formulaire de reservation (nom, prenom, email, date de naissance) affiche quand le stock atteint 0
- Validation cote client avec messages d'erreur et verification d'age minimum
- Message de confirmation personnalise "Merci {prenom}"
- Modale de connexion avec gestion de session (email affiche dans le header)
- Design sombre responsive (sidebar masquee sous 900px)
