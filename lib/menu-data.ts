export type MenuItem = {
  name: string
  price: number
  desc?: string
}

export type MenuGroup = {
  title?: string
  items: MenuItem[]
}

export type MenuCategory = {
  id: string
  label: string
  tagline?: string
  groups: MenuGroup[]
}

export const menu: MenuCategory[] = [
  {
    id: 'petit-dejeuner',
    label: 'Petit Déjeuner',
    tagline: 'Pour bien commencer la journée',
    groups: [
      {
        items: [
          {
            name: 'Matin Vitale',
            price: 12,
            desc: "Café au choix, bouteille d'eau 0.5L, croissant, jus, salade de fruits",
          },
          {
            name: "Matin d'Or",
            price: 25,
            desc: "Café au choix, bouteille d'eau 0.5L, croissant + cake + fondant chocolat, omelette, mini crêpe (salé ou sucré) ou mini gaufre, escalope panné, salade verte, riz, plat tunisien, huile d'olive, chamia, jambon, fromage, fruits secs",
          },
          {
            name: 'Brunch Tulum',
            price: 45,
            desc: "2 cafés au choix, 2 bouteilles d'eau 0.5L, 2 jus, 2 croissants + 2 cakes + 2 fondants chocolat, 2 omelettes, escalope panné, salade verte, riz, fromage, jambon, plat tunisien, fruits secs, fruits de saison, mini crêpe (sucrée ou salée) ou mini gaufre, pâté, chamia + chocolat + beurre + confiture",
          },
        ],
      },
    ],
  },
  {
    id: 'cafe',
    label: 'Café',
    tagline: 'Torréfaction maison',
    groups: [
      {
        title: 'Express',
        items: [
          { name: 'Express', price: 3.5 },
          { name: 'Coffee American', price: 4 },
          { name: 'Capucin', price: 4 },
          { name: 'Café Crème', price: 4.5 },
          { name: 'Café Turc', price: 4.5 },
          { name: 'Cappuccino Chantilly', price: 7.5 },
          { name: 'Nocciola (Noisette)', price: 8 },
          { name: 'Pistachio (Pistache)', price: 8.5 },
        ],
      },
      {
        title: 'Macchiato',
        items: [
          { name: 'Macchiato', price: 10 },
          { name: 'Macchiato Caramel', price: 10 },
          { name: 'Macchiato Vanille', price: 10 },
          { name: 'Macchiato Noisette', price: 10 },
          { name: 'Macchiato Miel', price: 12 },
          { name: 'Macchiato Pistache', price: 12 },
        ],
      },
      {
        title: 'Frappuccino',
        items: [
          { name: 'Frappuccino', price: 6 },
          { name: 'Frappuccino Caramel', price: 7.5 },
          { name: 'Frappuccino Noisette', price: 7.5 },
          { name: 'Frappuccino Vanille', price: 7.5 },
          { name: 'Frappuccino Oréo', price: 9.5 },
          { name: 'Frappuccino Nutella', price: 9.5 },
        ],
      },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    tagline: 'Fraîches et gourmandes',
    groups: [
      {
        title: 'Smoothie',
        items: [
          { name: 'Smoothie Fruits Rouges', price: 9.5 },
          { name: 'Smoothie Banane Kiwi', price: 9.5 },
          { name: 'Smoothie Fraise Banane', price: 9.5 },
          { name: 'Smoothie Hawaii (Blue)', price: 9.5 },
          { name: 'Smoothie Kiwi', price: 9 },
          { name: 'Smoothie Pêche', price: 9 },
          { name: 'Smoothie Pinacolada (ananas - noix de coco)', price: 9 },
        ],
      },
      {
        title: 'Milkshake',
        items: [
          { name: 'Milkshake Chocolat', price: 8.5 },
          { name: 'Milkshake Chocolat Banane', price: 9.5 },
          { name: 'Milkshake Nutella', price: 9.5 },
          { name: 'Milkshake Oréo', price: 10 },
          { name: 'Milkshake Snickers', price: 10 },
          { name: 'Milkshake Kinder Bueno', price: 11 },
          { name: 'Milkshake Nutella Banane', price: 11.5 },
          { name: 'Milkshake Pistache', price: 12 },
        ],
      },
      {
        title: 'Cocktail',
        items: [
          {
            name: 'Cocktail Big Tulum',
            price: 16,
            desc: 'Fruits frais, fruits secs, crème chantilly, Ferrero ou Kinder Bueno',
          },
          { name: 'Cocktail Provençal', price: 12, desc: 'Pêche, banane, fruits des bois' },
          { name: 'Cocktail Exotique', price: 12, desc: 'Pêche, ananas, kiwi' },
          { name: 'Cocktail Fruit', price: 10 },
        ],
      },
      {
        title: 'Mojito',
        items: [
          { name: 'Mojito', price: 7 },
          { name: 'Mojito Apple', price: 6.5 },
          { name: 'Mojito Kiwi', price: 6.5 },
          { name: 'Mojito Red', price: 8.5 },
          { name: 'Mojito Blue', price: 8.5 },
          { name: 'Mojito Vergin', price: 8.5 },
          { name: 'Mojito Power', price: 8.5 },
          { name: 'Mojito Galaxy', price: 9.5 },
        ],
      },
      {
        title: 'Ice',
        items: [
          { name: 'Ice Chocolat', price: 7.5 },
          { name: 'Ice Chocolat Italienne (crème chantilly)', price: 10 },
          { name: 'Ice Nutella', price: 9 },
          { name: 'Ice Tiramisu', price: 11 },
        ],
      },
      {
        title: 'Hot Chocolat',
        items: [
          { name: "Hot Choco'in", price: 8.5 },
          { name: 'Hot Nutella', price: 9 },
          { name: 'Hot Vanilla', price: 10 },
          { name: 'Hot Pink Lava', price: 10 },
          { name: 'Hot Chocolat Italienne (crème chantilly)', price: 10 },
          { name: 'Hot Drip Biscoff', price: 11 },
          { name: 'Hot Nutty Pistachio', price: 12 },
        ],
      },
      {
        title: 'Thé',
        items: [
          { name: 'Thé Menthe', price: 4 },
          { name: 'Thé Amande', price: 5.5 },
          { name: 'Thé Pignon', price: 7.5 },
          { name: 'Thé Tulum (noisette, pignon, amande)', price: 9 },
          { name: 'Ice Tea', price: 6 },
          { name: 'Ice Tea Peachy', price: 6 },
          { name: 'Ice Tea Strawberry', price: 6 },
          { name: 'Ice Tea Fruits Rouges', price: 6 },
        ],
      },
      {
        title: 'Jus Frais',
        items: [
          { name: 'Orange', price: 5.5 },
          { name: 'Citronnade', price: 6 },
          { name: 'Kiwi', price: 7.5 },
          { name: 'Citronnade Amande', price: 8 },
          { name: 'Fraise', price: 8.5 },
          { name: 'Noisette', price: 8.5 },
          { name: 'Lait de Poule', price: 8.5 },
        ],
      },
      {
        title: 'Boissons Fraîches',
        items: [
          { name: 'Eau 0.5L', price: 1.5 },
          { name: 'Eau 1L', price: 3 },
          { name: 'Soda', price: 4 },
          { name: 'Schweppes Tonic', price: 4.5 },
          { name: 'Boisson Énergétique', price: 9 },
        ],
      },
    ],
  },
  {
    id: 'fast-food',
    label: 'Fast Food',
    tagline: 'Tout à 10 DT',
    groups: [
      {
        items: [
          { name: 'Pizza', price: 10 },
          { name: 'Makloub', price: 10 },
          { name: 'Baguette Farcie', price: 10 },
          { name: 'Tacos', price: 10 },
          { name: 'Libanais', price: 10 },
        ],
      },
    ],
  },
  {
    id: 'plats',
    label: 'Plats',
    tagline: 'Cuisine du restaurant',
    groups: [
      {
        title: 'Escalope & Poisson',
        items: [
          { name: 'Escalope Grillé', price: 18 },
          { name: 'Escalope Panné', price: 22 },
          { name: 'Cordon Bleu', price: 22 },
          { name: 'Escalope à la Crème', price: 23 },
          { name: 'Escalope Sauce Rosée', price: 23 },
          { name: 'Daurade Grillé', price: 24 },
        ],
      },
      {
        title: 'Ojja',
        items: [
          { name: 'Ojja Escalope', price: 17 },
          { name: 'Ojja Merguez', price: 18 },
          { name: 'Ojja Chevrette', price: 20 },
          { name: 'Ojja Fruits de Mer', price: 28 },
        ],
      },
      {
        title: 'Pâtes',
        items: [
          { name: 'Spaghetti Putanesca', price: 15 },
          { name: 'Spaghetti Sauce Blanche', price: 20 },
          { name: 'Spaghetti Bolognaise', price: 22 },
          { name: 'Spaghetti Fruits de Mer', price: 28 },
        ],
      },
      {
        title: 'Salades',
        items: [
          { name: 'Salade Tunisienne', price: 8 },
          { name: 'Salade Italienne', price: 12 },
          { name: 'Salade César', price: 15 },
          { name: 'Salade Tulum', price: 22 },
        ],
      },
      {
        title: 'Omelette',
        items: [
          { name: 'Omelette', price: 6 },
          { name: 'Omelette Thon Fromage', price: 8 },
          { name: 'Omelette Jambon Fromage', price: 8 },
          { name: 'Omelette Champignon', price: 9 },
        ],
      },
      {
        title: 'Crêpes Salées',
        items: [
          { name: 'Crêpe Classique (thon, fromage, harissa)', price: 8.5 },
          { name: 'Crêpe Tunisienne (thon, fromage, œuf, harissa)', price: 9 },
          { name: 'Crêpe Vienne (jambon, fromage, œuf, harissa)', price: 9.5 },
        ],
      },
      {
        title: 'Gaufre Salée',
        items: [
          { name: 'Gaufre Thon Fromage', price: 8.5 },
          { name: 'Gaufre Jambon Fromage', price: 8.5 },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    tagline: 'Douceurs sucrées',
    groups: [
      {
        title: 'Crêpes Sucrées',
        items: [
          { name: 'Crêpe Chocolat', price: 8 },
          { name: 'Crêpe Nutella', price: 9.5 },
          { name: 'Crêpe Amandine', price: 10.5 },
          { name: 'Crêpe Banane', price: 12 },
          { name: 'Crêpe Snicker', price: 13 },
          { name: 'Crêpe Broxella', price: 13 },
          { name: 'Crêpe Dubai', price: 14 },
        ],
      },
      {
        title: 'Gaufre Sucrée',
        items: [
          { name: 'Gaufre Chocolat', price: 8 },
          { name: 'Gaufre Nutella', price: 9.5 },
          { name: 'Gaufre Nutella + Banane', price: 12 },
          { name: 'Gaufre Broxella', price: 13 },
          { name: 'Gaufre Nutella Fruits Secs', price: 16 },
        ],
      },
      {
        title: 'Glaces & Gâteaux',
        items: [
          { name: 'Salade de Fruits', price: 6 },
          { name: 'Gâteau', price: 7.5 },
          { name: 'Fondant Chocolat', price: 7.5 },
          { name: 'Fondant Noisette', price: 8 },
          { name: 'Fondant Pistache', price: 8.5 },
          { name: 'Dame Blanche (café, 2 boules citron, chantilly)', price: 8.5 },
          { name: 'Dame Brune (café, 2 boules noisette, chantilly)', price: 8.5 },
          { name: 'Glace 3 Boules', price: 9 },
          { name: 'Tiramisu', price: 10.5 },
          { name: 'Cheesecake', price: 11.5 },
          { name: 'Banana Split', price: 13 },
        ],
      },
      {
        title: 'Chicha',
        items: [
          { name: 'Chicha Parfumé', price: 10 },
          { name: 'Chicha Tulum (thé + fruits secs)', price: 15 },
        ],
      },
    ],
  },
]
