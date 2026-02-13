import { describe, it, expect } from 'vitest'
import { isOutOfStock, getStockPercentage } from '../utils/stock'

describe('isOutOfStock', () => {
  it('retourne true quand le stock est a 0', () => {
    expect(isOutOfStock(0)).toBe(true)
  })

  it('retourne true quand le stock est negatif', () => {
    expect(isOutOfStock(-1)).toBe(true)
  })

  it('retourne false quand il reste du stock', () => {
    expect(isOutOfStock(3)).toBe(false)
  })
})

describe('getStockPercentage', () => {
  it('retourne le pourcentage correct', () => {
    expect(getStockPercentage(3, 5)).toBe(60)
  })

  it('retourne 0 quand le total est 0 (division par zero)', () => {
    expect(getStockPercentage(0, 0)).toBe(0)
  })

  it('retourne 100 quand le stock est plein', () => {
    expect(getStockPercentage(5, 5)).toBe(100)
  })

  it('retourne 0 quand le stock est vide', () => {
    expect(getStockPercentage(0, 5)).toBe(0)
  })
})
