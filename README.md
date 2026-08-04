# Aurora Automobile — Premium Showroom Website

Produktionsreife Next.js-Website für **Aurora Automobile GmbH** im Design
„Automotive Showroom / Performance Luxury / Night Drive". Alle
Unternehmensdaten (Adresse, Kontakt, Leistungen, Handelsregister etc.) wurden
vom Auftraggeber als **fiktive Demo-Daten** bereitgestellt — siehe Hinweis in
`src/lib/content/company.ts` und auf der Impressum-Seite.

---

## 1. Installation & Entwicklung

```bash
npm install
npm run dev        # Entwicklungsserver, http://localhost:3000
npm run lint        # ESLint (eslint-config-next, flat config)
npm run typecheck   # tsc --noEmit
npm run build        # Produktions-Build
npm run start        # Produktions-Server (nach build)
npm run format        # Prettier (inkl. Tailwind-Klassensortierung)
```

Node.js ≥ 20 wird vorausgesetzt.

Der Build wurde lokal verifiziert: `npm run lint`, `npm run typecheck` und
`npm run build` laufen fehlerfrei durch (Next.js 16, Turbopack).

---

## 2. Tech-Stack

| Bereich | Wahl |
|---|---|
| Framework | Next.js 16 (App Router, React 19, Server Components) |
| Sprache | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`-Tokens, keine `tailwind.config.js` nötig) |
| Motion | Framer Motion (scroll-reveals, Bild-Masken, respektiert `prefers-reduced-motion`) |
| Icons | lucide-react (Social-Icons sind eigene, reduzierte SVG-Glyphen — lucide führt seit v1 keine Marken-/Plattform-Logos mehr) |
| Formulare | React Hook Form + Zod |
| E-Mail-Versand | Resend-API via `fetch` (kein SDK, siehe Abschnitt 7) |
| Lint/Format | ESLint 9 (flat config) + Prettier + `prettier-plugin-tailwindcss` |

Bewusst **nicht** verwendet: Google Fonts / `next/font/google` (Build-Risiko
durch externe Font-Downloads in eingeschränkten Netzwerken vermieden — die
Seite nutzt einen hochwertigen System-Font-Stack ohne Ladezeit-/FOUT-Risiko).
Soll eine lizenzierte Marken-Schrift ergänzt werden, kann sie über
`next/font/local` in `src/app/globals.css` (`--font-sans`) eingebunden werden.

---

## 3. Projektstruktur

```
src/
  app/                    Next.js App Router — Seiten, Layouts, SEO-Routen
    fahrzeuge/ leistungen/ showroom/ kontakt/ probefahrt/
    impressum/ datenschutz/ api/contact/
    layout.tsx            Root-Layout, Metadata, Viewport-Sperre, Schema.org
    sitemap.ts robots.ts manifest.ts
    icon.tsx apple-icon.tsx opengraph-image.tsx twitter-image.tsx
  components/
    ui/                   Design-System (Button, Container, Section, Logo, MediaFrame, …)
    layout/                Navbar, MobileMenu, Footer
    sections/              Hero, BrandStatement, ServicesTeaser, ProcessSection, …
    vehicles/              VehicleCard, VehicleGrid, VehicleFilter
    forms/                 ContactForm, Formularfelder
    motion/                Reveal, ImageReveal (scroll-/mount-Animationen)
  lib/
    content/               company.ts, services.ts, vehicles.ts, images.ts, nav.ts, process.ts
    validation/            Zod-Schemas
    motion.ts schema.ts cn.ts
  hooks/                  useScrollLock, useFocusTrap
public/
  images/{hero,showroom,vehicles,team,og,logo}/   Bild-Zielordner (siehe Abschnitt 6)
