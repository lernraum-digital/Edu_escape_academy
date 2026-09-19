export type Product = {
  title: string;
  description: string;
  image: string;
  category: 'escape' | 'spiele' | 'lesespuren' | 'vorlagen' | 'workshops';
  status?: string;
  level?: string;
  featured?: boolean;
  shopUrl?: string;
};

// Alle wechselnden Angebote liegen hier an einer Stelle. Shoplinks werden ergänzt,
// sobald die endgültigen Zielseiten gesammelt und geprüft sind.
export const products: Product[] = [
  { title: 'Fips und das große Halloween-Chaos', description: 'Halloween-Rätselspaß für jüngere Klassen', level: 'Klassen 3–6', image: './assets/products/fips.png', category: 'escape', status: 'Demnächst', featured: true },
  { title: 'Der Candy-Fluch und die Rache der Gräfin Bitterzahn', description: 'Kniffliger Halloween-Escape-Room mit Logikrätseln', level: 'Klassen 6–13', image: './assets/products/candy-fluch.png', category: 'escape', status: 'Halloween', featured: true, shopUrl: 'https://eduescapeacademy.thrivecart.com/candy-fluch/?ref=landingpage' },
  { title: 'Das Geheimnis der Wörterinsel', description: 'Escape Room zu Rechtschreibstrategien für die Grundschule', level: 'Klassen 2–5', image: './assets/products/woerterinsel.png', category: 'escape', status: 'Bald einzeln erhältlich', shopUrl: 'https://eduescapeacademy.thrivecart.com/geheimnis-woerterinsel/' },
  { title: 'Mission Alpha – Special Agent Training', description: 'Rätsel-Escape-Room für Vertretungsstunden', level: 'Klassen 6–13', image: './assets/products/mission-alpha.png', category: 'escape', shopUrl: 'https://eduescapeacademy.thrivecart.com/mission-alpha/?ref=landingpage' },
  { title: 'Der Fluch Interpunctum', description: 'Escape Room rund um Zeichensetzung', level: 'Klassen 6/7–13', image: './assets/products/interpunctum.png', category: 'escape' },
  { title: 'Mission Metapher', description: 'Stilmittel und Lyrik als spannendes Abenteuer', level: 'Klassen 7–13', image: './assets/products/mission-metapher.png', category: 'escape', shopUrl: 'https://eduescapeacademy.thrivecart.com/escape-room-mission-metapher/?ref=landingpage' },
  { title: 'Operation LinguaBot', description: 'EduBreakout rund um Wortarten', level: 'Klassen 6–13', image: './assets/products/linguabot.png', category: 'escape', shopUrl: 'https://eduescapeacademy.thrivecart.com/escape-room-linguabot/?ref=landingpage' },
  { title: 'Santas Schlittenherz – Rettung in letzter Minute', description: 'Ein weihnachtlicher Escape Room', level: 'Klassen 5–13', image: './assets/products/schlittenherz.png', category: 'escape', status: 'Wird vor der Saison geprüft', shopUrl: 'https://eduescapeacademy.thrivecart.com/escape-room-santas-schlittenherz/?ref=landingpage' },
  { title: 'Ready to Play', description: 'Das flexible Spiele-Toolkit für Unterricht und Vertretung', level: 'Klassen 5–13', image: './assets/products/ready-to-play.png', category: 'spiele', shopUrl: 'https://eduescapeacademy.thrivecart.com/ready-to-play/?ref=landingpage' },
  { title: 'Ready to Play – Junior Edition', description: 'Das große Spieleset in der Junior-Version', level: 'Klassen 2–6', image: './assets/products/ready-to-play-junior.png', category: 'spiele', shopUrl: 'https://eduescapeacademy.thrivecart.com/ready-to-play-junioredition/?ref=landingpage' },
  { title: 'Mitternacht in Blackwood Manor', description: 'Eine kriminelle Lesespurgeschichte', level: 'Klassen 6/7–13', image: './assets/products/blackwood-1.jpg', category: 'lesespuren', shopUrl: 'https://eduescapeacademy.thrivecart.com/mitternacht-in-blackwood-manor/?ref=landingpage' },
  { title: 'Blackwood Manor 2 – Spiel mit dem Leben', description: 'Eigenständig spielbare Geschichte im Blackwood-Setting', level: 'Klassen 6/7–13', image: './assets/products/blackwood-2.png', category: 'lesespuren', shopUrl: 'https://eduescapeacademy.thrivecart.com/blackwood-zwei/?ref=landingpage' },
  { title: 'Die Blackwood-Abenteuer', description: 'Beide Lesespurgeschichten im Bundle', level: 'Klassen 6/7–13', image: './assets/products/blackwood-bundle.png', category: 'lesespuren', shopUrl: 'https://eduescapeacademy.thrivecart.com/blackwood-collection/?ref=landingpage' },
  { title: 'Die verschwundene Maske von Akehn', description: 'Vorlage mit fertiger Spielmechanik für eigene Unterrichtsinhalte', image: './assets/products/maske-akehn.png', category: 'vorlagen', shopUrl: 'https://eduescapeacademy.thrivecart.com/verschwundene-maske/?ref=landingpage' },
  { title: 'Genially-Grundlagen-Workshop: Dein Adventskalender', description: 'Genially kennenlernen und einen eigenen digitalen Adventskalender gestalten', image: './assets/products/adventskalender.png', category: 'workshops', status: 'Demnächst', featured: true },
];

export const featuredProducts = products.filter((product) => product.featured);
