import { Plane, Infinity, Headphones, CreditCard } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const perks = [
  {
    icon: Plane,
    title: "Free delivery",
    desc: "Pickup and return offered at the airport or anywhere in Marrakech.",
  },
  {
    icon: Infinity,
    title: "Unlimited mileage",
    desc: "Drive without counting, with no hidden fees at the end of the rental.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    desc: "A team reachable at any time, by phone or WhatsApp.",
  },
  {
    icon: CreditCard,
    title: "Secure payment",
    desc: "Book online and pay directly by credit or debit card, securely.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Why choose us
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            A rental thought out down to the last detail
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 ring-1 ring-foreground/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perk.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
