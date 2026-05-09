const areas = [
  "Gulshan-e-Iqbal",
  "PECHS",
  "DHA",
  "Clifton",
  "North Nazimabad",
  "Scheme 33",
  "Korangi Industrial Area",
  "Saddar",
];

function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
              Service Area
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Reliable On-Site Support Across Karachi
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Our response teams are positioned to cover residential,
              commercial, and industrial requests with practical timelines and
              clear coordination.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured Locations
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
