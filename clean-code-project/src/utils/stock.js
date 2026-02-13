const MIN_STOCK = 0

export function isOutOfStock(stock) {
  return stock <= MIN_STOCK
}

export function getStockPercentage(remaining, total) {
  if (total <= 0) return 0
  return Math.round((remaining / total) * 100)
}
