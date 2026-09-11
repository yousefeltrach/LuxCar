import { Reveal } from "../shared/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What documents do I need?",
    a: "A valid driver's license, a national ID or passport, and a credit card in the driver's name.",
  },
  {
    q: "Can I cancel my reservation?",
    a: "Yes, cancellation is free up to 48h before the vehicle pickup.",
  },
  {
    q: "Is insurance included?",
    a: "All our rentals include comprehensive insurance, with no surprises at key handover.",
  },
  {
    q: "Do you deliver to the airport?",
    a: "Yes, we handle pickup and drop-off directly at Marrakech-Menara airport.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Frequently asked questions
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            Everything you need to know before booking
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-12 mx-auto max-w-3xl space-y-3">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 text-left text-[0.95rem] font-medium ring-1 ring-foreground/10 transition-colors hover:bg-muted/40 [&[data-state=open]]:rounded-b-none">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="rounded-b-2xl bg-muted/20 px-5 pb-5 pt-2 text-sm leading-relaxed text-muted-foreground ring-1 ring-foreground/10 ring-t-0">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <p className="mt-6 text-center">
          <a href="/faq" className="inline-block text-sm font-semibold text-primary hover:underline">
            View all questions
          </a>
        </p>
      </div>
    </section>
  );
}
