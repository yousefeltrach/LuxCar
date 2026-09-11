import { CalendarCheck, Check, Lock } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const IMAGE_ROOT = "/images/";

const points = [
  "Pay by credit or debit card",
  "Secure payment process",
  "Instant booking confirmation",
];

export function PaymentSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Payment</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Simple and secure payment
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Book your vehicle in a few steps and pay online by credit or debit card.
            </p>
            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <p className="font-medium">{point}</p>
                </div>
              ))}
            </div>
            <a
              href="/cars"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="size-4.5" />
              Book now
            </a>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-muted/50 p-8 md:p-10">
              <h3 className="text-xl font-semibold">Accepted payment methods</h3>
              <p className="mt-1 text-sm text-muted-foreground">Your payment information is protected.</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={`${IMAGE_ROOT}cmi.png`} alt="Paiement CMI" className="h-[18px] w-auto" />
                <img src={`${IMAGE_ROOT}visalogo.svg`} alt="Visa" className="h-[18px] w-auto" />
                <img src={`${IMAGE_ROOT}mastercard.svg`} alt="Mastercard" className="h-[18px] w-auto" />
              </div>
              <p className="mt-8 flex items-center gap-2 border-t border-foreground/10 pt-6 text-sm text-muted-foreground">
                <Lock className="size-4" />
                Secure payment by card
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}