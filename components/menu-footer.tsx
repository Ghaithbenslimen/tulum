import { Phone, MapPin } from 'lucide-react'

const LAT = 36.83659657992125
const LNG = 11.095054432745828

export function MenuFooter() {
  const items = [
    { icon: Phone, label: '+216 26 402 402' },
    { icon: MapPin, label: 'Rue environnement, Kélibia 8090' },
  ]

  return (
    <footer className="mt-14 border-t border-white/10 pt-8">
      <ul className="flex flex-col items-center justify-center gap-5 text-sm text-foreground/90 sm:flex-row sm:gap-10">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Icon className="size-3.5" aria-hidden="true" />
            </span>
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <section className="mt-8" aria-label="Localisation du café">
        <h2 className="mb-3 text-center font-display text-xs font-medium uppercase tracking-[0.35em] text-gold">
          Nous trouver
        </h2>
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <iframe
            title="Emplacement de Tulum Plus sur la carte"
            src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`}
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale-[0.2]"
          />
        </div>
        <p className="mt-3 text-center text-sm">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            Ouvrir dans Google Maps
          </a>
        </p>
      </section>
    </footer>
  )
}
