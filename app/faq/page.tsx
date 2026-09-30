

import { Footer, Header, MobileNav, WhatsAppFloat } from "@/components/site";

import FrequentlyAskedQuestions from "@/components/ui/faq";

export default function FAQPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
    </>
  );
}
