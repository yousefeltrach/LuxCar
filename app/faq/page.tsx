import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";
import FaqSection from "@/components/ui/faq";

export default function FAQPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
