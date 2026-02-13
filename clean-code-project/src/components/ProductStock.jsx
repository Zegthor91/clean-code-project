import { isOutOfStock } from '../utils/stock'

function ProductStock({ remainingStock, onBuy }) {
  const outOfStock = isOutOfStock(remainingStock)

  return (
    <section className="stock-section" id="product">
      <h2>Obtenez CleanApp maintenant</h2>

      <div className="stock-counter">
        <span className="stock-number" data-testid="stock-count">
          {remainingStock}
        </span>
        <span className="stock-label">
          {outOfStock ? 'Rupture de stock' : 'produits restants'}
        </span>
      </div>

      {outOfStock ? (
        <p className="stock-message">
          Le produit n'est plus disponible. Inscrivez-vous ci-dessous pour
          etre prevenu du retour en stock.
        </p>
      ) : (
        <button className="buy-button" onClick={onBuy}>
          Acheter — Il en reste {remainingStock}
        </button>
      )}
    </section>
  )
}

export default ProductStock
