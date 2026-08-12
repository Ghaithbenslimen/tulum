import type { MenuCategory, MenuItem } from '@/lib/menu-data'

function formatPrice(price: number) {
  return Number.isInteger(price) ? price.toString() : price.toFixed(1)
}

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-3 py-2.5">
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-snug text-card-foreground">{item.name}</p>
        {item.desc ? (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
        ) : null}
      </div>
      <span
        aria-hidden="true"
        className="mx-1 hidden h-px flex-1 translate-y-[-3px] border-b border-dashed border-card-foreground/20 sm:block"
      />
      <span className="shrink-0 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
        {formatPrice(item.price)} DT
      </span>
    </li>
  )
}

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-20">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2
          id={`${category.id}-heading`}
          className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl"
        >
          {category.label}
        </h2>
        {category.tagline ? (
          <p className="hidden text-sm italic text-foreground/60 sm:block">{category.tagline}</p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {category.groups.map((group, i) => (
          <div
            key={group.title ?? i}
            className="rounded-2xl bg-card px-5 py-4 shadow-lg shadow-black/20 sm:px-6 sm:py-5"
          >
            {group.title ? (
              <h3 className="mb-1 border-b border-card-foreground/10 pb-2 font-display text-lg font-semibold uppercase tracking-wide text-primary">
                {group.title}
              </h3>
            ) : null}
            <ul className="divide-y divide-card-foreground/10">
              {group.items.map((item) => (
                <ItemRow key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
