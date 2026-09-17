import type { Metadata } from 'next';
import { products } from '../content';
import { ProductCard, SiteFooter, SiteHeader } from '../site-chrome';

export const metadata: Metadata = {
  title: 'Selbst gestalten | Edu Escape Academy',
  description: 'Workshops und Genially-Vorlagen für eigene interaktive Lernmaterialien.',
};

export default function CreatePage() {
  const workshops = products.filter((product) => product.category === 'workshops');
  const templates = products.filter((product) => product.category === 'vorlagen');

  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-flow">
        <section className="inner-hero">
          <p className="eyebrow">Mit Genially selbst gestalten</p>
          <h1>Deine Ideen. Dein Lernerlebnis.</h1>
          <p>Workshops für deinen Einstieg und Vorlagen, die dir Spielmechanik und Gestaltung abnehmen.</p>
          <nav className="jump-links" aria-label="Angebotsarten">
            <a href="#workshops">Workshops</a>
            <a href="#vorlagen">Vorlagen zum Befüllen</a>
          </nav>
        </section>

        <section className="catalog-section" id="workshops">
          <h2>Workshops</h2>
          <p className="section-intro">Die Workshop-Angebote werden aktuell überarbeitet. Der Adventskalender macht den Anfang.</p>
          <div className="catalog-grid compact-grid">
            {workshops.map((product) => <ProductCard product={product} key={product.title} />)}
          </div>
        </section>

        <section className="catalog-section" id="vorlagen">
          <h2>Vorlagen zum Befüllen</h2>
          <p className="section-intro">Du ergänzt deine Inhalte – Spielmechanik und hochwertige Hintergründe sind bereits vorbereitet.</p>
          <div className="catalog-grid compact-grid">
            {templates.map((product) => <ProductCard product={product} key={product.title} />)}
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
