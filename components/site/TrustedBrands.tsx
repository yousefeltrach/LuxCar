import { Reveal } from "../shared/Reveal"
import { Marquee } from "../ui/marquee"

const brands = [
  { name: "Dacia", file: "dacia" },
  { name: "Renault", file: "renault" },
  { name: "Peugeot", file: "peugeot" },

  { name: "Hyundai", file: "hyundai" },
  { name: "Kia", file: "kia" },
  // { name: "Toyota", file: "toyota" },
];

export  function TrustedBrands() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Trusted brands
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            The brands in our fleet
          </h2>
        </Reveal>
    <div className="mt-16 w-full">
      <Marquee pauseOnHover className="[--duration:25s]">
        {brands.map((brand) => (
          <div
            key={brand.name}
            title={brand.name}
            className="group/tile relative mx-3 flex size-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 md:size-32"
          >
            <img
              src={`/brands/icons/${brand.file}-52525B.svg`}
              alt={brand.name}
              className="size-16 object-contain opacity-80 transition-all duration-300 group-hover/tile:scale-110 group-hover/tile:opacity-0 md:size-[72px]"
            />
            <img
              src={`/brands/icons/${brand.file}-F97316.svg`}
              alt=""
              aria-hidden
              className="absolute size-16 scale-90 object-contain opacity-0 transition-all duration-300 group-hover/tile:scale-110 group-hover/tile:opacity-100 md:size-[72px]"
            />
          </div>
        ))}
      </Marquee>
    </div>
    </div>
    </section>
  )
}
