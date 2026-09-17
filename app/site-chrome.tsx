import { sitePath } from './paths';

export function SiteHeader() {
  return (
    <>
      <div className="top-rule" />
      <header className="site-header page-shell">
        <a className="brand" href={sitePath('/')} aria-label="Edu Escape Academy – Startseite">
          <img src="./assets/brand/logo.png" alt="Edu Escape Academy" />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href={sitePath('/unterrichtsmaterialien')}>Unterrichtsmaterialien</a>
          <a href={sitePath('/selbst-gestalten')}>Selbst gestalten</a>
          <a href={sitePath('/#kostenlos')}>Kostenlos</a>
        </nav>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="page-shell footer-inner">
        <span>Edu Escape Academy</span>
        <nav aria-label="Rechtliches und Kontakt">
          <a href="mailto:escape_academy@tobias.eu">Kontakt</a>
          <a href="#">Instagram</a>
          <a href={sitePath('/impressum')}>Impressum</a>
          <a href={sitePath('/datenschutz')}>Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}

export function ProductCard({
  product,
}: {
  product: import('./content').Product;
}) {
  return (
    <article className="catalog-card">
      <div className="catalog-image"><img src={product.image} alt="" /></div>
      <div className="catalog-content">
        {product.status && <span className="catalog-status">{product.status}</span>}
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {product.level && <p className="product-level">{product.level}</p>}
        {product.shopUrl ? (
          <a className="text-link" href={product.shopUrl} target="_blank" rel="noreferrer">Zum Angebot →</a>
        ) : (
          <span className="link-placeholder">Link folgt</span>
        )}
      </div>
    </article>
  );
}
