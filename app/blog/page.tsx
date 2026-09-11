import { Header } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Header";
import { Footer } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/Footer";
import { MobileNav } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/MobileNav";
import { WhatsAppFloat } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/WhatsAppFloat";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "prix-location-voiture-marrakech",
    image: "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/destination-djemaa.jpg",
    category: "Location de voiture",
    title: "Combien coûte une location de voiture à Marrakech en 2026 ?",
    excerpt:
      "Prix moyens, facteurs qui font varier le tarif et astuces pour réduire le coût de votre location de voiture à Marrakech.",
    date: "5 août 2026",
    readTime: "8 min",
  },
  {
    slug: "location-voiture-sans-chauffeur-marrakech",
    image: "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/destination-ozoud.jpg",
    category: "Location de voiture",
    title:
      "Location de voiture sans chauffeur à Marrakech : tout ce qu'il faut savoir",
    excerpt:
      "Avantages, conditions et conseils pratiques pour louer une voiture sans chauffeur et explorer Marrakech en toute liberté.",
    date: "28 juillet 2026",
    readTime: "7 min",
  },
  {
    slug: "conduire-au-maroc-guide",
    image: "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/destination-atlas.jpg",
    category: "Conduite au Maroc",
    title:
      "Conduire au Maroc : règles, conseils et informations pratiques",
    excerpt:
      "Code de la route, permis, sécurité et conseils pratiques pour bien conduire au Maroc en tant que visiteur.",
    date: "20 juillet 2026",
    readTime: "9 min",
  },
  {
    slug: "marrakech-essaouira-voiture",
    image: "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/destination-essaouira.jpg",
    category: "Destinations",
    title: "Marrakech à Essaouira en voiture : itinéraire et conseils",
    excerpt:
      "Distance, durée, étapes et conseils pratiques pour faire la route entre Marrakech et Essaouira en toute liberté.",
    date: "10 juillet 2026",
    readTime: "8 min",
  },
];

const categories = [
  "Tous",
  "Location de voiture",
  "Conduite au Maroc",
  "Destinations",
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <section className="bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-wide text-primary">
              Travel &amp; Car Rental Guide
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Le blog Yazkech Rental
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Conseils, guides et inspirations pour découvrir Marrakech et le
              Maroc en voiture.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <Link href="/blog/location-voiture-marrakech-guide" className="group block overflow-hidden rounded-3xl">
            <div className="relative h-72 sm:h-96">
              <Image
                src="/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/herobackground.png"
                alt="Location de voiture à Marrakech"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
              <div className="absolute left-5 top-5 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  Location de voiture
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  À la une
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Location de voiture à Marrakech : le guide complet
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-white/80">
                  Tout ce qu'il faut savoir avant de louer une voiture à
                  Marrakech : documents, choix du véhicule, assurance et conseils
                  pratiques.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-white/60">
                  <span>12 août 2026</span>
                  <span>9 min</span>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:underline">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`cursor-default rounded-full px-4 py-2 text-sm font-medium ring-1 ring-foreground/10 transition-colors hover:bg-muted ${
                  i === 0 ? "bg-primary text-white" : ""
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {article.category}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-[#0b1526] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6 md:py-28 lg:px-8">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Prêt à prendre la route ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Découvrez notre flotte de véhicules disponibles à Marrakech et
              réservez votre location en quelques minutes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
              >
                Voir nos voitures
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
