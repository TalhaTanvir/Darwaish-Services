import {
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaPenToSquare,
  FaPlus,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const services = [
  {
    title: "Home Electrical Services",
    description: "Wiring, lighting, switches, sockets, and safety checks.",
    status: "Published",
  },
  {
    title: "Plumbing & Water Systems",
    description: "Leak repair, fittings, tanks, and water-line maintenance.",
    status: "Published",
  },
  {
    title: "HVAC Care",
    description: "AC servicing, filter checks, and performance optimization.",
    status: "Draft",
  },
  {
    title: "Commercial Maintenance",
    description: "Routine inspections and priority response for businesses.",
    status: "Published",
  },
];

export default function ServicesAdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Website catalog
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              Service management
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Manage the service categories, summaries, and publish status shown
              on the public services page.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <FaPlus className="h-4 w-4" />
            Add service
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Total services", value: "4", icon: FaScrewdriverWrench },
          { label: "Published", value: "3", icon: FaCircleCheck },
          { label: "Needs review", value: "1", icon: FaPenToSquare },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    service.status === "Published"
                      ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                      : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                  }`}
                >
                  {service.status}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">
                  {service.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label={`Edit ${service.title}`}
                title="Edit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
              >
                <FaPenToSquare className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {service.description}
            </p>
            <a
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-slate-950 hover:underline"
            >
              View public page
              <FaArrowUpRightFromSquare className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
