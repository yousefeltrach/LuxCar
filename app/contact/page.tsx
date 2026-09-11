import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import { Header } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Header";
import { Footer } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Footer";
import { MobileNav } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/MobileNav";
import { WhatsAppFloat } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/WhatsAppFloat";
import { Reveal } from "@/components/sites/yazkechrental-com-a4958d18/shared/Reveal";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Magasin%20sis%20au%20n%2046%20avenue%20abdelkrim%20el%20khattabi%2C%20Marrakech%2C%20Maroc";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+212 6 62 61 18 93",
    href: "tel:+212704258007",
    linkText: "Call us",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+212 6 62 61 18 93",
    href: "https://wa.me/212662611893",
    linkText: "Chat now",
  },
  {
    icon: Mail,
    label: "Email",
    value: "yazkechrental@gmail.com",
    href: "mailto:yazkechrental@gmail.com",
    linkText: "Send an email",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Magasin sis au n 46 avenue abdelkrim el khattabi, Marrakech, Maroc",
    href: googleMapsUrl,
    linkText: "Get directions",
  },
];

export default function ContactPage() {
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
                Contact
              </p>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Get in touch
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 max-w-2xl text-lg text-white/70">
                A question about a booking or our fleet? Our team replies
                quickly.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <Reveal key={card.label}>
                <div className="rounded-3xl bg-white p-6 ring-1 ring-foreground/10">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-muted-foreground">
                    {card.label}
                  </h3>
                  <p className="mt-1 text-sm">{card.value}</p>
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
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    {card.linkText}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="gap-12 lg:grid lg:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold">Send us a message</h2>
              </Reveal>
              <Reveal>
                <p className="mt-2 text-muted-foreground">
                  We usually reply within a few hours.
                </p>
              </Reveal>
              <Reveal>
                <form className="mt-8 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="mt-1.5 w-full rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="mt-1.5 w-full resize-none rounded-xl border border-foreground/10 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Send message
                  </button>
                </form>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold">Our location</h2>
              </Reveal>
              <Reveal>
                <p className="mt-2 text-muted-foreground">
                  Pickup and drop-off at Marrakech Menara Airport.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-6 rounded-3xl bg-white p-6 ring-1 ring-foreground/10">
                  <p className="text-sm font-bold">Yazkech Rental</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Magasin sis au n 46 avenue abdelkrim el khattabi, Marrakech,
                    Maroc
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1526] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Need help with your booking?
              </h2>
            </Reveal>
            <Reveal>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                Our team can help you choose the right vehicle and answer any
                questions.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+212704258007"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
                <a
                  href="https://wa.me/212662611893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  <MessageCircle className="h-4 w-4" />
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
