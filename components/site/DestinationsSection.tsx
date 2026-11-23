import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const destinations = [
  {
    name: "Agadir Beach",
    desc: "City center",
    image: "/images/destination-djemaa.jpg",
  },
  {
    name: "Paradise Valley",
    desc: "1h15 drive",
    image: "/images/destination-atlas.jpg",
  },
  {
    name: "Taghazout Coast",
    desc: "30 min drive",
    image: "/images/destination-essaouira.jpg",
  },
  {
    name: "Taroudant",
    desc: "1h drive",
    image: "/images/destination-ozoud.jpg",
  },
];

export function DestinationsSection() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Popular destinations
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            Where the road takes you
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, i) => (
            <Reveal key={dest.name} delay={i * 100}>
              <a
                href="/cars"
                className="group relative block h-72 overflow-hidden rounded-3xl sm:h-80"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-semibold text-white">{dest.name}</p>
                  <p className="mt-0.5 text-sm text-white/75">{dest.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
