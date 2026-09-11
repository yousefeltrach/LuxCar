import Link from "next/link";
import { Car, BadgeDollarSign, MapPin, Headphones, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Reveal } from "@/components/shared/Reveal";

const highlights = [
  "Based in Marrakech",
  "Insurance included on every rental",
  "Transparent pricing, no hidden fees",
];

const stats = [
  { value: "10+", label: "Cars in the fleet" },
  { value: "50+", label: "Happy clients" },
  { value: "4.9/5", label: "Average rating" },
  { value: "24/7", label: "Support available" },
];

const values = [
  {
    title: "Reliable fleet",
    description:
      "Every vehicle is inspected and maintained before it reaches you, so you can drive with confidence.",
    icon: Car,
  },
  {
    title: "Transparent pricing",
    description:
      "The price you see is the price you pay — no hidden fees when you return the car.",
    icon: BadgeDollarSign,
  },
  {
    title: "Local expertise",
    description:
      "Based in Marrakech, we know the routes, the roads and the best stops along the way.",
    icon: MapPin,
  },
  {
    title: "Real support",
    description:
      "A real team, reachable by phone or WhatsApp, before and during your trip.",
    icon: Headphones,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
            <div className="relative z-10 max-w-3xl">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                  About us
                </p>
              </Reveal>
              <Reveal>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                  Driven by a better rental experience
                </h1>
              </Reveal>
              <Reveal>
                <p className="mt-6 text-lg text-white/70">
                  A local car rental agency in Marrakech, focused on reliable
                  cars, fair prices and real support — from booking to drop-off.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/cars"
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Book a car
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Contact us
                  </Link>
                </div>
              </Reveal>
            </div>
            <img
              src="/images/herobackground.png"
              alt=""
              className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 object-cover opacity-20 md:block"
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Our story
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              A Marrakech agency, built around drivers
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <p className="text-muted-foreground">
                  Yazkech Rental started with a simple idea: renting a car in
                  Marrakech shouldn't come with surprises. We're a local team
                  who knows the city, the roads to the Atlas and the coast, and
                  what travelers actually need to get around with confidence.
                </p>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-muted-foreground">
                  Every car in our fleet is inspected and maintained before it
                  reaches you, every rental includes comprehensive insurance,
                  and every price is agreed upfront — no hidden fees at return.
                </p>
              </Reveal>
              <Reveal>
                <ul className="mt-8 space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 md:px-6 lg:px-8">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              What drives us
            </p>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              The values behind every rental
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Simple principles we apply to every booking, every car and every
              conversation.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <Reveal key={value.title}>
                <div className="rounded-3xl bg-white p-8 ring-1 ring-foreground/10">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[#0b1526] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Ready to explore Marrakech at your own pace ?
              </h2>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Book your car now, with no hidden fees and 24/7 support
                available.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Book now
                </Link>
                <a
                  href="https://wa.me/+212612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Book via WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
