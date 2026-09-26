"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
} from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  carCategories,
  carFuelLabels,
  carFuels,
  type Car,
  type CarCategory,
  type CarFuel,
  type CarTransmission,
} from "@/types/carsRent"
import { CarCard, CarListItem } from "./CarViews"

const PAGE_SIZE = 12

const categoryOptions: string[] = ["ALL", ...carCategories]

const transmissionOptions: { value: CarTransmission | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "Automatic", label: "Automatic" },
  { value: "Manual", label: "Manual" },
]

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "year-desc", label: "Newest year" },
] as const

type SortValue = (typeof sortOptions)[number]["value"]
type ViewMode = "list" | "grid"

interface Filters {
  category: CarCategory | "ALL"
  brand: string
  transmission: CarTransmission | "all"
  fuelTypes: CarFuel[]
  minPrice: string
  maxPrice: string
}

const emptyFilters: Filters = {
  category: "ALL",
  brand: "",
  transmission: "all",
  fuelTypes: [],
  minPrice: "",
  maxPrice: "",
}

function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: typeof Search
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-16 text-center">
      <Icon className="size-10 text-muted-foreground" />
      <p className="font-medium">{title}</p>
      {description ? (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      ) : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  )
}

function FilterPanel({
  brands,
  filters,
  onFilterChange,
  onToggleFuel,
  onToggleBrand,
  onReset,
  className,
}: {
  brands: string[]
  filters: Filters
  onFilterChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void
  onToggleFuel: (fuel: CarFuel) => void
  onToggleBrand: (brand: string) => void
  onReset: () => void
  className?: string
}) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Filters</h2>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-medium text-primary"
        >
          Reset
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Price per day (DH)
        </p>
        <div className="flex items-center gap-2">
          <Input
            aria-label="Minimum price"
            type="number"
            min={0}
            placeholder="Min"
            value={filters.minPrice}
            onChange={(event) => onFilterChange("minPrice", event.target.value)}
            className="flex-1"
          />
          <span className="text-muted-foreground">–</span>
          <Input
            aria-label="Maximum price"
            type="number"
            min={0}
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(event) => onFilterChange("maxPrice", event.target.value)}
            className="flex-1"
          />
        </div>
      </div>

      {brands.length > 0 ? (
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Brand
          </p>
          <div className="space-y-2.5">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2.5 text-sm">
                <input
                  type="checkbox"
                  className="size-4 rounded accent-primary"
                  checked={filters.brand === brand}
                  onChange={() => onToggleBrand(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
      ) : null}

      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Transmission
        </p>
        <div className="space-y-2.5">
          {transmissionOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2.5 text-sm">
              <input
                type="radio"
                name="transmission"
                className="size-4 accent-primary"
                checked={filters.transmission === option.value}
                onChange={() => onFilterChange("transmission", option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Fuel
        </p>
        <div className="space-y-2.5">
          {carFuels.map((fuel) => (
            <label key={fuel} className="flex items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                className="size-4 rounded accent-primary"
                checked={filters.fuelTypes.includes(fuel)}
                onChange={() => onToggleFuel(fuel)}
              />
              {carFuelLabels[fuel]}
            </label>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full lg:hidden" onClick={onReset}>
        Reset filters
      </Button>
    </div>
  )
}

function CategoryChips({
  categories,
  active,
  onChange,
}: {
  categories: string[]
  active: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            category === active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

type PageItem = number | "ellipsis"

function buildPageItems(page: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pages = Array.from(new Set([1, totalPages, page, page - 1, page + 1]))
    .filter((value) => value >= 1 && value <= totalPages)
    .sort((a, b) => a - b)

  const items: PageItem[] = []
  pages.forEach((value, index) => {
    if (index > 0 && value - pages[index - 1] > 1) items.push("ellipsis")
    items.push(value)
  })
  return items
}

function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
}: {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}) {
  if (totalPages <= 1) return null

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-1.5", className)}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="size-4" />
      </button>
      {buildPageItems(page, totalPages).map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-1 text-sm text-muted-foreground"
            >
              …
            </span>
          )
        }

        const target = item

        return (
          <button
            key={target}
            type="button"
            aria-current={target === page ? "page" : undefined}
            onClick={() => onPageChange(target)}
            className={cn(
              "flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-colors",
              target === page
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {target}
          </button>
        )
      })}
      <button
        type="button"
        aria-label="Next page"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex size-9 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}

export function CarsListing({ cars }: { cars: Car[] }) {
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<Filters>(emptyFilters)
  const [sort, setSort] = useState<SortValue>("recommended")
  const [view, setView] = useState<ViewMode>("list")
  const [page, setPage] = useState(1)

  const brands = useMemo(
    () => Array.from(new Set(cars.map((car) => car.brand))).sort(),
    [cars]
  )

  const setFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  const toggleFuel = (fuel: CarFuel) => {
    setFilters((current) => ({
      ...current,
      fuelTypes: current.fuelTypes.includes(fuel)
        ? current.fuelTypes.filter((value) => value !== fuel)
        : [...current.fuelTypes, fuel],
    }))
  }

  const toggleBrand = (brand: string) => {
    setFilters((current) => ({
      ...current,
      brand: current.brand === brand ? "" : brand,
    }))
  }

  const resetAll = () => {
    setFilters(emptyFilters)
    setSearch("")
  }

  const stateKey = JSON.stringify({ search, filters, sort })
  const lastStateKey = useRef(stateKey)

  useEffect(() => {
    if (lastStateKey.current !== stateKey) {
      lastStateKey.current = stateKey
      setPage(1)
    }
  }, [stateKey])

  const filteredCars = useMemo(() => {
    const query = search.trim().toLowerCase()
    const min = filters.minPrice ? Number(filters.minPrice) : undefined
    const max = filters.maxPrice ? Number(filters.maxPrice) : undefined

    const result = cars.filter((car) => {
      if (query && !`${car.brand} ${car.model}`.toLowerCase().includes(query)) {
        return false
      }
      if (filters.category !== "ALL" && car.category !== filters.category) {
        return false
      }
      if (filters.brand && car.brand !== filters.brand) return false
      if (filters.transmission !== "all" && car.transmission !== filters.transmission) {
        return false
      }
      if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(car.fuel)) {
        return false
      }
      if (min !== undefined && car.pricePerDay < min) return false
      if (max !== undefined && car.pricePerDay > max) return false
      return true
    })

    switch (sort) {
      case "price-asc":
        return [...result].sort((a, b) => a.pricePerDay - b.pricePerDay)
      case "price-desc":
        return [...result].sort((a, b) => b.pricePerDay - a.pricePerDay)
      case "year-desc":
        return [...result].sort((a, b) => b.year - a.year)
      default:
        return result
    }
  }, [cars, search, filters, sort])

  const totalPages = Math.max(1, Math.ceil(filteredCars.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visibleCars = filteredCars.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  const activeFilterCount =
    Number(filters.transmission !== "all") +
    Number(filters.fuelTypes.length > 0) +
    Number(filters.brand !== "") +
    Number(filters.minPrice !== "") +
    Number(filters.maxPrice !== "")

  const hasActiveFilters =
    search !== "" || filters.category !== "ALL" || activeFilterCount > 0

  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] lg:items-start lg:gap-8">
      <aside className="hidden rounded-2xl border p-5 lg:sticky lg:top-24 lg:block">
        <FilterPanel
          brands={brands}
          filters={filters}
          onFilterChange={setFilter}
          onToggleFuel={toggleFuel}
          onToggleBrand={toggleBrand}
          onReset={resetAll}
        />
      </aside>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for a car..."
              className="pl-9"
            />
          </div>

          <Sheet>
            <SheetTrigger
              className="relative flex size-9 shrink-0 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
              aria-label="Filters"
            >
              <SlidersHorizontal className="size-4" />
              {activeFilterCount > 0 ? (
                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {activeFilterCount}
                </span>
              ) : null}
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-4">
                <FilterPanel
                  brands={brands}
                  filters={filters}
                  onFilterChange={setFilter}
                  onToggleFuel={toggleFuel}
                  onToggleBrand={toggleBrand}
                  onReset={resetAll}
                />
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden shrink-0 items-center gap-1 rounded-lg border p-1 sm:flex">
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="List view"
              className={cn(
                "flex size-7 items-center justify-center rounded-md transition-colors",
                view === "list"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              <List className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="Grid view"
              className={cn(
                "flex size-7 items-center justify-center rounded-md transition-colors",
                view === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              <LayoutGrid className="size-4" />
            </button>
          </div>
        </div>

        <CategoryChips
          categories={categoryOptions}
          active={filters.category}
          onChange={(value) =>
            setFilter("category", value as CarCategory | "ALL")
          }
        />

        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">
            {filteredCars.length}{" "}
            {filteredCars.length === 1 ? "vehicle" : "vehicles"} available
          </p>
          <Select
            items={sortOptions}
            value={sort}
            onValueChange={(value) => setSort(value as SortValue)}
          >
            <SelectTrigger className="w-fit">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {visibleCars.length > 0 ? (
          <>
            {view === "list" ? (
              <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {visibleCars.map((car) => (
                  <CarListItem key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {visibleCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
              className="pt-4"
            />
          </>
        ) : (
          <EmptyState
            icon={Search}
            title="No car found"
            description="Try another category, another keyword, or reset the filters."
            action={
              hasActiveFilters ? (
                <Button variant="outline" onClick={resetAll}>
                  Reset filters
                </Button>
              ) : undefined
            }
          />
        )}
      </div>
    </div>
  )
}
