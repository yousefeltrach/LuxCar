"use client"

import Link from "next/link"
import Image from "next/image"

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My bookings", href: "/dashboard" },
  { label: "Bookings", href: "/dashboard" },
  { label: "Profile", href: "/dashboard" },
]

interface AccountSidebarProps {
  activeItem?: string
}

export function AccountSidebar({ activeItem }: AccountSidebarProps) {
  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-foreground/10 lg:p-6">
      <Link href="/" className="mb-8 inline-block">
        <Image
          src="/logos/logo.png"
          alt="Yazkech Rental"
          width={120}
          height={32}
          className="h-8 w-auto"
          priority
        />
      </Link>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeItem === item.label
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="mt-auto rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:text-red-600"
      >
        Sign out
      </Link>
    </aside>
  )
}
