"use client"

import { useCallback, useSyncExternalStore } from "react"

const STORAGE_KEY = "yazkech:wishlist"

const EMPTY_IDS: string[] = []

let cachedIds: string[] = EMPTY_IDS
let hydrated = false
const listeners = new Set<() => void>()

function getSnapshot(): string[] {
  if (!hydrated) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      const parsed: unknown = stored ? JSON.parse(stored) : []
      cachedIds = Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : []
    } catch {
      cachedIds = []
    }
    hydrated = true
  }
  return cachedIds
}

function getServerSnapshot(): string[] {
  return EMPTY_IDS
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function commit(next: string[]) {
  cachedIds = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    /* storage unavailable */
  }
  listeners.forEach((listener) => listener())
}

export function useWishlist() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback((carId: string) => {
    const next = ids.includes(carId)
      ? ids.filter((id) => id !== carId)
      : [...ids, carId]
    commit(next)
    return next.includes(carId)
  }, [ids])

  const clear = useCallback(() => commit([]), [])

  return {
    ids,
    isSaved: (carId: string) => ids.includes(carId),
    toggle,
    clear,
  }
}
