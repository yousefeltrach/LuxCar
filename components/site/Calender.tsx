import { CalendarCheck, Search } from "lucide-react";

const pickupLocations = [
  "Select a location",
  "Marrakech-Menara Airport",
  "Marrakech Medina",
  "Gueliz",
  "Palmeraie",
];

const vehicleTypes = ["Any type", "Compact cars", "Economy", "SUV"];

export function Calender() {
  return (
    <div className="relative z-20 mx-auto -mt-40 max-w-6xl px-4 sm:-mt-24 lg:-mt-20">
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
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
              />
              <CalendarCheck size={16} className="shrink-0 text-muted-foreground" />
              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
              />
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
  );
}