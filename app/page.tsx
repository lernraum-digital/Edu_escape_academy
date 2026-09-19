import { featuredProducts } from './content';
import { SiteFooter, SiteHeader } from './site-chrome';
import { sitePath } from './paths';

const categories = [
  { title: 'Escape Rooms', image: './assets/categories/escape-rooms-elegant.png', href: sitePath('/unterrichtsmaterialien#escape-rooms') },
  { title: 'Spiele-Sets', image: './assets/categories/spiele-elegant.png', href: sitePath('/unterrichtsmaterialien#spiele') },
  { title: 'Interaktive Leseförderung', image: './assets/categories/lesespuren-elegant.png', href: sitePath('/unterrichtsmaterialien#lesespuren') },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <div id="top" className="page-shell page-flow">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Edu Escape Academy</p>
          <h1 id="hero-title">Unterricht, der neugierig macht.</h1>
          <p className="hero-copy">Digitale Escape Rooms, Spiele und Lesespurgeschichten für deinen Unterricht. Workshops und Vorlagen für deine eigenen interaktiven Ideen.</p>
          <div className="button-row">
            <a className="button button-primary" href="#materialien">Material entdecken <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="#selbst-gestalten">Selbst gestalten <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="section" aria-labelledby="aktuelles-title">
          <h2 id="aktuelles-title">Aktuelles</h2>
          <div className="offer-grid">
            {featuredProducts.map((offer) => (
              <article className="offer-card" key={offer.title}>
                <div className="offer-image-wrap">
                  <picture>
                    {offer.mobileImage && <source media="(max-width: 560px)" srcSet={offer.mobileImage} />}
                    <img src={offer.image} alt="" />
                  </picture>
                  <span className="badge">{offer.status ?? 'Aktuell'}</span>
                </div>
                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  {offer.level && <p className="offer-level">{offer.level}</p>}
                  {offer.status === 'Halloween' ? <a className="text-link" href={sitePath('/unterrichtsmaterialien#escape-rooms')}>Mehr erfahren <span aria-hidden="true">→</span></a> : <p className="status">{offer.status === 'Demnächst' ? 'Bald verfügbar' : offer.status}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="materialien" className="section anchor-offset" aria-labelledby="material-title">
          <h2 id="material-title">Für deinen Unterricht</h2>
          <div className="category-grid">
            {categories.map((category) => (
              <a className="category-card" href={category.href} key={category.title}>
                <div className="category-image"><img src={category.image} alt="" /></div>
                <div className="category-label"><h3>{category.title}</h3><span aria-hidden="true">→</span></div>
              </a>
            ))}
          </div>
        </section>

        <section id="selbst-gestalten" className="creator-band anchor-offset" aria-labelledby="creator-title">
          <div>
            <h2 id="creator-title">Deine Ideen. Dein Lernerlebnis.</h2>
            <p>Gestalte mit Genially eigene interaktive Materialien – mit Workshops und Vorlagen zum Befüllen.</p>
          </div>
          <div className="creator-links">
            <a className="button button-primary" href={sitePath('/selbst-gestalten#workshops')}>Workshops entdecken →</a>
            <a className="button button-secondary" href={sitePath('/selbst-gestalten#vorlagen')}>Vorlagen entdecken →</a>
          </div>
        </section>

        <section id="kostenlos" className="feature anchor-offset" aria-labelledby="freebie-title">
          <div className="feature-image quickstart-image"><img src="./assets/products/quickstart.png" alt="Cover: Dein Genially Quickstart" /></div>
          <div className="feature-copy">
            <p className="eyebrow">Kostenlos für dich</p>
            <h2 id="freebie-title">Dein Genially-Quickstart</h2>
            <p>Drei Superkräfte für interaktive Lernmaterialien.</p>
            <a className="button button-primary" href="https://eduescapeacademy.activehosted.com/f/12" target="_blank" rel="noreferrer">Kostenlosen Guide entdecken</a>
          </div>
        </section>

        <section className="about-strip" aria-labelledby="about-title">
          <img src="./assets/portrait.png" alt="Melanie von Edu Escape Academy" />
          <div>
            <h2 id="about-title">Hi, ich bin Melanie.</h2>
            <p>Ich entwickle digitale Lernabenteuer und unterstütze Lehrkräfte dabei, eigene interaktive Materialien zu gestalten.</p>
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
