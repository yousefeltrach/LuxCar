import { CalendarCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Calender } from "./Calender"



export function HeroSection() {
  return (
    <>
      <section className="relative -mt-16 overflow-hidden md:-mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/herobackground-v2.png"
          alt="Rental car in Agadir at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <Card className="relative z-10 ml-82 mt-24 flex w-full max-w-lg flex-col items-center gap-3 rounded-2xl bg-black/90 px-4 pb-32 pt-24 text-left ring-white/10 backdrop-blur md:pt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-500">
          Car rental in Agadir
        </p>
        <h1 className="font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
          Discover Agadir <span className="text-orange-500">at your own pace</span>
        </h1>
        <p className="max-w-sm text-sm text-white/70">
          Recent, comfortable cars suited to all your needs.
        </p>
        <Link
          href="/cars"
          className="mt-1 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-colors hover:bg-white/90"
        >
          <CalendarCheck size={18} />
          Book now
        </Link>
      </Card>
      </section>

      <Calender />
    </>
  )
}