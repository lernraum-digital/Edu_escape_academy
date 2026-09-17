import type { Metadata } from 'next';
import { products } from '../content';
import { ProductCard, SiteFooter, SiteHeader } from '../site-chrome';

export const metadata: Metadata = {
  title: 'Unterrichtsmaterialien | Edu Escape Academy',
  description: 'Escape Rooms, Spiele und Lesespurgeschichten für deinen Unterricht.',
};

const sections = [
  { id: 'escape-rooms', title: 'Escape Rooms', category: 'escape' as const },
  { id: 'spiele', title: 'Spiele für zwischendurch', category: 'spiele' as const },
  { id: 'lesespuren', title: 'Lesespurgeschichten', category: 'lesespuren' as const },
  { id: 'vorlagen', title: 'Vorlagen zum Anpassen', category: 'vorlagen' as const },
];

export default function MaterialsPage() {
  return (
    <main>
      <SiteHeader />
      <div className="page-shell inner-flow">
        <section className="inner-hero">
          <p className="eyebrow">Für deinen Unterricht</p>
          <h1>Materialien, die Lernen zum Erlebnis machen.</h1>
          <p>Entdecke fertige Escape Rooms, flexible Spiele und interaktive Lesespurgeschichten.</p>
          <nav className="jump-links" aria-label="Produktarten">
            {sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.title}</a>)}
          </nav>
        </section>

        {sections.map((section) => {
          const sectionProducts = products.filter((product) => product.category === section.category);
          return (
            <section className="catalog-section" id={section.id} key={section.id}>
              <h2>{section.title}</h2>
              <div className="catalog-grid">
                {sectionProducts.map((product) => <ProductCard product={product} key={product.title} />)}
              </div>
            </section>
          );
        })}
      </div>
      <SiteFooter />
    </main>
  );
}
