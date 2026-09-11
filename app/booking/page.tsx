import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import Link from "next/link";

export default function BookingPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-semibold">Aucun véhicule sélectionné</h1>
          <p className="mt-3 max-w-md text-muted-foreground">
            Choisissez un véhicule dans notre flotte pour démarrer votre
            réservation.
          </p>
          <Link
            href="/cars"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
          >
            Voir nos voitures
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
