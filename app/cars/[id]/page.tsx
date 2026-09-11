import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Heart, ChevronRight, MapPin } from "lucide-react";
import { cars } from "@/types/yazkechrental";

const CDN = "https://api.yazkechrental.com/uploads/cars";
const IMAGE_ROOT = "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/cars/";

const IMAGE_MAP: Record<string, string[]> = {
  "51bd85a6-e4b6-4432-8458-80e83d4736c9": [
    "510c469e-c78c-46b4-8e4f-5ebc298619e3",
    "5cbacf58-d0f4-4ee4-87bd-469011b1fcb0",
    "89a12345-29fb-4f4d-84ae-0e7a42ee49a2",
  ],
};

function getCarImages(carId: string): string[] {
  const mapped = IMAGE_MAP[carId];
  if (mapped) {
    return mapped.map((uuid) => `${CDN}/${carId}/${uuid}.webp`);
  }
  const prefix = carId.slice(0, 8);
  return [
    `${CDN}/${carId}/${prefix}-0001.webp`,
    `${CDN}/${carId}/${prefix}-0002.webp`,
    `${CDN}/${carId}/${prefix}-0003.webp`,
  ];
}

export function generateStaticParams() {
  return cars.map((car) => ({ id: car.slug }));
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = cars.find((c) => c.slug === id);
  if (!car) notFound();

  const images = getCarImages(car.id);
  const similar = cars.filter((c) => c.slug !== car.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0b1526] px-4 py-4 text-white md:hidden">
        <div className="flex items-center justify-between">
          <Link
            href="/cars"
            className="flex items-center gap-2 text-white transition-colors hover:text-white/80"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <h1 className="text-lg font-semibold">Car details</h1>
          <button
            aria-label="Add to wishlist"
            className="text-white transition-colors hover:text-red-400"
          >
            <Heart className="size-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-7xl px-4 pt-6 sm:px-6 md:block lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Accueil
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground" />
          <Link href="/cars" className="text-muted-foreground transition-colors hover:text-foreground">
            Véhicules
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground" />
          <span className="text-muted-foreground">
            {car.brand} {car.model}
          </span>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <img
              src={images[0]}
              alt={`${car.brand} ${car.model}`}
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white">
              1/3
            </span>
          </div>
          <div className="mt-3 flex gap-2">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative h-16 w-24 overflow-hidden rounded-xl ${
                  i === 0 ? "ring-2 ring-primary" : "ring-1 ring-foreground/10"
                }`}
              >
                <img
                  src={img}
                  alt={`${car.brand} ${car.model} ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {car.brand}
            </p>
            <h2 className="mt-1 text-3xl font-semibold">{car.model}</h2>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="size-3.5" />
              Magasin sis au n 46 avenue abdelkrim el khattabi
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold">{car.pricePerDay} DH</span>
              <span className="text-sm font-normal text-muted-foreground">
                {" "}
                /day
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-muted px-3 py-1 text-sm">
                {car.transmission}
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">
                Petrol
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">
                {car.seats} Seats
              </span>
              <span className="rounded-full bg-muted px-3 py-1 text-sm">
                4 Doors
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Vehicle details</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Year</p>
                <p className="font-medium">2026</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Color</p>
                <p className="font-medium">black</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mileage</p>
                <p className="font-medium">1 000 km</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">
                  Magasin sis au n 46 avenue abdelkrim el khattabi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="sticky top-24 rounded-3xl bg-white p-6 ring-1 ring-foreground/10">
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Economy
            </span>
            <p className="mt-4 text-2xl font-bold">
              {car.pricePerDay} DH/day
            </p>
            <p className="mt-1 text-sm text-green-600">Available</p>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">Rental dates</p>
              <input
                type="text"
                placeholder="Select dates"
                readOnly
                className="w-full rounded-xl border border-foreground/10 bg-muted/30 px-4 py-3 text-sm text-muted-foreground"
              />
            </div>

            <button className="mt-4 w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
              Book now
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Free cancellation up to 48h before pickup
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold">Also worth a look</h2>
          <p className="mt-1 text-muted-foreground">Similar vehicles</p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {similar.map((s) => (
            <article
              key={s.slug}
              className="group overflow-hidden rounded-3xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-2xl hover:shadow-black/5"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={`${IMAGE_ROOT}${s.image}`}
                  alt={s.model}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-foreground/70 shadow-md transition-colors hover:text-primary"
                >
                  <Heart className="size-4.5" />
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.brand}
                </p>
                <h3 className="mt-0.5 text-lg font-semibold">{s.model}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {s.transmission} · {s.seats} Seats
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold">
                    {s.pricePerDay}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      DH/day
                    </span>
                  </p>
                  <Link
                    href={`/cars/${s.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                  >
                    View details <ChevronRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
