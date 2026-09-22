import { CalendarCheck, Check, Lock } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">Payment</p>
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
            <Button
              render={<Link href="/cars" />}
              className="mt-8 inline-flex h-auto items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <CalendarCheck className="size-4.5" />
              Book now
            </Button>
          </Reveal>

          <Reveal delay={150}>
            <Card className="rounded-3xl bg-muted/50 p-8 md:p-10">
              <h3 className="text-xl font-semibold">Accepted payment methods</h3>
              <p className="mt-1 text-sm text-muted-foreground">Your payment information is protected.</p>
              <div className="mt-6 flex items-center gap-4">
                <Image src={`${IMAGE_ROOT}cmi.png`} alt="Paiement CMI" width={56} height={18} className="h-[18px] w-auto" />
                <Image src={`${IMAGE_ROOT}visalogo.svg`} alt="Visa" width={72} height={18} unoptimized className="h-[18px] w-auto" />
                <Image src={`${IMAGE_ROOT}mastercard.svg`} alt="Mastercard" width={72} height={18} unoptimized className="h-[18px] w-auto" />
              </div>
              <p className="mt-8 flex items-center gap-2 border-t border-foreground/10 pt-6 text-sm text-muted-foreground">
                <Lock className="size-4 text-orange-500" />
                Secure payment by card
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}