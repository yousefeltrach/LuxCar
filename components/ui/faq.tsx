"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  title?: string;
  description?: string;
  data?: FAQItem[];
  className?: string;
  supportEmail?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What documents do I need to rent a car?",
    answer:
      "A valid driver's license, a passport or national ID, and a credit card in the renter's name.",
  },
  {
    question: "Can I cancel my booking for free?",
    answer:
      "Yes, bookings can be cancelled free of charge up to 48 hours before pickup.",
  },
  {
    question: "Is there a mileage limit?",
    answer:
      "Most vehicles include unlimited mileage; check the car's detail page for specifics.",
  },
  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes, all our locations include an airport branch for pickup and drop-off.",
  },
  {
    question: "What happens if I return the car late?",
    answer:
      "A fee of 100 MAD per hour will be charged for late returns. This is to ensure that the vehicle is returned on time and in good condition.",
  },
];

export default function FrequentlyAskedQuestions({
  title = "Frequently asked questions",
  description = " Everything about documents, mileage, cancellation and pickup.",
  data = defaultFAQs,
  className,
  // supportEmail = "support@example.com",
}: FrequentlyAskedQuestionsProps) {
  const words = title.split(" ");

  return (
    <section className={cn("relative w-full overflow-hidden py-24", className)}>
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-lg text-center font-medium uppercase tracking-wide text-primary">
                FAQ
              </p>
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-zinc-800 md:text-5xl lg:text-6xl dark:text-zinc-100">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base text-zinc-500 dark:text-zinc-400 md:text-lg"
        >
          {description}{" "}
          {/* <a
            href={`mailto:${supportEmail}`}
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {supportEmail}
          </a> */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="w-full">
            {data.map((item, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 0.5 + index * 0.07,
                  ease: "easeOut",
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
