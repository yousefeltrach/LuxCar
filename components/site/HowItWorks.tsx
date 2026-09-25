// import { Car, CalendarCheck, KeyRound } from "lucide-react";
// import { Reveal } from "../shared/Reveal";

// const steps = [
//   {
//     icon: Car,
//     title: "Choose your vehicle",
//     description: "Browse our fleet and find the car that suits your stay.",
//   },
//   {
//     icon: CalendarCheck,
//     title: "Book online",
//     description: "Confirm your dates in a few clicks, or directly via WhatsApp.",
//   },
//   {
//     icon: KeyRound,
//     title: "Drive away",
//     description: "Pick up your car and start exploring Marrakech.",
//   },
// ];

// export function HowItWorks() {
//   return (
//     <section id="how-it-works" className="py-16 sm:py-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
//         <Reveal>
//           <p className="text-center text-xl font-semibold uppercase tracking-[0.25em] text-orange-500">
//             How it works
//           </p>
//           <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
//             Three steps to the road
//           </h2>
//         </Reveal>
//         <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 ">
//           {steps.map((step, i) => {
//             const Icon = step.icon;
//             return (
//               <Reveal key={step.title} delay={i * 120}>
//                 <div className="relative flex justify-center">
//                   <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
//                     <Icon className="size-7" />
//                     <span className="absolute -right-2 -top-4 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
//                       {i + 1}
//                     </span>
//                   </div>
//                 </div>
//                 <h3 className="mt-6 text-center text-lg font-semibold">{step.title}</h3>
//                 <p className="mx-auto mt-2 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
//                   {step.description}
//                 </p>
//               </Reveal>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// } 

import { CalendarCheck, CarFront, KeyRound } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Choose your vehicle',
    description: 'Browse our fleet and find the car\nthat suits your stay.',
    icon: CarFront,
  },
  {
    number: '2',
    title: 'Book online',
    description: 'Confirm your dates in a few clicks,\nor directly via WhatsApp.',
    icon: CalendarCheck,
  },
  {
    number: '3',
    title: 'Drive away',
    description: 'Pick up your car and start\nexploring Marrakech.',
    icon: KeyRound,
  },
]

function Step({
  number,
  title,
  description,
  icon: Icon,
  isLast,
}: (typeof steps)[number] & { isLast: boolean }) {
  return (
    <article className="relative flex flex-1 flex-col items-center text-center">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[calc(50%+33px)] right-[calc(-50%+33px)] top-[33px] hidden h-px bg-[#dedede] md:block"
        />
      )}

      <div className="relative z-10 flex h-[67px] w-[67px] items-center justify-center rounded-full border border-[#e2e2e2] bg-white">
        <Icon aria-hidden="true" className="h-[23px] w-[23px] text-[#ff6500]" strokeWidth={1.8} />
        <span className="absolute -right-[8px] -top-[8px] flex h-6 w-6 items-center justify-center rounded-full bg-[#ff6500] text-[13px] font-medium leading-none text-white">
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-[17px] font-semibold leading-6 text-[#111111]">{title}</h3>
      <p className="mt-1 whitespace-pre-line text-[15px] leading-5 text-[#777777]">{description}</p>
    </article>
  )
}

export  function HowItWorks() {
  return (
     <main id="how-it-works" className="scroll-mt-16 bg-white px-6 py-16 text-[#111111] sm:py-24 md:scroll-mt-20">
      <section className="mx-auto max-w-[1216px]">
        <p className="text-center text-[14px] font-medium uppercase tracking-[0.02em] text-[#ff6500]">
          How it works
        </p>
        <h1 className="mt-2 text-center font-serif text-[36px] font-bold leading-tight tracking-[-0.02em] text-[#090909]">
          Three steps to the road
        </h1>

        <div className="mt-[56px] flex flex-col gap-12 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <Step key={step.number} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </section>
    </main>
  )
}