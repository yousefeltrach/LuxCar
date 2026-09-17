

import {
  CTASection,
  DestinationsSection,
  FAQSection,
  FleetSection,
  Footer,
  Header,
  HeroSection,
  HowItWorks,
  MobileNav,
  PaymentSection,
  Preloader,
  StatsSection,
  TrustedBrands,
  TrustStrip,
  WhatsAppFloat,
   WhyChooseUs } from "@/components/site";




export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <MobileNav />
      <WhatsAppFloat />
      <main className="flex-1 pt-16 md:pt-20">
        <HeroSection />
        <TrustStrip />
        <StatsSection />
        <FleetSection />
        <HowItWorks />
        <DestinationsSection />
        <WhyChooseUs />
        <TrustedBrands />
        <PaymentSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}