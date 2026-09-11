"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Globe,
  Menu,
  CalendarCheck,
  ChevronDown,
  Home,
  Car,
  Phone,
  User,
  MessageCircle,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Vehicles", href: "/cars" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const languages = [
  { label: "Français", code: "fr" },
  { label: "English", code: "en" },
  { label: "العربية", code: "ar" },
]

const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/cars" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "WhatsApp", href: "https://wa.me/+212612345678" },
]

const accountLinks = [
  { label: "Sign in", href: "/login" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Book now", href: "/booking" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 h-16 transition-all duration-300 md:h-20 ${scrolled ? "border-b border-zinc-200/60 bg-white shadow-xl shadow-black/5" : "bg-transparent backdrop-blur-md"}`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 md:px-6 lg:px-8">
        <Link href="/">
          <img
            src="/logos/logo.png"
            alt="Yazkech Rental"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${scrolled ? "text-zinc-900" : "text-white"}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-primary transition-transform duration-300 scale-x-0 hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-flex items-center gap-1 rounded-md p-2 transition-colors duration-300 hover:text-primary ${scrolled ? "text-zinc-900" : "text-white"}`}
            >
              <Globe className="size-5" />
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  render={<Link href={`/${lang.code}`} />}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/login"
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary ${scrolled ? "text-zinc-900" : "text-white"}`}
          >
            Sign in
          </Link>

          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-primary/90"
          >
            <CalendarCheck className="size-4" />
            Book a car
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-flex items-center rounded-md p-2 transition-colors duration-300 hover:text-primary ${scrolled ? "text-zinc-900" : "text-white"}`}
            >
              <Globe className="size-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  render={<Link href={`/${lang.code}`} />}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger
              className={`inline-flex items-center rounded-md p-2 transition-colors duration-300 hover:text-primary ${scrolled ? "text-zinc-900" : "text-white"}`}
            >
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <SheetHeader className="flex flex-row items-center justify-between border-b border-zinc-100 pb-4">
                <img
src="/logos/logo.png"
                  alt="Yazkech Rental"
                  className="h-8 w-auto"
                />
                <SheetClose>
                  <X className="size-5" />
                </SheetClose>
              </SheetHeader>

              <div className="flex flex-col gap-6 overflow-y-auto px-4 pb-8 pt-2">
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50">
                      <Globe className="size-4" />
                      English
                      <ChevronDown className="size-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          render={<Link href={`/${lang.code}`} />}
                        >
                          {lang.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href="/login"
                    className="rounded-full border border-zinc-200 px-4 py-2.5 text-center text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/cars"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary/90"
                  >
                    <CalendarCheck className="size-4" />
                    Book a car
                  </Link>
                </div>

                <nav className="flex flex-col border-t border-zinc-100 pt-4">
                  {mobileNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3 text-sm font-medium text-zinc-900 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-zinc-100 pt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Support
                  </h4>
                  <nav className="flex flex-col">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-3 text-sm font-medium text-zinc-900 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-zinc-100 pt-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Account
                  </h4>
                  <nav className="flex flex-col">
                    {accountLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="py-3 text-sm font-medium text-zinc-900 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
