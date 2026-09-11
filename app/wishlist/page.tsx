"use client"

import Link from "next/link"
import { Heart } from "lucide-react"
import { AccountSidebar } from "@/components/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/AccountSidebar"

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen">
      <AccountSidebar activeItem="Wishlist" />

      <main className="flex-1 p-6 md:p-10">
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <Heart className="size-12 text-muted-foreground" />
          <h1 className="mt-4 text-2xl font-semibold text-foreground">Your wishlist is empty</h1>
          <p className="mt-2 text-muted-foreground">
            Browse our fleet and save cars you love.
          </p>
          <Link
            href="/cars"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse cars
          </Link>
        </div>
      </main>
    </div>
  )
}
