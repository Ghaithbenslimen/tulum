'use client'

import { useMemo, useState } from 'react'
import { ArrowDown, Coffee, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react'

type Item = [string, number, string?]
type MenuGroup = {
  title: string
  image: string
  items: Item[]
}
type Section = {
  id: string
  title: string
  items: Item[]
}

const imageFor = (id: string) => {
  const imageMap: Record<string, string> = {
    // Category images
    'petit-dejeuner': '/tulum/brand/petitdej.jpg',
    coffee: '/tulum/brand/cafe.jpg',
    boissons: '/tulum/brand/boissons.jpg',
    'fast-food': '/tulum/brand/fastfood.webp',
    plats: '/tulum/brand/plats.avif',
    desserts: '/tulum/brand/desert.jpg',

    // Subgroup images for Café
    macchiato: '/tulum/brand/macchiato.webp',
    frappuccino: '/tulum/brand/frappuccino.avif',

    // Subgroup images for Boissons
    smoothie: '/tulum/brand/smoothie.jpg',
    milkshake: '/tulum/brand/milkshake.jpg',
    cocktail: '/tulum/brand/cocktail.avif',
    mojito: '/tulum/brand/mojito.avif',
    ice: '/tulum/brand/icetea.avif',
    'hot-chocolate': '/tulum/brand/hot-chocolate.jpg',
    tea: '/tulum/brand/tea.avif',
    juice: '/tulum/brand/juice.avif',
    'cold-drinks': '/tulum/brand/cold-drinks.jpg',

    // Subgroup images for Plats
    ojja: '/tulum/brand/ojja.webp',
    pasta: '/tulum/brand/pasta.avif',
    salad: '/tulum/brand/salad.webp',
    omelette: '/tulum/brand/omelette.jpg',
    'savory-crepe': '/tulum/brand/savory-crepe.jpg',

    // Subgroup images for Desserts
    'sweet-crepe': '/tulum/brand/sweet-crepe.webp',
    waffle: '/tulum/brand/waffle.jpg',
    chicha: '/tulum/brand/chicha.jpg',

    // Petit Déjeuner subgroup
    breakfast: '/tulum/brand/breakfast.jpg',
    FIRST: '/tulum/brand/tulum.jpg',
    SECOND: '/tulum/brand/TULUM2,.jpg',
  }

  return imageMap[id] || '/tulum/brand/default.webp'
}

const subgroupConfig: Record<
  string,
  { title: string; image: string; match: (name: string) => boolean }[]
> = {
  cafe: [
    {
      title: 'Express',
      image: 'coffee',
      match: (name) =>
        !name.toLowerCase().includes('macchiato') &&
        !name.toLowerCase().includes('frappuccino'),
    },
    {
      title: 'Macchiato',
      image: 'macchiato',
      match: (name) =>
        name.toLowerCase().includes('macchiato'),
    },
    {
      title: 'Frappuccino',
      image: 'frappuccino',
      match: (name) =>
        name.toLowerCase().includes('frappuccino'),
    },
  ],

  boissons: [
    {
      title: 'Smoothie',
      image: 'smoothie',
      match: (name) =>
        name.toLowerCase().includes('smoothie'),
    },
    {
      title: 'Milkshake',
      image: 'milkshake',
      match: (name) =>
        name.toLowerCase().includes('milkshake'),
    },
    {
      title: 'Cocktail',
      image: 'cocktail',
      match: (name) =>
        name.toLowerCase().includes('cocktail'),
    },
    {
      title: 'Mojito',
      image: 'mojito',
      match: (name) =>
        name.toLowerCase().includes('mojito'),
    },
    {
      title: 'Ice',
      image: 'ice',
      match: (name) =>
        name.toLowerCase().startsWith('ice '),
    },
    {
      title: 'Hot Chocolat',
      image: 'hot-chocolate',
      match: (name) =>
        name.toLowerCase().startsWith('hot '),
    },
    {
      title: 'Thé & Ice Tea',
      image: 'tea',
      match: (name) =>
        name.toLowerCase().includes('thé') ||
        name.toLowerCase().includes('ice tea'),
    },
    {
      title: 'Jus Frais',
      image: 'juice',
      match: (name) =>
        [
          'orange',
          'citronnade',
          'kiwi',
          'fraise',
          'noisette',
          'lait de poule',
        ].some((word) =>
          name.toLowerCase().startsWith(word)
        ),
    },
    {
      title: 'Boissons Fraîches',
      image: 'cold-drinks',
      match: () => true,
    },
  ],

  'fast-food': [
    {
      title: 'Fast Food',
      image: 'fast-food',
      match: () => true,
    },
  ],

  plats: [
    {
      title: 'Escalope & Poisson',
      image: 'plats',
      match: (name) =>
        /escalope|cordon|daurade/i.test(name),
    },
    {
      title: 'Ojja',
      image: 'ojja',
      match: (name) =>
        name.toLowerCase().startsWith('ojja'),
    },
    {
      title: 'Pâtes',
      image: 'pasta',
      match: (name) =>
        name.toLowerCase().startsWith('spaghetti'),
    },
    {
      title: 'Salades',
      image: 'salad',
      match: (name) =>
        name.toLowerCase().startsWith('salade'),
    },
    {
      title: 'Omelette',
      image: 'omelette',
      match: (name) =>
        name.toLowerCase().startsWith('omelette'),
    },
    {
      title: 'Crêpes & Gaufres Salées',
      image: 'savory-crepe',
      match: () => true,
    },
  ],

  desserts: [
    {
      title: 'Crêpes Sucrées',
      image: 'sweet-crepe',
      match: (name) =>
        name.toLowerCase().startsWith('crêpe'),
    },
    {
      title: 'Gaufres Sucrées',
      image: 'waffle',
      match: (name) =>
        name.toLowerCase().startsWith('gaufre'),
    },
    {
      title: 'Glaces & Gâteaux',
      image: 'desserts',
      match: (name) =>
        !name.toLowerCase().startsWith('chicha'),
    },
    {
      title: 'Chicha',
      image: 'chicha',
      match: () => true,
    },
  ],
}

function groupItems(section: Section): MenuGroup[] {
  if (section.id === 'petit-dejeuner') {
    return [
      {
        title: 'Formules',
        image: 'breakfast',
        items: section.items,
      },
    ]
  }

  const config =
    subgroupConfig[section.id] ?? [
      {
        title: section.title,
        image: section.id,
        match: () => true,
      },
    ]

  const remaining = [...section.items]

  return config
    .map((group) => {
      const items = remaining.filter((item) =>
        group.match(item[0])
      )

      items.forEach((item) => {
        const index = remaining.indexOf(item)
        if (index !== -1) {
          remaining.splice(index, 1)
        }
      })

      return {
        title: group.title,
        image: group.image,
        items,
      }
    })
    .filter((group) => group.items.length > 0)
}

const categories = [
  [
    'petit-dejeuner',
    'Petit Déjeuner',
    'Pour bien commencer la journée',
  ],
  ['cafe', 'Café', 'Torréfaction maison'],
  ['boissons', 'Boissons', 'Fraîches et gourmandes'],
  ['fast-food', 'Fast Food', 'Tout à 10 DT'],
  ['plats', 'Plats', 'Cuisine du restaurant'],
  ['desserts', 'Desserts', 'Douceurs sucrées'],
] as const

const sections: Section[] = [
  {
    id: 'petit-dejeuner',
    title: 'Petit Déjeuner',
    items: [
      [
        'Matin Vitale',
        12,
        "Café au choix, bouteille d'eau 0.5L, croissant, jus, salade de fruits",
      ],
      [
        "Matin d'Or",
        25,
        'Café au choix, eau 0.5L, croissant, cake, fondant chocolat, omelette, mini crêpe ou gaufre, escalope panné, salade, riz, plat tunisien, fromage, jambon, fruits secs',
      ],
      [
        'Brunch Tulum',
        45,
        '2 cafés, 2 eaux, 2 jus, viennoiseries, omelettes, escalope, salade, riz, fromage, jambon, plat tunisien, fruits de saison, crêpe ou gaufre, pâté, chamia, chocolat, beurre et confiture',
      ],
    ],
  },

  {
    id: 'cafe',
    title: 'Café',
    items: [
      ['Express', 3.5],
      ['Coffee American', 4],
      ['Capucin', 4],
      ['Café Crème', 4.5],
      ['Café Turc', 4.5],
      ['Cappuccino Chantilly', 7.5],
      ['Nocciola (Noisette)', 8],
      ['Pistachio (Pistache)', 8.5],
      ['Macchiato', 10],
      ['Macchiato Caramel', 10],
      ['Macchiato Vanille', 10],
      ['Macchiato Noisette', 10],
      ['Macchiato Miel', 12],
      ['Macchiato Pistache', 12],
      ['Frappuccino', 6],
      ['Frappuccino Caramel', 7.5],
      ['Frappuccino Noisette', 7.5],
      ['Frappuccino Vanille', 7.5],
      ['Frappuccino Oréo', 9.5],
      ['Frappuccino Nutella', 9.5],
    ],
  },

  {
    id: 'boissons',
    title: 'Boissons',
    items: [
      ['Smoothie Fruits Rouges', 9.5],
      ['Smoothie Banane Kiwi', 9.5],
      ['Smoothie Fraise Banane', 9.5],
      ['Smoothie Hawaii (Blue)', 9.5],
      ['Smoothie Kiwi', 9],
      ['Smoothie Pêche', 9],
      ['Smoothie Pinacolada (ananas - noix de coco)', 9],
      ['Milkshake Chocolat', 8.5],
      ['Milkshake Chocolat Banane', 9.5],
      ['Milkshake Nutella', 9.5],
      ['Milkshake Oréo', 10],
      ['Milkshake Snickers', 10],
      ['Milkshake Kinder Bueno', 11],
      ['Milkshake Nutella Banane', 11.5],
      ['Milkshake Pistache', 12],
      [
        'Cocktail Big Tulum',
        16,
        'Fruits frais, fruits secs, crème chantilly, Ferrero ou Kinder Bueno',
      ],
      ['Cocktail Provençal', 12, 'Pêche, banane, fruits des bois'],
      ['Cocktail Exotique', 12, 'Pêche, ananas, kiwi'],
      ['Cocktail Fruit', 10],
      ['Mojito', 7],
      ['Mojito Apple', 6.5],
      ['Mojito Kiwi', 6.5],
      ['Mojito Red', 8.5],
      ['Mojito Blue', 8.5],
      ['Mojito Vergin', 8.5],
      ['Mojito Power', 8.5],
      ['Mojito Galaxy', 9.5],
      ['Ice Chocolat', 7.5],
      ['Ice Chocolat Italienne (crème chantilly)', 10],
      ['Ice Nutella', 9],
      ['Ice Tiramisu', 11],
      ["Hot Choco'in", 8.5],
      ['Hot Nutella', 9],
      ['Hot Vanilla', 10],
      ['Hot Pink Lava', 10],
      ['Hot Chocolat Italienne (crème chantilly)', 10],
      ['Hot Drip Biscoff', 11],
      ['Hot Nutty Pistachio', 12],
      ['Thé Menthe', 4],
      ['Thé Amande', 5.5],
      ['Thé Pignon', 7.5],
      ['Thé Tulum (noisette, pignon, amande)', 9],
      ['Ice Tea', 6],
      ['Ice Tea Peachy', 6],
      ['Ice Tea Strawberry', 6],
      ['Ice Tea Fruits Rouges', 6],
      ['Orange', 5.5],
      ['Citronnade', 6],
      ['Kiwi', 7.5],
      ['Citronnade Amande', 8],
      ['Fraise', 8.5],
      ['Noisette', 8.5],
      ['Lait de Poule', 8.5],
      ['Eau 0.5L', 1.5],
      ['Eau 1L', 3],
      ['Soda', 4],
      ['Schweppes Tonic', 4.5],
      ['Boisson Énergétique', 9],
    ],
  },

  {
    id: 'fast-food',
    title: 'Fast Food',
    items: [
      ['Pizza', 10],
      ['Makloub', 10],
      ['Baguette Farcie', 10],
      ['Tacos', 10],
      ['Libanais', 10],
    ],
  },

  {
    id: 'plats',
    title: 'Plats',
    items: [
      ['Escalope Grillé', 18],
      ['Escalope Panné', 22],
      ['Cordon Bleu', 22],
      ['Escalope à la Crème', 23],
      ['Escalope Sauce Rosée', 23],
      ['Daurade Grillé', 24],
      ['Ojja Escalope', 17],
      ['Ojja Merguez', 18],
      ['Ojja Chevrette', 20],
      ['Ojja Fruits de Mer', 28],
      ['Spaghetti Putanesca', 15],
      ['Spaghetti Sauce Blanche', 20],
      ['Spaghetti Bolognaise', 22],
      ['Spaghetti Fruits de Mer', 28],
      ['Salade Tunisienne', 8],
      ['Salade Italienne', 12],
      ['Salade César', 15],
      ['Salade Tulum', 22],
      ['Omelette', 6],
      ['Omelette Thon Fromage', 8],
      ['Omelette Jambon Fromage', 8],
      ['Omelette Champignon', 9],
      ['Crêpe Classique (thon, fromage, harissa)', 8.5],
      ['Crêpe Tunisienne (thon, fromage, œuf, harissa)', 9],
      ['Crêpe Vienne (jambon, fromage, œuf, harissa)', 9.5],
      ['Gaufre Thon Fromage', 8.5],
      ['Gaufre Jambon Fromage', 8.5],
    ],
  },

  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      ['Crêpe Chocolat', 8],
      ['Crêpe Nutella', 9.5],
      ['Crêpe Amandine', 10.5],
      ['Crêpe Banane', 12],
      ['Crêpe Snicker', 13],
      ['Crêpe Broxella', 13],
      ['Crêpe Dubai', 14],
      ['Gaufre Chocolat', 8],
      ['Gaufre Nutella', 9.5],
      ['Gaufre Nutella + Banane', 12],
      ['Gaufre Broxella', 13],
      ['Gaufre Nutella Fruits Secs', 16],
      ['Salade de Fruits', 6],
      ['Gâteau', 7.5],
      ['Fondant Chocolat', 7.5],
      ['Fondant Noisette', 8],
      ['Fondant Pistache', 8.5],
      ['Dame Blanche', 8.5],
      ['Dame Brune', 8.5],
      ['Glace 3 Boules', 9],
      ['Tiramisu', 10.5],
      ['Cheesecake', 11.5],
      ['Banana Split', 13],
      ['Chicha Parfumé', 10],
      ['Chicha Tulum (thé + fruits secs)', 15],
    ],
  },
]

