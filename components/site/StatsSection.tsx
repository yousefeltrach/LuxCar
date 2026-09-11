const stats = [
  { value: "10+", label: "Cars in the fleet" },
  { value: "50+", label: "Happy clients" },
  { value: "4.9/5", label: "Average rating" },
  { value: "24/7", label: "Support available" },
];

export function StatsSection() {
  return (
    <section className="border-b bg-muted/30 py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-center font-display text-3xl font-semibold lg:text-4xl">
                {value}
              </div>
              <div className="mt-1 text-center text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}