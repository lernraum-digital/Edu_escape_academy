import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata: Metadata = {
  title: 'Impressum | Edu Escape Academy',
};

export default function ImpressumPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell legal-page">
        <p className="eyebrow">Edu Escape Academy</p>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          Melanie Tobias<br />
          Edu Escape Academy<br />
          Immelmannstraße 5<br />
          45309 Essen
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:escape_academy@tobias.eu">escape_academy@tobias.eu</a>
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Melanie Tobias<br />
          Immelmannstraße 5<br />
          45309 Essen
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
