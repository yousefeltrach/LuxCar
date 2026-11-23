"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const delay = prefersReducedMotion ? 100 : 1800
    const timer = setTimeout(() => setHidden(true), delay)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      aria-hidden={hidden}
      className={`pointer-events-none fixed inset-0 z-9999 flex flex-col items-center justify-center gap-8 bg-white transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/logos/soussLogo.png"
          alt="Souss Rent"
          width={1774}
          height={887}
          priority
          quality={95}
          className="h-20 w-auto animate-[logo-pop_0.8s_cubic-bezier(0.22,1,0.36,1)_both] object-contain drop-shadow-md sm:h-28"
        />
        <div className="h-px w-40 overflow-hidden rounded-full bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
      </div>

      <div className="relative h-14 w-64 sm:h-16 sm:w-80">
        <Image
          src="/images/car-side.png"
          alt=""
          width={256}
          height={64}
          className="absolute -top-1 left-0 h-14 w-auto animate-[cl-drive_1.6s_linear_infinite] object-contain sm:h-16"
        />
        <div className="absolute bottom-0 left-0 h-1.5 w-full overflow-hidden rounded-full bg-gray-200/70">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 animate-[cl-progress_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  )
}