```

---

## 4. Design-Tokens & Farbsystem

Definiert in `src/app/globals.css` über Tailwind v4 `@theme`. Zentrale Tokens:

- **Basisflächen** (`base-950` … `base-500`): tiefes Schwarz bis Graphit, für
  gestaffelte dunkle Abschnitte.
- **Ink** (`ink-50` … `ink-600`): Textfarben auf dunklem Grund, alle
  Kombinationen WCAG-AA-konform geprüft.
- **Accent** (`accent-300` … `accent-700`): „Aurora Gold" — bewusst an die
  Gold-Variante des bereitgestellten Logos angelehnt, sparsam für CTAs,
  aktive Navigation und Datenpunkte eingesetzt.
- **Warm** (`warm-100`, `warm-200`, `warm-ink`): heller Kontrastbereich für
  bewusste Ausnahmeflächen.
- **Line** (`line-400`, `line-500`): feine Trennlinien.

Motion-Tokens (`--ease-showroom`, `--ease-precise`) und Radius-/Tracking-
Tokens ergänzen das System. Alle Animationen laufen ausschließlich über
`transform`/`opacity`/`clip-path` und respektieren `prefers-reduced-motion`
(siehe `src/components/motion/`).

---

## 5. Mobile Viewport & Zoom-Sperre

`src/app/layout.tsx` exportiert die Next.js-Viewport-Konfiguration mit
`minimumScale/maximumScale: 1` und `userScalable: false`. Vertikales Scrollen
bleibt jederzeit uneingeschränkt:

- Kein `touch-action: none` auf `html`/`body`.
- `overflow: hidden` wird nur temporär über `body[data-scroll-locked]`
  gesetzt, während das mobile Menü offen ist (`useScrollLock`-Hook), und beim
  Schließen zuverlässig entfernt.
- Fokusmanagement (`useFocusTrap`) fängt Tab-Fokus im Menü, schließt per
  Escape und stellt den vorherigen Fokus wieder her.

---

## 6. Bild-Konfiguration — WICHTIG für den nächsten Schritt

Es liegen noch **keine Bilddateien im Repository**. Die Website ist bewusst
so gebaut, dass sie ohne sie bereits produktionsreif aussieht:
`src/components/ui/MediaFrame.tsx` prüft serverseitig (`fs.existsSync`), ob
eine Datei unter dem erwarteten Pfad liegt. Fehlt sie, erscheint ein
markentypischer, ruhiger Platzhalter (Gradient + Symbol) statt eines kaputten
Bildes. **Sobald eine Datei unter dem exakten Pfad in `public/` liegt, wird
sie automatisch verwendet — ohne Code-Änderung.**

Alle Bild-Slots sind zentral in `src/lib/content/images.ts` dokumentiert.
Empfohlenes Vorgehen: Bilddateien per GitHub „Add file" in die unten
genannten Zielpfade hochladen; das Einsetzen der jeweils passenden Aufnahme
aus dem im Chat gesichteten Bildmaterial in diese Slots erfolgt danach als
Folgeschritt.

### Zuordnung der im Chat gesichteten Motive zu den Ziel-Slots

| # | Motiv (Kurzbeschreibung) | Ziel-Pfad |
|---|---|---|
| Logo hell | Wortmarke schwarz auf weiß | `public/images/logo/aurora-logo-light.png` |
| Logo dunkel | Wortmarke gold auf schwarz | `public/images/logo/aurora-logo-dark.png` |
| Fahrzeug-Spotlight | Einzelfahrzeug auf beleuchteter Plattform, Nacht | `public/images/showroom/vehicle-spotlight.jpg` |
| Showroom außen (Tag) | Gebäude, Sonnenuntergang, 3 Fahrzeuge | `public/images/showroom/exterior-day.jpg` |
| Showroom außen (Nacht) | Fassade beleuchtet, Logo-Stele, Parkplatz | `public/images/showroom/exterior-night.jpg` |
| Showroom innen (Halle) | Mehrere Fahrzeuge, Lounge, Empfang | `public/images/showroom/interior-hall.jpg` |
| Fahrzeug Frontalansicht | LED-Scheinwerfer, Ausstellungsraum | `public/images/vehicles/front-view-showroom.jpg` |
| Interieur-Detail | Lenkrad, Dashboard, Cockpit | `public/images/vehicles/interior-detail.jpg` |
| Beratungsbereich | Schreibtisch, Lounge, Blick nach draußen | `public/images/showroom/consulting-lounge.jpg` |
| Empfangsbereich mit Logo-Wand | Empfangstheke, Fahrzeuge, Lounge | `public/images/showroom/reception-lounge.jpg` |
| Anlieferung | Fahrzeug wird vom Transporter abgeladen | `public/images/showroom/vehicle-delivery.jpg` |
| Werkstatt | Mechaniker, „SERVICE"-Schriftzug | `public/images/showroom/workshop-service.jpg` |
| Werkstatt-Übergabe | Schlüsselübergabe im Werkstattbereich | `public/images/showroom/workshop-handover.jpg` |
| Wartebereich | Lounge mit „Service & Care"-Bildschirm | `public/images/showroom/service-lounge.jpg` |
| Schlüsselübergabe | Verkäufer übergibt Schlüssel im Showroom | `public/images/showroom/handover-keys.jpg` |
| Handschlag/Abschluss | Übergabe von Unterlagen, Dämmerung | `public/images/showroom/handover-handshake.jpg` |

**Nicht verplant (Hinweis zur Prüfung):** Zwei der gesichteten Empfangsbereich-
Aufnahmen zeigen ein Fahrzeug mit einem Kühlergrill-Design, das stark an ein
reales Hersteller-Markendesign (BMW-Niere) erinnert. Diese beiden Motive
wurden bewusst **nicht** in die obige Zuordnung aufgenommen, um keine
ungeklärte Marken-/Designrechts-Ähnlichkeit zu übernehmen. Vor Verwendung
bitte prüfen oder durch eine Neugenerierung ohne Markenanlehnung ersetzen.

### Formatempfehlung

- Fahrzeug-/Showroom-Fotos: JPG, ~1920px lange Kante, sinnvoll komprimiert.
- Logos: PNG mit Transparenz.
- Next.js Image übernimmt automatisch AVIF/WebP-Auslieferung, responsive
  Größen und Lazy Loading (außer Hero, das `priority` gesetzt hat).

---

## 7. Formular-Konfiguration

Das Kontakt-/Probefahrt-Formular (`/kontakt`, `/probefahrt`) ist technisch
vollständig implementiert (Client-Validierung via Zod, Server-Route
`src/app/api/contact/route.ts`, Honeypot-Feld gegen Bots), aber **bewusst
deaktiviert**, solange kein E-Mail-Versand konfiguriert ist. Es wird niemals
eine Erfolgsmeldung ohne tatsächlichen Versand angezeigt — ohne Konfiguration
zeigt das Formular transparent Telefon-/E-Mail-Fallback an.

Aktivierung über Umgebungsvariablen (siehe `.env.example`):

```bash
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=noreply@aurora-automobile.de
CONTACT_TO_EMAIL=info@aurora-automobile.de
```

Alternative E-Mail-Provider lassen sich in `route.ts` anstelle des
Resend-`fetch`-Aufrufs einsetzen, ohne das Frontend anzupassen.

---

## 8. SEO

- Pro Seite eigene `Metadata` (Title, Description, `alternates.canonical`).
- `sitemap.ts` / `robots.ts` (App-Router-Dateikonvention).
- `manifest.ts` → `/manifest.webmanifest`.
- `icon.tsx` / `apple-icon.tsx` / `opengraph-image.tsx` / `twitter-image.tsx`
  generieren Favicon und Social-Preview-Bilder zur Laufzeit (`next/og`) —
  funktionieren unabhängig vom Bild-Upload aus Abschnitt 6.
- Schema.org `AutoDealer`-JSON-LD im Root-Layout (`src/lib/schema.ts`) mit
  bestätigter Adresse, Öffnungszeiten, `sameAs`-Social-Links und dem
  angegebenen Google-Bewertungsprofil.

---

## 9. Fahrzeugbestand — bewusst ohne erfundene Daten

Es liegen aktuell **keine strukturierten Einzelfahrzeugdaten** vor (nur die
bestätigte Gesamtzahl „180+ Fahrzeuge" und die Spezialisierungen). Gemäß
Vorgabe wurden **keine** Fahrzeuge, Preise, Laufleistungen oder
Verfügbarkeiten erfunden.

- `src/lib/content/vehicles.ts` enthält die vollständige `Vehicle`-Typstruktur
  und ein leeres `vehicles`-Array.
- `/fahrzeuge` zeigt einen ehrlichen `EmptyState` mit Verweis auf die
  telefonische/persönliche Beratung, statt eine leere oder irreführende Liste.
- `VehicleCard`, `VehicleGrid`, `VehicleFilter` sind vollständig
  implementiert und funktionieren automatisch, sobald `vehicles` befüllt wird
  (z. B. durch Anbindung an ein DMS/CRM oder eine CSV-/API-Quelle).

---

## 10. Deployment (Vercel)

1. Repository in Vercel importieren, Framework „Next.js" wird automatisch
   erkannt.
2. Umgebungsvariablen aus Abschnitt 7 in den Vercel-Projekteinstellungen
   hinterlegen (optional, für aktiven Formularversand).
3. Produktions-Domain setzen und `siteUrl` in
   `src/lib/content/company.ts` entsprechend anpassen (aktuell
   `https://www.aurora-automobile.de`).

