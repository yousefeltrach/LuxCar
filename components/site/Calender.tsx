"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, CalendarCheck, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "cn";

const pickupLocations = [
  "Select a location",
  "Marrakech-Menara Airport",
  "Marrakech Medina",
  "Gueliz",
  "Palmeraie",
];

const vehicleTypes = ["Any type", "Compact cars", "Economy", "SUV"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function toISO(date: Date | null) {
  if (!date) return "";
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function formatDMY(date: Date | null) {
  if (!date) return "";
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()}`;
}

function maskDMY(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  let masked = digits.slice(0, 2);
  if (digits.length > 2) masked += `/${digits.slice(2, 4)}`;
  if (digits.length > 4) masked += `/${digits.slice(4, 8)}`;
  return masked;
}

function parseDMY(value: string) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return null;
  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  const date = new Date(year, month - 1, day);
  if (
    date.getDate() !== day ||
    date.getMonth() !== month - 1 ||
    date.getFullYear() !== year
  ) {
    return null;
  }
  return startOfDay(date);
}

function buildMonthCells(month: Date) {
  const year = month.getFullYear();
  const firstWeekday = (new Date(year, month.getMonth(), 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = Array.from(
    { length: firstWeekday },
    () => null,
  );
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month.getMonth(), day));
  }
  return cells;
}

type CalendarMonthProps = {
  month: Date;
  start: Date | null;
  end: Date | null;
  today: Date;
  onPick: (day: Date) => void;
  nav: {
    side: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
  };
};

function CalendarMonth({
  month,
  start,
  end,
  today,
  onPick,
  nav,
}: CalendarMonthProps) {
  const cells = buildMonthCells(month);
  const title = `${MONTH_NAMES[month.getMonth()]} ${month.getFullYear()}`;

  const navButton = (
    <button
      type="button"
      onClick={nav.onClick}
      disabled={nav.disabled}
      aria-label={nav.side === "prev" ? "Previous month" : "Next month"}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
    >
      {nav.side === "prev" ? (
        <ChevronLeft className="size-4" />
      ) : (
        <ChevronRight className="size-4" />
      )}
    </button>
  );

  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-2">
        {nav.side === "prev" ? (
          <>
            {navButton}
            <h4 className="text-sm font-semibold text-black">{title}</h4>
          </>
        ) : (
          <>
            <h4 className="text-sm font-semibold text-black">{title}</h4>
            {navButton}
          </>
        )}
      </div>

      <div className="grid grid-cols-7">
        {WEEKDAYS.map((weekday) => (
          <div
            key={weekday}
            className="flex h-8 items-center justify-center text-[11px] font-medium text-muted-foreground"
          >
            {weekday}
          </div>
        ))}

        {cells.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} />;

          const isPast = day < today;
          const isStart = !!start && day.getTime() === start.getTime();
          const isEnd = !!end && day.getTime() === end.getTime();
          const inRange = !!start && !!end && day > start && day < end;
          const isEndpoint = isStart || isEnd;
          const isToday = day.getTime() === today.getTime();

          return (
            <button
              key={toISO(day)}
              type="button"
              disabled={isPast}
              onClick={() => onPick(day)}
              aria-label={day.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              aria-pressed={isEndpoint}
              className={cn(
                "flex h-9 w-full items-center justify-center rounded-full text-[13px] transition-colors",
                isPast && "cursor-not-allowed text-muted-foreground/40",
                !isPast && !inRange && !isEndpoint && "hover:bg-muted",
                inRange && "bg-primary/10 hover:bg-primary/15",
                isEndpoint &&
                  "bg-primary font-semibold text-white hover:bg-primary/90",
                isToday && !isEndpoint && "ring-1 ring-inset ring-primary/40",
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RentalDatesField() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const todayMonth = useMemo(() => startOfMonth(today), [today]);

  const [open, setOpen] = useState(false);
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const [view, setView] = useState<Date>(todayMonth);
  const [editing, setEditing] = useState<"pickup" | "return" | null>(null);
  const [draft, setDraft] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const toggleOpen = () => {
    if (!open) {
      setView(start ? startOfMonth(start) : todayMonth);
    }
    setOpen(!open);
  };

  const pickDay = (day: Date) => {
    if (!start || end) {
      setStart(day);
      setEnd(null);
      return;
    }
    if (day < start) {
      setStart(day);
      return;
    }
    setEnd(day);
  };

  const commitPickup = (next: Date | null) => {
    if (!next) {
      setStart(null);
      setEnd(null);
      return;
    }
    if (end && next > end) {
      setStart(end);
      setEnd(next);
      return;
    }
    setStart(next);
  };

  const commitReturn = (next: Date | null) => {
    if (!next) {
      setEnd(null);
      return;
    }
    if (start && next < start) {
      setEnd(start);
      setStart(next);
      return;
    }
    setEnd(next);
  };

  const handlePickupChange = (value: string) => {
    const masked = maskDMY(value);
    setEditing("pickup");
    setDraft(masked);
    if (masked === "") {
      commitPickup(null);
      return;
    }
    const next = parseDMY(masked);
    if (next && next >= today) commitPickup(next);
  };

  const handleReturnChange = (value: string) => {
    const masked = maskDMY(value);
    setEditing("return");
    setDraft(masked);
    if (masked === "") {
      commitReturn(null);
      return;
    }
    const next = parseDMY(masked);
    if (next && next >= today) commitReturn(next);
  };

  const clearAll = () => {
    setStart(null);
    setEnd(null);
  };

  const pickupValue = editing === "pickup" ? draft : formatDMY(start);
  const returnValue = editing === "return" ? draft : formatDMY(end);
  const parsedPickup = parseDMY(pickupValue);
  const parsedReturn = parseDMY(returnValue);
  const pickupInvalid =
    pickupValue.length === 10 && (!parsedPickup || parsedPickup < today);
  const returnInvalid =
    returnValue.length === 10 &&
    (!parsedReturn || parsedReturn < today || (!!start && parsedReturn < start));

  const days =
    start && end
      ? Math.max(
          1,
          Math.round((end.getTime() - start.getTime()) / 86_400_000),
        )
      : 0;

  const statusText =
    days > 0
      ? `${days} ${days === 1 ? "day" : "days"} selected`
      : start
        ? "Now choose your return date"
        : "Pick dates on the calendar or type them below";

  const canPrev = view.getTime() > todayMonth.getTime();
  const canNext = view.getTime() < addMonths(todayMonth, 11).getTime();

  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-black">
        Rental dates
      </label>

      <div className="relative" ref={wrapperRef}>
        <button
          type="button"
          onClick={toggleOpen}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl border border-input bg-white px-4 py-3 text-left transition-colors focus:border-primary focus:outline-none",
            open && "border-primary",
          )}
        >
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-sm",
              start ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {start ? formatDMY(start) : "Pickup date"}
          </span>
          <ArrowRight size={16} className="shrink-0 text-muted-foreground" />
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-sm",
              end ? "text-foreground" : "text-muted-foreground",
            )}
          >
            {end ? formatDMY(end) : "Return date"}
          </span>
          <CalendarCheck size={16} className="shrink-0 text-muted-foreground" />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Choose rental dates"
            className="absolute bottom-full left-0 z-50 mb-2 max-h-[calc(100vh-8rem)] w-[min(38rem,calc(100vw-3rem))] overflow-y-auto rounded-2xl border border-input bg-white p-4 shadow-2xl shadow-black/20"
          >
            <div className="grid grid-cols-2 gap-3 border-b border-input pb-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-black">
                  Pickup date
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="dd/mm/yyyy"
                  maxLength={10}
                  value={pickupValue}
                  onChange={(event) => handlePickupChange(event.target.value)}
                  onBlur={() => setEditing(null)}
                  className={cn(
                    "w-full rounded-xl border border-input bg-white px-3 py-2.5 text-sm text-muted-foreground focus:border-primary focus:outline-none",
                    pickupInvalid && "border-destructive focus:border-destructive",
                  )}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-black">
                  Return date
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="dd/mm/yyyy"
                  maxLength={10}
                  value={returnValue}
                  onChange={(event) => handleReturnChange(event.target.value)}
                  onBlur={() => setEditing(null)}
                  className={cn(
                    "w-full rounded-xl border border-input bg-white px-3 py-2.5 text-sm text-muted-foreground focus:border-primary focus:outline-none",
                    returnInvalid && "border-destructive focus:border-destructive",
                  )}
                />
              </label>
            </div>

            <div className="grid gap-x-6 pt-4 md:grid-cols-2">
              <CalendarMonth
                month={view}
                start={start}
                end={end}
                today={today}
                onPick={pickDay}
                nav={{
                  side: "prev",
                  onClick: () => setView(addMonths(view, -1)),
                  disabled: !canPrev,
                }}
              />
              <CalendarMonth
                month={addMonths(view, 1)}
                start={start}
                end={end}
                today={today}
                onPick={pickDay}
                nav={{
                  side: "next",
                  onClick: () => setView(addMonths(view, 1)),
                  disabled: !canNext,
                }}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-input pt-3">
              <p className="text-xs text-muted-foreground">{statusText}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearAll}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Calender() {
  return (
    <div className="relative z-20 mx-auto -mt-40 max-w-6xl px-4 sm:-mt-24 lg:-mt-20">
      <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 md:p-8">
        <form
          action="#"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end"
        >
          <div>
            <label className="mb-1.5 block text-xs font-medium text-black">
              Pickup location
            </label>
            <select className="w-full rounded-xl border border-input text-muted-foreground bg-white px-3.5 py-3 text-sm focus:border-primary focus:outline-none">
              {pickupLocations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="lg:col-span-2">
            <RentalDatesField />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-black">
              Vehicle type
            </label>
            <select className="w-full rounded-xl border border-input text-muted-foreground bg-white px-3.5 py-3 text-sm focus:border-primary focus:outline-none">
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
