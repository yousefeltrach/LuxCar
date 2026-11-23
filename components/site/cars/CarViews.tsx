"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Car, Fuel, Gauge, Heart, Users } from "lucide-react"
import { cn } from "cn"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useWishlist } from "@/hooks/use-wishlist"
import { carFuelLabels, type Car as CarType } from "@/types/carsRent"

const IMAGE_ROOT = "/cars/"

function formatDH(value: number) {
  const amount = Number(value)
  return `${new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(Number.isFinite(amount) ? amount : 0)} DH`
}

function CarImage({
  src,
  alt,
  className,
  sizes,
  fallbackLabel,
}: {
  src?: string
  alt: string
  className?: string
  sizes?: string
  fallbackLabel?: string
}) {
  const [failed, setFailed] = useState(false)
  const url = src ? `${IMAGE_ROOT}${src}` : undefined

  if (!url || failed) {
    return (
      <div
        className={cn(
          "flex size-full flex-col items-center justify-center gap-2 bg-linear-to-br from-primary/15 via-muted to-muted text-primary",
          className
        )}
      >
        <Car className="size-10" strokeWidth={1.5} />
        {fallbackLabel ? (
          <span className="text-xs font-medium text-muted-foreground">
            {fallbackLabel}
          </span>
        ) : null}
      </div>
    )
  }

  return (
    <Image
      src={url}
      alt={alt}
      fill
      sizes={sizes}
      unoptimized={url.endsWith(".svg")}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  )
}

function WishlistButton({
  carId,
  carLabel,
  className,
}: {
  carId: string
  carLabel: string
  className?: string
}) {
  const { isSaved, toggle } = useWishlist()
  const saved = isSaved(carId)

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggle(carId)
      }}
      aria-label={saved ? `Remove ${carLabel} from wishlist` : `Add ${carLabel} to wishlist`}
      aria-pressed={saved}
      className={cn(
        "flex items-center justify-center text-muted-foreground transition-colors hover:text-red-500",
        saved && "text-red-500",
        className
      )}
    >
      <Heart className={cn("size-5", saved && "fill-red-500")} />
    </button>
  )
}

export function CarListItem({ car }: { car: CarType }) {
  const label = `${car.brand} ${car.model}`

  return (
    <Link
      href={`/cars/${car.slug}`}
      className="flex gap-4 rounded-2xl border p-3 transition-colors hover:border-primary/40 hover:bg-muted/30"
    >
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl bg-muted">
        <CarImage src={car.image} alt={label} sizes="96px" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold">{label}</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Gauge className="size-3.5" />
                {car.transmission}
              </span>
              <span className="flex items-center gap-1">
                <Fuel className="size-3.5" />
                {carFuelLabels[car.fuel]}
              </span>
              <span className="flex items-center gap-1">
                <Users className="size-3.5" />
                {car.seats} Seats
              </span>
            </div>
          </div>
          <WishlistButton carId={car.id} carLabel={label} className="shrink-0" />
        </div>
        <div className="flex items-end justify-between">
          <span
            className={cn(
              "inline-flex w-fit items-center rounded-full px-2 py-0.5 text-xs font-medium",
              car.isAvailable
                ? "bg-emerald-500/10 text-emerald-600"
                : "bg-muted text-muted-foreground"
            )}
          >
            {car.isAvailable ? "Available" : "Unavailable"}
          </span>
          <p className="text-end font-semibold text-primary">
            {formatDH(car.pricePerDay)}
            <span className="block text-xs font-normal text-muted-foreground">
              /day
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export function CarCard({ car }: { car: CarType }) {
  const label = `${car.brand} ${car.model}`

  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative -mt-(--card-spacing) aspect-4/3 overflow-hidden bg-muted">
        <CarImage
          src={car.image}
          alt={label}
          fallbackLabel={label}
          className="transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <WishlistButton
          carId={car.id}
          carLabel={label}
          className="absolute top-3 inset-e-3 size-8 rounded-full bg-background/90 shadow-sm backdrop-blur-sm"
        />
      </div>
      <CardContent className="space-y-1">
        <p className="text-sm text-muted-foreground">{car.brand}</p>
        <h3 className="font-semibold">{car.model}</h3>
        <p className="text-sm text-muted-foreground">
          {car.transmission} · {car.seats} Seats
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="font-semibold">
          {formatDH(car.pricePerDay)}
          <span className="text-sm font-normal text-muted-foreground">/day</span>
        </p>
        <Link
          href={`/cars/${car.slug}`}
          className={buttonVariants({ size: "sm" })}
        >
          View details
        </Link>
      </CardFooter>
    </Card>
  )
}
