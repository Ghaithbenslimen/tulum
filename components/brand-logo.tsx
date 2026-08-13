import Image from 'next/image'

export function BrandLogo() {
  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Palm frond + "Menu" script sit above the wordmark, like the logo */}
<Image
  src="/tulum/brand/123.webp"
  alt="Tulum palm leaf"
  width={150}
  height={150}
  priority
  className="pointer-events-none absolute select-none"
  style={{
    left: '-80px',
    top: '-30px',
    transform: 'rotate(25deg)',
    width: '6rem',
    height: '6rem',
  }}
/>

      <div className="flex items-baseline gap-2">
        <span className="font-serif text-6xl font-extrabold tracking-tight text-gold sm:text-7xl">
          TULUM
        </span>
        <span className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">Plus</span>
      </div>

      <span className="mt-1 font-display text-[0.7rem] font-medium uppercase tracking-[0.35em] text-gold">
        Tea House &middot; Restaurant
      </span>
    </div>
  )
}
