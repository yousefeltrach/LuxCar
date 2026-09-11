"use client"

import { AccountSidebar } from "@/components/site/AccountSidebar"


export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AccountSidebar activeItem="Dashboard" />

      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-2xl font-semibold text-foreground">Welcome back</h1>
        <p className="mt-2 text-muted-foreground">
          Here&apos;s an overview of your account and recent activity.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">0</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Active Rentals</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">0</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-medium text-muted-foreground">Saved Cars</p>
            <p className="mt-2 text-3xl font-semibold text-foreground">0</p>
          </div>
        </div>
      </main>
    </div>
  )
}
