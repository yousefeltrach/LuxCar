"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Header";
import { Footer } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Footer";
import { MobileNav } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/MobileNav";
import { WhatsAppFloat } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/WhatsAppFloat";
import { Reveal } from "@/components/sites/yazkechrental-com-a4958d18/shared/Reveal";
import { Heart, ChevronRight, ChevronDown } from "lucide-react";
import { cars } from "@/types/yazkechrental";

const IMAGE_ROOT = "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/cars/";

const categories = [
  "ALL",
  "ECONOMY",
  "COMPACT",
  "SEDAN",
  "SUV",
  "LUXURY",
  "VAN",
  "CONVERTIBLE",
  "PICKUP",
] as const;

const transmissions = ["All", "Automatic", "Manual"] as const;
const fuels = ["Petrol", "Diesel", "Electric", "Hybrid"] as const;

export default function CarsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [transmission, setTransmission] = useState<string>("All");
  const [fuel, setFuel] = useState<string>("");

  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
            <Reveal>
              <Link
                href="/"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Our cars
              </Link>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Our cars
              </h1>
              <p className="mt-4 max-w-md text-white/70">
                <span className="font-medium text-white">Find your car</span>
                <br />
                Filter by category, transmission, and more.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className="text-sm text-primary transition-colors hover:underline">
              Reset
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <div className="min-w-[180px]">
              <label className="mb-1 block text-sm text-muted-foreground">
                Price per day (DH)
              </label>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>–</span>
              </div>
            </div>
            <div className="min-w-[150px]">
              <label className="mb-1 block text-sm text-muted-foreground">
                Transmission
              </label>
              <div className="relative">
                <select
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-foreground/10 bg-white px-3 py-2 pr-8 text-sm"
                >
                  {transmissions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="min-w-[130px]">
              <label className="mb-1 block text-sm text-muted-foreground">
                Fuel
              </label>
              <div className="relative">
                <select
                  value={fuel}
                  onChange={(e) => setFuel(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-foreground/10 bg-white px-3 py-2 pr-8 text-sm"
                >
                  <option value="">All</option>
                  {fuels.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <button className="rounded-full border border-foreground/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50">
              Reset filters
            </button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ring-1 ring-foreground/10 transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-end">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              recommended
              <ChevronDown className="size-4" />
            </span>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car, i) => (
              <Reveal key={car.slug} delay={i * 80}>
                <article className="group overflow-hidden rounded-3xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-2xl hover:shadow-black/5">
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <img
                      src={`${IMAGE_ROOT}${car.image}`}
                      alt={car.model}
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
                      {car.brand}
                    </p>
                    <h3 className="mt-0.5 text-lg font-semibold">{car.model}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {car.transmission} · {car.seats} Seats
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-bold">
                        {car.pricePerDay}{" "}
                        <span className="text-sm font-normal text-muted-foreground">
                          DH/day
                        </span>
                      </p>
                      <Link
                        href={`/cars/${car.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                      >
                        View details <ChevronRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
