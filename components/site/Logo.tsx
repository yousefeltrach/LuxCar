import Image from "next/image"
import { cn } from "@/lib/utils"

const BRAND = "agalux Rental"

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl"

const sizeClasses: Record<LogoSize, string> = {
  xs: "h-6 w-auto",
  sm: "h-8 w-auto",
  md: "h-10 w-auto",
  lg: "h-12 w-auto",
  xl: "h-16 w-auto sm:h-20",
}

interface LogoProps {
  size?: LogoSize
  className?: string
  priority?: boolean
  quality?: number
}

export function Logo({
  size = "md",
  className,
  priority = false,
  quality = 90,
}: LogoProps) {
  return (
    <Image
      src="/logos/soussLogo.png"
      alt={BRAND}
      width={1774}
      height={887}
      priority={priority}
      quality={quality}
      className={cn(
        sizeClasses[size],
        "select-none object-contain drop-shadow-sm",
        className,
      )}
    />
  )
}

export { BRAND }
