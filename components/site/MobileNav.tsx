"use client"

import Link from "next/link"
import { Home, Car, Phone, User } from "lucide-react"

const items = [
  { label: "Home", href: "/", icon: Home, active: true },
  { label: "Vehicles", href: "/cars", icon: Car, active: false },
  { label: "Contact", href: "/contact", icon: Phone, active: false },
  { label: "My account", href: "/dashboard", icon: User, active: false },
]

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-white/10 bg-[#0b1526] md:hidden">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex flex-col items-center justify-center gap-1 py-3 text-[11px] ${item.active ? "text-primary" : "text-white"}`}
        >
          <item.icon className="size-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}
