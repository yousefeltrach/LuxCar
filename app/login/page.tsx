"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center px-12 py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/herobackground.png"
            alt="Car rental in Marrakech"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0b1526]/80" />
        </div>

        <div className="relative z-10">
          <Image
            src="/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/logos/logo.png"
            alt="Yazkech Rental"
            width={120}
            height={40}
            className="h-10 w-auto mb-8"
            priority
          />

          <h1 className="text-4xl font-bold leading-tight text-white">
            Rent your car in Marrakech with total confidence
          </h1>

          <p className="mt-4 max-w-md text-lg text-white/80">
            Insurance included, 24/7 support, and pay when you pick up the vehicle.
          </p>

          <div className="mt-8 flex items-center gap-2 text-white/90">
            <CheckCircle className="size-5 text-green-400" />
            <span className="text-sm font-medium">500+ happy clients</span>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-block">
              <Image
                src="/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/logos/logo.png"
                alt="Yazkech Rental"
                width={100}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <h2 className="text-3xl font-semibold text-foreground">Welcome back</h2>
          <p className="mt-2 text-muted-foreground">Sign in to manage your bookings.</p>

          <form className="mt-8 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="size-4 rounded border-border accent-primary"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
