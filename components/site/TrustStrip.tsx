import { ShieldCheck, CreditCard, CalendarClock, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Secure booking" },
  { icon: CreditCard, label: "Card payment" },
  { icon: CalendarClock, label: "Flexible rental" },
  { icon: Headphones, label: "24/7 support" },
];

export function TrustStrip() {
  return (
    <section className="border-b bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}