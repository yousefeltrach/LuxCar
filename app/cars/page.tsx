import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";
import { CarsListing } from "@/components/site/cars/CarsListing";
import { cars } from "@/types/carsRent";

export const metadata: Metadata = {
  title: "Our cars",
  description: "Filter by category, transmission, and more.",
};

export default function CarsPage() {
  return (
    <>
      <Header solid />

      <div className="flex items-center justify-between bg-[#0b1526] px-4 py-4 text-white md:hidden">
        <Link
          href="/"
          className="flex size-8 items-center justify-center"
          aria-label="Back to home"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <h1 className="text-base font-semibold">Our cars</h1>
        <div className="flex size-8 items-center justify-center" />
      </div>

      <main className="flex-1 pt-16 md:pt-20">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto hidden max-w-2xl text-center md:block">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Fleet
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Find your car
            </h2>
            <p className="mt-4 text-muted-foreground">
              Filter by category, transmission, and more.
            </p>
          </div>

          <CarsListing cars={cars} />
        </div>
      </main>

      <Footer />
      <MobileNav />
      <WhatsAppFloat />
    </>
  );
}
