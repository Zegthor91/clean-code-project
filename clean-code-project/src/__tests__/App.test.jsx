import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App', () => {
  it('affiche le compteur de stock au chargement', () => {
    render(<App />)

    expect(screen.getByTestId('stock-count')).toHaveTextContent('5')
  })

  it('ne montre pas le formulaire quand il reste du stock', () => {
    render(<App />)

    expect(screen.queryByLabelText('Email')).not.toBeInTheDocument()
  })

  it('decremente le stock a chaque achat', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /acheter/i }))

    expect(screen.getByTestId('stock-count')).toHaveTextContent('4')
  })

  it('affiche le formulaire quand le stock atteint 0', async () => {
    const user = userEvent.setup()
    render(<App />)

    const buyButton = screen.getByRole('button', { name: /acheter/i })
    for (let i = 0; i < 5; i++) {
      await user.click(buyButton)
    }

    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Nom')).toBeInTheDocument()
    expect(screen.getByLabelText('Prénom')).toBeInTheDocument()
    expect(screen.getByLabelText('Date de naissance')).toBeInTheDocument()
  })
})
