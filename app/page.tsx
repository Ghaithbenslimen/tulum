import { CategoryNav } from '@/components/category-nav'
import { MenuSection } from '@/components/menu-section'
import { MenuFooter } from '@/components/menu-footer'
import { BrandLogo } from '@/components/brand-logo'
import { menu } from '@/lib/menu-data'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-10 sm:px-8">
      <header className="flex flex-col items-center pt-16 pb-8 text-center">
        <BrandLogo />
        <p className="mx-auto mt-6 max-w-md text-pretty text-sm text-foreground/60">
          Notre carte — petit déjeuner, cafés, boissons, fast food, plats et desserts. Prix en dinar
          tunisien.
        </p>
      </header>

      <CategoryNav categories={menu} />

      <div className="flex flex-col gap-16">
        {menu.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>

      <MenuFooter />
    </main>
  )
}
