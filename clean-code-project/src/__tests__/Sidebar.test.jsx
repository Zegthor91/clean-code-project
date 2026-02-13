import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Sidebar from '../components/Sidebar'

describe('Sidebar', () => {
  it('affiche le logo CleanApp', () => {
    render(<Sidebar remainingStock={5} totalStock={5} />)

    expect(screen.getByText(/Clean/)).toBeInTheDocument()
  })

  it('affiche les liens de navigation', () => {
    render(<Sidebar remainingStock={5} totalStock={5} />)

    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Fonctionnalites')).toBeInTheDocument()
    expect(screen.getByText('Produit')).toBeInTheDocument()
  })

  it('affiche le stock restant', () => {
    render(<Sidebar remainingStock={3} totalStock={5} />)

    expect(screen.getByText('3 / 5')).toBeInTheDocument()
  })

  it('affiche "En vente" quand il y a du stock', () => {
    render(<Sidebar remainingStock={2} totalStock={5} />)

    expect(screen.getByText('En vente')).toBeInTheDocument()
  })

  it('affiche "Indisponible" et "Epuise" quand le stock est a 0', () => {
    render(<Sidebar remainingStock={0} totalStock={5} />)

    expect(screen.getByText('Indisponible')).toBeInTheDocument()
    expect(screen.getByText('Epuise')).toBeInTheDocument()
  })

  it('affiche le lien Reservation quand le stock est a 0', () => {
    render(<Sidebar remainingStock={0} totalStock={5} />)

    expect(screen.getByText('Reservation')).toBeInTheDocument()
  })

  it('masque le lien Reservation quand il y a du stock', () => {
    render(<Sidebar remainingStock={3} totalStock={5} />)

    expect(screen.queryByText('Reservation')).not.toBeInTheDocument()
  })
})
