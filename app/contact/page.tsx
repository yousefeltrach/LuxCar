import { Reveal } from "@/components/ui/Reveal";
import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Magasin%20sis%20au%20n%2046%20avenue%20abdelkrim%20el%20khattabi%2C%20Marrakech%2C%20Maroc";

const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=Magasin%20sis%20au%20n%2046%20avenue%20abdelkrim%20el%20khattabi%2C%20Marrakech%2C%20Maroc&output=embed";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+212 6 62 61 18 93",
    href: "tel:+212704258007",
    linkText: "Call us",
    iconClass: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+212 6 62 61 18 93",
    href: "https://wa.me/212662611893",
    linkText: "Chat now",
    iconClass: "bg-emerald-500/10 text-emerald-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yazkechrental@gmail.com",
    href: "mailto:yazkechrental@gmail.com",
    linkText: "Send an email",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Magasin sis au n 46 avenue abdelkrim el khattabi, Marrakech, Maroc",
    href: googleMapsUrl,
    linkText: "Get directions",
    iconClass: "bg-violet-500/10 text-violet-500",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="relative -mt-16 overflow-hidden bg-[#0b1526] pt-28 pb-14 text-white sm:pt-32 md:-mt-20 md:pt-36 md:pb-16">
          <div className="pointer-events-none absolute -end-24 -top-24 size-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -start-24 -bottom-24 size-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Contact
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Get in touch
              </h1>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                A question about a booking or our fleet? Our team replies
                quickly.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-start lg:gap-10 lg:px-8">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <Reveal key={card.label}>
                <div className="flex flex-col gap-4 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-full ${card.iconClass}`}
                    >
                      <card.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        {card.label}
                      </p>
                      <p className="truncate text-sm font-semibold" dir="ltr">
                        {card.value}
                      </p>
                    </div>
                  </div>
                  <a
                    href={card.href}
                    target={
                      card.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="w-full shrink-0 rounded-lg border border-border bg-background px-2.5 py-1.5 text-[0.8rem] font-medium text-foreground transition-colors hover:bg-muted hover:text-foreground sm:w-auto"
                  >
                    {card.linkText}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <form className="space-y-4 rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  We usually reply within a few hours.
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+212 6 00 00 00 00"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-2.5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
              >
                <Send className="size-4" />
                Send message
              </button>
            </form>
          </Reveal>
        </div>

        <section className="py-16 sm:py-20">
          <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                  Address
                </p>
              </Reveal>
              <Reveal>
                <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Our location
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-4 text-muted-foreground">
                  Pickup and drop-off at Marrakech Menara Airport.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="h-[300px] w-full overflow-hidden rounded-2xl border shadow-sm sm:h-[400px]">
                <iframe
                  src={googleMapsEmbedUrl}
                  title="Yazkech Rental — Magasin sis au n 46 avenue abdelkrim el khattabi, Marrakech, Maroc"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full border-0"
                />
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border bg-card p-5 sm:flex-row">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Yazkech Rental</p>
                    <p className="text-sm text-muted-foreground" dir="ltr">
                      Magasin sis au n 46 avenue abdelkrim el khattabi,
                      Marrakech, Maroc
                    </p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full shrink-0 items-center justify-center gap-1.5 rounded-lg bg-primary px-2.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 sm:w-auto"
                >
                  Open in Google Maps
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t bg-muted/30 py-14 sm:py-16">
          <div className="mx-auto w-full max-w-xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Need help with your booking?
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}