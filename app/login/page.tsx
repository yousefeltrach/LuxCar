"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Eye, EyeOff, Lock, Mail, ShieldCheck, Star } from "lucide-react"
import { useState } from "react"

const stats = [
  { icon: CheckCircle, value: "500+", label: "Happy clients" },
  { icon: Star, value: "4.9/5", label: "Average rating" },
  { icon: ShieldCheck, value: "24/7", label: "Support" },
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden overflow-hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:px-12 lg:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/herobackground-v2.png"
            alt="Car rental in Marrakech"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1526]/95 via-[#0b1526]/80 to-[#0b1526]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="relative z-10">
          <Image
            src="/logos/logo.png"
            alt="Yazkech Rental"
            width={140}
            height={40}
            className="mb-10 h-10 w-auto"
            priority
          />

          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-orange-400 backdrop-blur-sm">
            <ShieldCheck className="size-3.5" />
            Trusted car rental
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Rent your car in Marrakech with{" "}
            <span className="text-orange-500">total confidence</span>
          </h1>

          <p className="mt-4 max-w-md text-lg text-white/80">
            Insurance included, 24/7 support, and pay when you pick up the vehicle.
          </p>

          <div className="mt-10 grid w-fit grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-orange-400" />
                  <span className="text-lg font-bold text-white">{value}</span>
                </div>
                <span className="text-xs text-white/70">{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="size-4 text-green-400" />
            Your information is encrypted and never shared.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/logo.png"
                alt="Yazkech Rental"
                width={100}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <Link
            href="/"
            className="mb-8 hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to home
          </Link>

          <h2 className="text-3xl font-semibold text-foreground">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to manage your bookings and reservations.
          </p>

          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground/70" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-11 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all focus:border-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            <label className="mt-1 flex cursor-pointer items-center gap-2 text-sm text-muted-foreground select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="size-4 rounded border-border accent-primary"
              />
              Keep me signed in
            </label>

            <button
              type="submit"
              className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 active:translate-y-px"
            >
              Sign in
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="my-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground/70">
              New to Yazkech?
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <Link
            href="/register"
            className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-background py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-muted"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}