import type { MenuCategory } from '@/lib/menu-data'

export function CategoryNav({ categories }: { categories: MenuCategory[] }) {
  return (
    <nav
      aria-label="Catégories du menu"
      className="sticky top-0 z-20 -mx-5 mb-12 border-b border-white/10 bg-background/80 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8"
    >
      <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3">
        {categories.map((cat) => (
          <li key={cat.id}>
            <a
              href={`#${cat.id}`}
              className="inline-block rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:text-sm"
            >
              {cat.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
