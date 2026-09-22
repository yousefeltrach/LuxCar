import { Reveal } from "../ui/Reveal";
import { CalendarCheck, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-[#0b1526] py-16 text-center sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Ready to explore Marrakech at your own pace ?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Book your car now, with no hidden fees and 24/7 support available.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="size-4.5" />
              Book now
            </a>
            <a
              href="https://wa.me/+212662611893"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#1fbb5a]"
            >
              <MessageCircle className="size-4.5" />
              Book via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
