import { Car, CalendarCheck, KeyRound } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const steps = [
  {
    icon: Car,
    title: "Choose your vehicle",
    description: "Browse our fleet and find the car that suits your stay.",
  },
  {
    icon: CalendarCheck,
    title: "Book online",
    description: "Confirm your dates in a few clicks, or directly via WhatsApp.",
  },
  {
    icon: KeyRound,
    title: "Drive away",
    description: "Pick up your car and start exploring Marrakech.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xl font-semibold uppercase tracking-[0.25em] text-orange-500">
            How it works
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            Three steps to the road
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 ">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 120}>
                <div className="relative flex justify-center">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-7" />
                    <span className="absolute -right-2 -top-4 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="mt-6 text-center text-lg font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}