"use client"

import { useEffect, useState } from "react"

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
      className={`pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 bg-white transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="/logos/logo.png"
        alt="YazKechRental"
        className="h-16 w-auto sm:h-20"
      />
      <div className="relative h-12 w-64 overflow-hidden sm:h-16 sm:w-72">
        <img
          src="/images/car-side.png"
          alt=""
          className="absolute -top-1 left-0 h-12 w-auto translate-x-[-100%] animate-[cl-drive_1.6s_linear_infinite] sm:h-16"
        />
        <div className="absolute bottom-0 left-0 mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-full rounded-full bg-primary animate-[cl-progress_1.6s_ease_infinite]" />
        </div>
      </div>
    </div>
  )
}