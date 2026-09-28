import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";
import { Reveal } from "@/components/ui/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to the questions we get asked most about renting a car.",
};

const faqs = [
  {
    q: "What documents do I need to rent a car?",
    a: "A valid driver's license, a passport or national ID, and a credit card in the renter's name.",
  },
  {
    q: "Can I cancel my booking for free?",
    a: "Yes, bookings can be cancelled free of charge up to 48 hours before pickup.",
  },
  {
    q: "Is there a mileage limit?",
    a: "Most vehicles include unlimited mileage; check the car's detail page for specifics.",
  },
  {
    q: "Do you offer airport pickup?",
    a: "Yes, all our locations include an airport branch for pickup and drop-off.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="relative -mt-16 overflow-hidden bg-[#0b1526] pt-28 pb-14 text-white sm:pt-32 md:-mt-20 md:pt-36 md:pb-16">
          <div className="pointer-events-none absolute -inset-e-24 -top-24 size-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -inset-s-24 -bottom-24 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                FAQ
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                Everything about documents, mileage, cancellation and pickup.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Reveal>
            <Accordion className="rounded-2xl border bg-card px-5 py-2 shadow-sm">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="py-4 text-left font-medium hover:underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>

        <section className="border-t bg-muted/30 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Still have a question?
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-muted-foreground">
                Our team can help you choose the right vehicle and answer any
                questions.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                <a
                  href="tel:+212704258007"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  <Phone className="size-4" />
                  Call us
                </a>
                <a
                  href="https://wa.me/212662611893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal>
              <Link
                href="/cars"
                className="inline-block pt-2 text-sm font-semibold text-primary hover:underline"
              >
                Browse our cars
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
