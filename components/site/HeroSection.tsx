import { CalendarCheck, Search } from "lucide-react"

const pickupLocations = [
  "Select a location",
  "Marrakech-Menara Airport",
  "Marrakech Medina",
  "Gueliz",
  "Palmeraie",
]

const vehicleTypes = ["Any type", "Compact cars", "Economy", "SUV"]

export function HeroSection() {
  return (
    <section className="relative -mt-16 md:-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/sites/yazkechrental-com-a4958d18/en-7a4ba3ba/images/herobackground.png"
          alt="Yazkech Rental car in front of the Koutoubia in Marrakech at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-40 pt-36 text-center md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Car rental in Marrakech
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          Discover Marrakech <span className="text-primary">at your own pace</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
          Recent, comfortable cars suited to all your needs.
        </p>
        <a
          href="/cars"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-primary/90"
        >
          <CalendarCheck size={18} />
          Book now
        </a>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 md:p-8">
          <form
            action="#"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-end"
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Pickup location
              </label>
              <select className="w-full rounded-xl border border-input bg-white px-3.5 py-3 text-sm focus:border-primary focus:outline-none">
                {pickupLocations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Rental dates
              </label>
              <div className="flex items-center gap-1 rounded-xl border border-input px-4 py-2.5">
                <input type="date" className="w-full bg-transparent text-sm outline-none" />
                <CalendarCheck size={16} className="shrink-0 text-muted-foreground" />
                <input type="date" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Vehicle type
              </label>
              <select className="w-full rounded-xl border border-input bg-white px-3.5 py-3 text-sm focus:border-primary focus:outline-none">
                {vehicleTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <Search size={16} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}