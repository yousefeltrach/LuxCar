// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
       
//       </main>
//     </div>
//   );
// }

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