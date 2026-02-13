import { isOutOfStock, getStockPercentage } from '../utils/stock'

function Sidebar({ remainingStock, totalStock }) {
  const stockPercentage = getStockPercentage(remainingStock, totalStock)
  const outOfStock = isOutOfStock(remainingStock)

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Clean<span className="logo-accent">App</span>
      </div>

      <nav className="sidebar-nav">
        <a href="#hero" className="sidebar-link">Accueil</a>
        <a href="#features" className="sidebar-link">Fonctionnalites</a>
        <a href="#product" className="sidebar-link">Produit</a>
        {outOfStock && <a href="#signup" className="sidebar-link">Reservation</a>}
      </nav>

      <div className="sidebar-stock">
        <span className="sidebar-stock-title">Stock</span>
        <div className="sidebar-progress-track">
          <div
            className="sidebar-progress-bar"
            style={{ width: `${stockPercentage}%` }}
          />
        </div>
        <span className="sidebar-stock-info">
          {outOfStock ? 'Epuise' : `${remainingStock} / ${totalStock}`}
        </span>
      </div>

      <div className="sidebar-status">
        <span className={`sidebar-dot ${outOfStock ? 'dot-red' : 'dot-green'}`} />
        <span className="sidebar-status-text">
          {outOfStock ? 'Indisponible' : 'En vente'}
        </span>
      </div>
    </aside>
  )
}

export default Sidebar
