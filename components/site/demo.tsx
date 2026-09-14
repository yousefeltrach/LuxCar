import { Reveal } from "../shared/Reveal"
import { Marquee } from "./marquee"

export default function Demo() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Trusted brands
          </p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold sm:text-4xl">
            The brands in our fleet
          </h2>
        </Reveal>
    <div className="flex items-center justify-center mt-16 w-full">
      <Marquee>
        <span className="mx-8 text-2xl font-medium">React</span>
        <span className="mx-8 text-2xl font-medium">Next.js</span>
        <span className="mx-8 text-2xl font-medium">Tailwind</span>
        <span className="mx-8 text-2xl font-medium">TypeScript</span>
        <span className="mx-8 text-2xl font-medium">Supabase</span>
      </Marquee>
    </div>
    </div>
    </section>
  )
}
