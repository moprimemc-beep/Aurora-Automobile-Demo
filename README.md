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
| i18n | next-intl (Englisch Standard, Deutsch unter `/de`, siehe Abschnitt 4) |
| Styling | Tailwind CSS v4 (CSS-first `@theme`-Tokens, keine `tailwind.config.js` nötig) |
| Motion | Framer Motion (scroll-reveals, Bild-Masken, respektiert `prefers-reduced-motion`) |
| Icons | lucide-react (Social-Icons sind eigene, reduzierte SVG-Glyphen — lucide führt seit v1 keine Marken-/Plattform-Logos mehr) |
| Formulare | React Hook Form + Zod |
| E-Mail-Versand | Resend-API via `fetch` (kein SDK, siehe Abschnitt 8) |
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
  app/
    [locale]/               Lokalisierte Seiten (params.locale = "en" | "de")
      fahrzeuge/ leistungen/ showroom/ kontakt/ probefahrt/
      impressum/ datenschutz/ not-found.tsx
      layout.tsx            Locale-Root-Layout, Metadata, Viewport-Sperre, Schema.org
      opengraph-image.tsx twitter-image.tsx   (lokalisierter Text)
    api/contact/            Formular-API-Route (nicht lokalisiert)
    sitemap.ts robots.ts manifest.ts          (nicht lokalisiert, listen beide Sprachen)
    icon.tsx apple-icon.tsx                   (Favicon, sprachunabhängig)
    globals.css
  i18n/
    routing.ts             Locales, Default-Locale, Präfix-Strategie
    navigation.ts           Locale-bewusste Link/usePathname/useRouter-Wrapper
    request.ts               next-intl Request-Konfiguration
  messages/
    en.json de.json         Vollständige UI-Übersetzungskataloge
  proxy.ts                  next-intl Middleware (Next.js "Proxy"-Konvention)
  components/
    ui/                   Design-System (Button, Container, Section, Logo, MediaFrame, …)
    layout/                Navbar, MobileMenu, Footer, LanguageSwitcher
    sections/              Hero, BrandStatement, ServicesTeaser, ProcessSection, …
    vehicles/              VehicleCard, VehicleGrid, VehicleFilter
    forms/                 ContactForm, Formularfelder
    motion/                Reveal, ImageReveal (scroll-/mount-Animationen)
  lib/
    content/               company.ts, services.ts, vehicles.ts, images.ts, nav.ts, process.ts
                            (zweisprachige Inhalte über getCompanyText(locale) /
                            getServiceCategories(locale) / getProcessSteps(locale))
    validation/            Zod-Schemas (locale-neutrale Enum-Keys, übersetzte Fehlermeldungen)
    seo.ts                 hreflang-/canonical-Helfer
    motion.ts schema.ts cn.ts
  hooks/                  useScrollLock, useFocusTrap
public/
  images/{hero,showroom,vehicles,team,og,logo}/   Bild-Zielordner (siehe Abschnitt 7)
