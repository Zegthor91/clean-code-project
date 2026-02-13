import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProductStock from '../components/ProductStock'

describe('ProductStock', () => {
  it('affiche le nombre de produits restants', () => {
    render(<ProductStock remainingStock={5} onBuy={() => {}} />)

    expect(screen.getByTestId('stock-count')).toHaveTextContent('5')
    expect(screen.getByText('produits restants')).toBeInTheDocument()
  })

  it('affiche le bouton acheter quand il y a du stock', () => {
    render(<ProductStock remainingStock={3} onBuy={() => {}} />)

    expect(screen.getByRole('button', { name: /acheter/i })).toBeInTheDocument()
  })

  it('appelle onBuy au clic sur le bouton acheter', async () => {
    const handleBuy = vi.fn()
    const user = userEvent.setup()
    render(<ProductStock remainingStock={3} onBuy={handleBuy} />)

    await user.click(screen.getByRole('button', { name: /acheter/i }))

    expect(handleBuy).toHaveBeenCalledOnce()
  })

  it('affiche "Rupture de stock" quand le stock est a 0', () => {
    render(<ProductStock remainingStock={0} onBuy={() => {}} />)

    expect(screen.getByText('Rupture de stock')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('affiche le message de reservation quand le stock est a 0', () => {
    render(<ProductStock remainingStock={0} onBuy={() => {}} />)

    expect(screen.getByText(/n'est plus disponible/i)).toBeInTheDocument()
  })
})
