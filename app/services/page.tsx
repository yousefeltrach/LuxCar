import { Car, Plane, ShieldCheck, Clock } from "lucide-react";
import { Header } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Header";
import { Footer } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Footer";
import { MobileNav } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/MobileNav";
import { WhatsAppFloat } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/WhatsAppFloat";
import { Reveal } from "@/components/sites/yazkechrental-com-a4958d18/shared/Reveal";

const services = [
  {
    title: "Flexible fleet",
    description:
      "From economy to luxury, choose the car that fits every trip.",
    icon: Car,
  },
  {
    title: "Airport pickup & drop-off",
    description: "Skip the queues with dedicated airport branches.",
    icon: Plane,
  },
  {
    title: "Full insurance coverage",
    description:
      "Every rental includes comprehensive insurance by default.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 roadside support",
    description:
      "Help is always a call away, wherever your journey takes you.",
    icon: Clock,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Services
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                Everything you need for the road
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.title}>
                <div className="rounded-3xl bg-white p-8 ring-1 ring-foreground/10">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