const categoryImage = (id: string) =>
  imageFor(id === 'cafe' ? 'coffee' : id)

export default function Page() {
  const [active, setActive] = useState('all')
  const [mobileOpen, setMobileOpen] = useState(false)

  const visible = useMemo(
    () =>
      active === 'all'
        ? sections
        : sections.filter((section) => section.id === active),
    [active]
  )

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden text-foreground"
    >
      <div
        className="ambient ambient-one"
        aria-hidden="true"
      />

      <div
        className="ambient ambient-two"
        aria-hidden="true"
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="brand-mark"
          aria-label="Tulum Plus"
        >
          <span className="brand-script">Tulum</span>
          <span className="brand-plus">PLUS</span>
        </a>

        <nav
          className={`${
            mobileOpen ? 'flex' : 'hidden'
          } absolute left-5 right-5 top-20 flex-col gap-4 rounded-2xl border border-border/70 bg-card/95 p-5 shadow-xl backdrop-blur-xl md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            className="nav-link"
            href="#menu"
            onClick={() => setMobileOpen(false)}
          >
            Notre menu
          </a>

          <a
            className="nav-link"
            href="#visit"
            onClick={() => setMobileOpen(false)}
          >
            Nous trouver
          </a>
        </nav>

        <button
          className="icon-button md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-12 lg:pb-24">
        <div>
          <p className="eyebrow">
            <Sparkles size={15} />
            Tea house · restaurant
          </p>

          <h1 className="display-title">
            Le menu <em>Tulum Plus</em>
          </h1>

          <p className="hero-copy">
            Découvrez nos cafés, boissons, plats et douceurs,
            préparés pour accompagner vos meilleurs moments.
          </p>

          <a href="#menu" className="primary-button">
            Voir la carte
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-collage">
          <img
            className="hero-image hero-main"
            src={categoryImage('FIRST')}
            alt="Boissons fraîches du menu Tulum Plus"
          />

          <img
            className="hero-image hero-small"
            src={categoryImage('SECOND')}
            alt="Café du menu Tulum Plus"
          />

          <div className="hero-stamp">
            <Coffee size={18} />
            <span>
              Tulum
              <br />
              Plus
            </span>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Notre carte</p>

            <h2 className="section-title">
              Choisissez une <em>catégorie</em>
            </h2>
          </div>
        </div>

        <div
          className="category-grid"
          role="tablist"
          aria-label="Catégories du menu"
        >
          <button
            className={`category-card ${
              active === 'all' ? 'is-active' : ''
            }`}
            onClick={() => setActive('all')}
          >
            <span className="category-all-icon">✦</span>

            <span>
              <small>Tout voir</small>
              <strong>La carte</strong>
            </span>
          </button>

          {categories.map(([id, label, tagline]) => (
            <button
              key={id}
              className={`category-card ${
                active === id ? 'is-active' : ''
              }`}
              onClick={() => setActive(id)}
            >
              <img
                src={categoryImage(id)}
                alt=""
              />

              <span>
                <small>{tagline}</small>
                <strong>{label}</strong>
              </span>
            </button>
          ))}
        </div>

        {/* IMPORTANT:
            flex column prevents one tall category from creating
            a huge empty vertical gap before the next category.
        */}
        <div
          className="menu-sections"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            width: '100%',
          }}
        >
          {visible.map((section) => (
            <article
              className="menu-section"
              key={section.id}
              id={section.id}
              style={{
                width: '100%',
                margin: 0,
              }}
            >
              <div className="menu-section-head">
                <div>
                  <p className="eyebrow">
                    Tulum Plus
                  </p>

                  <h3>{section.title}</h3>

                  <p>
                    Préparé avec soin et servi avec le
                    sourire.
                  </p>
                </div>

                <img
                  src={categoryImage(section.id)}
                  alt=""
                />
              </div>

              <div className="menu-groups">
                {groupItems(section).map((group) => (
                  <section
                    className="menu-group"
                    key={group.title}
                  >
                    <div
                      className="menu-group-head"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.9rem',
                      }}
                    >
                      <img
                        src={imageFor(group.image)}
                        alt=""
                        style={{
                          width: '76px',
                          height: '76px',
                          minWidth: '76px',
                          borderRadius: '18px',
                          objectFit: 'cover',
                          display: 'block',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.10)',
                        }}
                      />

                      <h4>{group.title}</h4>
                    </div>

                    <div className="menu-items">
                      {group.items.map(
                        ([name, price, desc]) => (
                          <div
                            className="menu-item"
                            key={name}
                          >
                            <div>
                              <span>{name}</span>

                              {desc && (
                                <small>
                                  {desc}
                                </small>
                              )}
                            </div>

                            <span className="dots" />

                            <strong>
                              {price.toFixed(1)} DT
                            </strong>
                          </div>
                        )
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        id="visit"
        className="relative z-10 border-t border-border/60 bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="brand-mark brand-light">
                <span className="brand-script">Tulum</span>
                <span className="brand-plus">PLUS</span>
              </div>

              <ul className="flex flex-col items-center justify-center gap-5 text-sm text-primary-foreground/90 sm:flex-row sm:gap-10">
                <li className="flex items-center gap-2.5">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-primary">
                    <Phone className="size-3.5" aria-hidden="true" />
                  </span>
                  <a
                    href="tel:+21626402402"
                    className="transition-opacity hover:opacity-80"
                  >
                    +216 26 402 402
                  </a>
                </li>

                <li className="flex items-center gap-2.5 text-center">
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary-foreground text-primary">
                    <MapPin className="size-3.5" aria-hidden="true" />
                  </span>
                  <span>Rue environnement, Kélibia 8090</span>
                </li>
              </ul>
            </div>

            <section
              className="mt-2"
              aria-label="Localisation du café"
            >
              <h2 className="mb-3 text-center font-display text-xs font-medium uppercase tracking-[0.35em] text-gold">
                Nous trouver
              </h2>

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <iframe
                  title="Emplacement de Tulum Plus sur la carte"
                  src="https://maps.google.com/maps?q=36.83659657992125,11.095054432745828&z=16&output=embed"
                  width="100%"
                  height="320"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale-[0.2]"
                />
              </div>

              <p className="mt-3 text-center text-sm text-primary-foreground/80">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=36.83659657992125,11.095054432745828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline-offset-4 transition-opacity hover:underline hover:opacity-90"
                >
                  Ouvrir dans Google Maps
                </a>
              </p>
            </section>
          </div>
        </div>
      </footer>
    </main>
  )
}