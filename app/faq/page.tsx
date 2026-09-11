
import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents do I need to rent a car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A valid driver's license, a passport or national ID, and a credit card in the renter's name.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel my booking for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, bookings can be cancelled free of charge up to 48 hours before pickup.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a mileage limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most vehicles include unlimited mileage; check the car's detail page for specifics.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer airport pickup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our locations include an airport branch for pickup and drop-off.",
      },
    },
  ],
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
        <section className="bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              FAQ
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Frequently asked questions
            </h1>
          </div>
        </section>

        <section className="mx-auto w-full max-w-3xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="py-2.5 text-left text-sm font-medium hover:underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
      <Footer />
    </>
  );
}