```

---

## 4. Mehrsprachigkeit (i18n)

Die Website ist vollständig zweisprachig (Englisch/Deutsch), umgesetzt mit
[next-intl](https://next-intl.dev).

- **Englisch ist die Standardsprache.** Beim ersten Aufruf von
  `aurora-automobile.de` (ohne Sprachpräfix) wird die englische Version
  ausgeliefert.
- **Deutsch liegt unter `/de`** (z. B. `/de/fahrzeuge`, `/de/kontakt`) —
  dieselbe URL-Struktur wie Englisch, nur mit `/de`-Präfix
  (`localePrefix: "as-needed"`, siehe `src/i18n/routing.ts`).
- **Sprach-Switch:** In der Desktop-Navigation immer sichtbar rechts neben
  dem CTA-Button, im mobilen Menü zusätzlich oben im Overlay — nie hinter
  einem Untermenü versteckt, ein Klick/Tap genügt (`LanguageSwitcher.tsx`).
  Der Switch wechselt die Sprache auf der aktuell geöffneten Seite, nicht
  nur auf der Startseite.
- **Rückkehrende Besucher:** Nach einem manuellen Sprachwechsel merkt sich
  next-intl die Wahl per Cookie — ein späterer Aufruf der Startseite ohne
  Präfix zeigt dann automatisch wieder die zuletzt gewählte Sprache. Für
  neue Besucher ohne Cookie bleibt Englisch der Standard.
- **Übersetzungsquellen:**
  - UI-Mikrotexte (Navigation, Buttons, Formular-Labels, Rechtstexte) in
    `src/messages/en.json` / `de.json`.
  - Geschäftsinhalte mit Datenstruktur (Leistungskatalog, Prozessschritte,
    Unternehmensbeschreibung, Werte, Gründe, Öffnungszeiten) in
    `src/lib/content/*.ts` über `getServiceCategories(locale)`,
    `getProcessSteps(locale)` und `getCompanyText(locale)`.
  - Bild-Alt-Texte in `src/lib/content/images.ts` (`imageAlt(key, locale)`).
- **SEO:** Jede Seite liefert `alternates.canonical` und
  `alternates.languages` (inkl. `x-default`) für korrektes hreflang
  (`src/lib/seo.ts`). Die Sitemap listet beide Sprachversionen jeder Seite.
- Rechtlich relevante Inhalte (Impressum, Datenschutz) liegen vollständig
  und unabhängig in beiden Sprachen vor, nicht maschinell übersetzt.

## 5. Design-Tokens & Farbsystem

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

## 6. Mobile Viewport & Zoom-Sperre

`src/app/[locale]/layout.tsx` exportiert die Next.js-Viewport-Konfiguration mit
`minimumScale/maximumScale: 1` und `userScalable: false`. Vertikales Scrollen
bleibt jederzeit uneingeschränkt:

- Kein `touch-action: none` auf `html`/`body`.
- `overflow: hidden` wird nur temporär über `body[data-scroll-locked]`
  gesetzt, während das mobile Menü offen ist (`useScrollLock`-Hook), und beim
  Schließen zuverlässig entfernt.
- Fokusmanagement (`useFocusTrap`) fängt Tab-Fokus im Menü, schließt per
  Escape und stellt den vorherigen Fokus wieder her.

---

## 7. Bild-Konfiguration

`src/components/ui/MediaFrame.tsx` prüft serverseitig (`fs.existsSync`), ob
eine Datei unter dem erwarteten Pfad liegt. Fehlt sie, erscheint ein
markentypischer, ruhiger Platzhalter (Gradient + Symbol) statt eines kaputten
Bildes. **Sobald eine Datei unter dem exakten Pfad in `public/` liegt, wird
sie automatisch verwendet — ohne Code-Änderung.** Alle Bild-Slots sind
zentral in `src/lib/content/images.ts` dokumentiert.

### Status der Bild-Slots

Alle 16 Motive sind eingebunden (als komprimierte JPEGs, optimiert von
~3 MB auf ~150–300 KB pro Bild):

| Slot | Ziel-Pfad | Status |
|---|---|---|
| Logo hell | `public/images/logo/aurora-logo-light.png` | ✅ eingebunden |
| Logo dunkel | `public/images/logo/aurora-logo-dark.png` | ✅ eingebunden |
| Fahrzeug-Spotlight | `public/images/showroom/vehicle-spotlight.jpg` | ✅ eingebunden |
| Showroom außen (Tag) | `public/images/showroom/exterior-day.jpg` | ✅ eingebunden |
| Showroom außen (Nacht) | `public/images/showroom/exterior-night.jpg` | ✅ eingebunden |
| Showroom innen (Halle) | `public/images/showroom/interior-hall.jpg` | ✅ eingebunden |
| Fahrzeug Frontalansicht | `public/images/vehicles/front-view-showroom.jpg` | ✅ eingebunden |
| Interieur-Detail | `public/images/vehicles/interior-detail.jpg` | ✅ eingebunden |
| Beratungsbereich | `public/images/showroom/consulting-lounge.jpg` | ✅ eingebunden |
| Anlieferung | `public/images/showroom/vehicle-delivery.jpg` | ✅ eingebunden |
| Werkstatt | `public/images/showroom/workshop-service.jpg` | ✅ eingebunden |
| Wartebereich | `public/images/showroom/service-lounge.jpg` | ✅ eingebunden |
| Handschlag/Abschluss | `public/images/showroom/handover-handshake.jpg` | ✅ eingebunden |
| Werkstatt-Übergabe | `public/images/showroom/workshop-handover.jpg` | ✅ eingebunden |
| Schlüsselübergabe (Showroom) | `public/images/showroom/handover-keys.jpg` | ✅ eingebunden |
| Empfangsbereich mit Logo-Wand | `public/images/showroom/reception-lounge.jpg` | ✅ eingebunden — siehe Hinweis unten |

**Hinweis (Auftraggeber-Entscheidung):** Die für „Empfangsbereich mit
Logo-Wand" verfügbaren Aufnahmen zeigen ein Fahrzeug mit einem
Kühlergrill-Design, das an ein reales Hersteller-Markendesign (BMW-Niere)
erinnert — auf ausdrücklichen Wunsch des Auftraggebers wurde die Aufnahme
mit der Person im Vordergrund trotzdem eingebunden (der gewählte
Bildausschnitt zeigt primär die Lounge-Szene, das Fahrzeug ist nur am
Bildrand sichtbar). Vor einem echten Launch dennoch markenrechtlich prüfen
oder bei Bedarf durch eine Aufnahme ohne Markenanlehnung ersetzen.

### Formatempfehlung

- Fahrzeug-/Showroom-Fotos: JPG, ~1920px lange Kante, sinnvoll komprimiert.
- Logos: PNG mit Transparenz.
- Next.js Image übernimmt automatisch AVIF/WebP-Auslieferung, responsive
  Größen und Lazy Loading (außer Hero, das `priority` gesetzt hat).

---

## 8. Formular-Konfiguration

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

## 9. SEO

- Pro Seite eigene `Metadata` (Title, Description, `alternates.canonical`).
- `sitemap.ts` / `robots.ts` (App-Router-Dateikonvention).
- `manifest.ts` → `/manifest.webmanifest`.
- `icon.tsx` / `apple-icon.tsx` / `opengraph-image.tsx` / `twitter-image.tsx`
  generieren Favicon und Social-Preview-Bilder zur Laufzeit (`next/og`) —
  funktionieren unabhängig vom Bild-Upload aus Abschnitt 7.
- Schema.org `AutoDealer`-JSON-LD im Root-Layout (`src/lib/schema.ts`) mit
  bestätigter Adresse, Öffnungszeiten, `sameAs`-Social-Links und dem
  angegebenen Google-Bewertungsprofil.

---

## 10. Fahrzeugbestand — bewusst ohne erfundene Daten

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

## 11. Deployment (Vercel)

1. Repository in Vercel importieren, Framework „Next.js" wird automatisch
   erkannt.
2. Umgebungsvariablen aus Abschnitt 8 in den Vercel-Projekteinstellungen
   hinterlegen (optional, für aktiven Formularversand).
3. Produktions-Domain setzen und `siteUrl` in
   `src/lib/content/company.ts` entsprechend anpassen (aktuell
   `https://www.aurora-automobile.de`).

---

## 12. Launch-Checkliste

- [ ] Finale Domain geprüft und `siteUrl` (`src/lib/content/company.ts`)
      aktualisiert
- [ ] Canonical-URLs geprüft (automatisch aus `siteUrl` abgeleitet)
- [ ] Social-Media-URLs verifiziert (`company.socials` — aktuell aus
      Handles abgeleitet, nicht einzeln bestätigt)
- [x] Bilddateien vollständig eingebunden (16/16, siehe Abschnitt 7)
- [ ] Bildrechte an allen verwendeten Aufnahmen bestätigt — insbesondere
      `reception-lounge.jpg` markenrechtlich prüfen (Kühlergrill-Ähnlichkeit,
      siehe Hinweis in Abschnitt 7)
- [ ] Echte Fahrzeugdaten angebunden (Abschnitt 10) oder Bestandsseite bewusst
      im aktuellen „Beratung statt Online-Bestand"-Zustand belassen
- [ ] Impressum-Angaben (Handelsregister, USt-ID) durch echte Daten ersetzt
      und juristisch geprüft
- [ ] Datenschutzerklärung juristisch geprüft, insbesondere Abschnitt
      „Hosting" (konkreten Anbieter ergänzen)
- [ ] Formularversand konfiguriert (Abschnitt 8) und Spam-Schutz
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
- [x] Englisch/Deutsch vollständig geprüft (Navigation, Formulare, Impressum,
      Datenschutz, OpenGraph-Bilder, hreflang) — siehe Abschnitt 4
