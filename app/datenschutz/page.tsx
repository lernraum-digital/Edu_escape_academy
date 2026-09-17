import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-chrome';

export const metadata: Metadata = {
  title: 'Datenschutz | Edu Escape Academy',
};

export default function DatenschutzPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell legal-page">
        <p className="eyebrow">Edu Escape Academy</p>
        <h1>Datenschutzerklärung</h1>

        <h2>1. Verantwortliche</h2>
        <p>
          Melanie Tobias<br />
          Edu Escape Academy<br />
          Immelmannstraße 5<br />
          45309 Essen<br />
          E-Mail: <a href="mailto:escape_academy@tobias.eu">escape_academy@tobias.eu</a>
        </p>

        <h2>2. Bereitstellung der Website</h2>
        <p>
          Diese Website wird über GitHub Pages bereitgestellt. Beim Aufruf verarbeitet GitHub technisch erforderliche Daten, insbesondere die IP-Adresse, Datum und Uhrzeit des Aufrufs sowie Informationen zum verwendeten Browser. Die Verarbeitung dient der sicheren und zuverlässigen Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Weitere Informationen zur Datenverarbeitung durch GitHub findest du in der <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">Datenschutzerklärung von GitHub</a>.
        </p>

        <h2>3. Newsletter und Genially-Quickstart</h2>
        <p>
          Über den Button „Kostenlosen Guide entdecken“ gelangst du zu einem Anmeldeformular von ActiveCampaign. Die Anmeldung zum Newsletter und der Versand des Genially-Quickstarts erfolgen erst auf dieser externen Seite. Dabei werden die von dir eingegebenen Daten, in der Regel deine E-Mail-Adresse und gegebenenfalls dein Name, verarbeitet.
        </p>
        <p>
          Der Newsletter wird nur nach deiner Einwilligung versendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, zum Beispiel über den Abmeldelink in jeder E-Mail oder per Nachricht an die oben genannte E-Mail-Adresse.
        </p>
        <p>
          Für den Versand wird ActiveCampaign, LLC als Auftragsverarbeiter eingesetzt. Weitere Informationen findest du in der <a href="https://www.activecampaign.com/legal/privacy-policy" target="_blank" rel="noreferrer">Datenschutzerklärung von ActiveCampaign</a>.
        </p>

        <h2>4. Kontakt per E-Mail</h2>
        <p>
          Wenn du per E-Mail Kontakt aufnimmst, werden deine Angaben zur Bearbeitung deiner Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um eine vorvertragliche Anfrage geht, und im Übrigen Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2>5. Links zu externen Angeboten</h2>
        <p>
          Diese Website enthält Links zu Angeboten bei ThriveCart sowie zu weiteren externen Seiten. Beim Anklicken eines solchen Links verlässt du diese Website. Für die Datenverarbeitung auf der jeweiligen externen Seite ist deren Betreiber verantwortlich.
        </p>

        <h2>6. Keine Analyse- oder Werbetracking-Tools</h2>
        <p>
          Auf dieser Website werden derzeit keine Analyse- oder Werbetracking-Tools eingesetzt. Es werden keine Cookies zu Analyse- oder Marketingzwecken gesetzt.
        </p>

        <h2>7. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft über die zu deiner Person gespeicherten Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Soweit die Verarbeitung auf deiner Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist beispielsweise die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
        </p>

        <h2>8. Stand dieser Erklärung</h2>
        <p>Stand: September 2026</p>
      </section>
      <SiteFooter />
    </main>
  );
}
