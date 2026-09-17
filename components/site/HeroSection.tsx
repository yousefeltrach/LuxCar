import { CalendarCheck, MapPin, ShieldCheck, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Calender } from "./Calender"

export function HeroSection() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[92svh] items-center overflow-hidden md:-mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/herobackground-v2.png"
          alt="Rental car in Agadir at sunset"
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-40 md:px-6 md:pb-48 lg:px-8">
        <div className="max-w-2xl">
          <p className="hero-rise inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400 backdrop-blur-sm">
            <MapPin className="size-3.5" />
            Car rental in Agadir
          </p>

          <h1 className="hero-rise mt-6 font-display text-4xl font-bold leading-[1.1] text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "1.85s" }}>
            Discover Agadir <span className="text-orange-500">at your own pace</span>
          </h1>

          <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg" style={{ animationDelay: "2s" }}>
            Recent, comfortable cars suited to all your needs — free cancellation,
            unlimited mileage and delivery anywhere in the city.
          </p>

          <div className="hero-rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: "2.15s" }}>
            <Link
              href="/cars"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-500/50"
            >
              <CalendarCheck className="size-5 transition-transform duration-300 group-hover:scale-110" />
              Book now
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
            >
              <Sparkles className="size-4" />
              View fleet
            </Link>
          </div>

          <div className="hero-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70" style={{ animationDelay: "2.3s" }}>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-orange-400" />
              Fully insured
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-orange-400" aria-hidden>
                ★★★★★
              </span>
              4.9/5 from 500+ travelers
            </span>
          </div>
        </div>
      </div>
      </section>

      <Calender />
    </>
  )
}