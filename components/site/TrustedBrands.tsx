import { Reveal } from "../shared/Reveal";

const brands = [
  { name: "Dacia", file: "dacia.svg.webp" },
  { name: "Renault", file: "renault.svg.webp" },
  { name: "Peugeot", file: "peugeot.svg.webp" },
  { name: "Citroën", file: "citroen.svg" },
  { name: "Hyundai", file: "hyundai.svg" },
  { name: "Kia", file: "kia.svg" },
  { name: "Toyota", file: "toyota.svg" },
];

const imgRoot = "/brands/";

function BrandList({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <>
      {brands.map((brand) => (
        <img
          key={brand.name}
          src={`${imgRoot}${brand.file}`}
          alt={brand.name}
          aria-hidden={ariaHidden}
          className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
        />
      ))}
    </>
  );
}

export function TrustedBrands() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Trusted brands
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            The brands in our fleet
          </h2>
        </Reveal>

        <Reveal>
          <div className="group mt-12 overflow-hidden">
            <div className="flex w-max gap-16 animate-marquee group-hover:[animation-play-state:paused]">
              <BrandList />
              <BrandList ariaHidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