---

## 11. Launch-Checkliste

- [ ] Finale Domain geprüft und `siteUrl` (`src/lib/content/company.ts`)
      aktualisiert
- [ ] Canonical-URLs geprüft (automatisch aus `siteUrl` abgeleitet)
- [ ] Social-Media-URLs verifiziert (`company.socials` — aktuell aus
      Handles abgeleitet, nicht einzeln bestätigt)
- [ ] Bilddateien gemäß Abschnitt 6 hochgeladen und geprüft (inkl.
      Markenrechts-Hinweis zu den zwei ausgeschlossenen Motiven)
- [ ] Bildrechte an allen verwendeten Aufnahmen bestätigt
- [ ] Echte Fahrzeugdaten angebunden (Abschnitt 9) oder Bestandsseite bewusst
      im aktuellen „Beratung statt Online-Bestand"-Zustand belassen
- [ ] Impressum-Angaben (Handelsregister, USt-ID) durch echte Daten ersetzt
      und juristisch geprüft
- [ ] Datenschutzerklärung juristisch geprüft, insbesondere Abschnitt
      „Hosting" (konkreten Anbieter ergänzen)
- [ ] Formularversand konfiguriert (Abschnitt 7) und Spam-Schutz
      (Honeypot ist implementiert; optional zusätzlich Rate-Limiting auf
      Infrastrukturebene ergänzen)
- [ ] OpenGraph-/Twitter-Vorschau nach Bild-Upload erneut geprüft
- [ ] Favicon nach Logo-Upload erneut geprüft (aktuell code-generiertes
      Monogramm)
- [ ] Sitemap/robots.txt nach Domain-Wechsel geprüft
- [ ] Mobile Darstellung, Zoom-Sperre und vertikales Scrollen auf echten
      Geräten geprüft
- [ ] Kontaktlinks (`tel:`/`mailto:`) geprüft
- [ ] Tracking/Analytics erst nach rechtlicher Freigabe und
      Consent-Management aktivieren (aktuell nicht integriert)
