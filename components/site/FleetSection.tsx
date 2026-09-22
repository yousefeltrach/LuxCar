

import { ChevronRight, Heart } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import Link from "next/link";
import Image from "next/image";
import { Card, CardFooter } from "../ui/card";

interface Car {
  brand: string;
  model: string;
  transmission: string;
  seats: number;
  price: number;
  image: string;
  slug: string;
}

const IMAGE_ROOT = "/cars/";

const cars: Car[] = [
  {
    brand: "Audi",
    model: "A1",
    transmission: "Automatic",
    seats: 4,
    price: 1000,
    image: "audi-a1.webp",
    slug: "7f577a38-77ed-409b-9017-a20d1425e3da",
  },
  {
    brand: "Dacia",
    model: "Duster",
    transmission: "Automatic",
    seats: 5,
    price: 450,
    image: "dacia-duster.webp",
    slug: "537cc809-580a-4977-9dd2-2701183f8018",
  },
  {
    brand: "Dacia",
    model: "Sandero",
    transmission: "Manual",
    seats: 5,
    price: 300,
    image: "dacia-sandero.webp",
    slug: "94217b92-01dc-4ad9-8e50-2b4bd58c8886",
  },
  {
    brand: "Dacia",
    model: "Logain",
    transmission: "Manual",
    seats: 5,
    price: 350,
    image: "dacia-logain.webp",
    slug: "ad0b697b-f1f9-4a3c-9e16-c358ed5bd888",
  },
  {
    brand: "Renault",
    model: "Clio 5",
    transmission: "Manual",
    seats: 5,
    price: 400,
    image: "renault-clio5.webp",
    slug: "51bd85a6-e4b6-4432-8458-80e83d4736c9",
  },
  {
    brand: "Peugeot",
    model: "208",
    transmission: "Automatic",
    seats: 5,
    price: 450,
    image: "peugeot-208.webp",
    slug: "a0f5ee13-0eaa-4b7d-a9b2-515127edee1b",
  },
];

export function FleetSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Featured fleet</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Cars worth the detour</h2>
            <p className="mt-3 max-w-md text-muted-foreground">Choose the car that fits your journey.</p>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:gap-2.5 hover:bg-primary/5"
          >
            View the entire fleet
            <ChevronRight className="size-4" />
          </Link>
        </Reveal>

        <Card className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, i) => (
            <Reveal key={car.slug} delay={i * 80}>
              <article className="group overflow-hidden rounded-3xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-2xl hover:shadow-black/5">
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <Image
                    src={`${IMAGE_ROOT}${car.image}`}
                    alt={car.model}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button
                    aria-label="Ajouter aux favoris"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground/70 shadow-md transition-colors hover:text-primary"
                  >
                    <Heart className="size-4.5" />
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{car.brand}</p>
                  <h3 className="mt-0.5 text-lg font-semibold">{car.model}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {car.transmission} · {car.seats} Seats
                  </p>
                  <CardFooter className="mt-4 pt-4 flex items-center justify-between">
                    <p className="text-lg font-bold">
                      {car.price}{" "}
                      <span className="text-sm font-normal text-muted-foreground">DH/day</span>
                    </p>
                    <a
                      href={`/cars/${car.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                    >
                      View details <ChevronRight className="size-4" />
                    </a>
                  </CardFooter>
                </div>
              </article>
            </Reveal>
          ))}
        </Card>
      </div>
    </section>
  );
}