import {
  FaCircleCheck,
  FaEye,
  FaQuoteLeft,
  FaRegClock,
  FaStar,
  FaTrashCan,
} from "react-icons/fa6";

const testimonials = [
  {
    name: "M. Hassan",
    quote:
      "The team arrived on time, explained the issue clearly, and completed the AC service neatly.",
    rating: 5,
    status: "Pending",
  },
  {
    name: "Ayesha Malik",
    quote:
      "Professional electrical repair with transparent pricing and very respectful communication.",
    rating: 5,
    status: "Approved",
  },
  {
    name: "Bilal Ahmed",
    quote:
      "Their plumbing support was quick, clean, and exactly what we needed for our office.",
    rating: 4,
    status: "Approved",
  },
];

export default function TestimonialsAdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Social proof
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
          Testimonials
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Review customer feedback before publishing it on the public website.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Pending review", value: "4", icon: FaRegClock },
          { label: "Approved", value: "18", icon: FaCircleCheck },
          { label: "Average rating", value: "4.9", icon: FaStar },
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

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Review queue
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Approve strong customer quotes and remove anything unsuitable.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {testimonials.map((item) => (
            <article
              key={`${item.name}-${item.quote}`}
              className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[auto_1fr_auto]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                <FaQuoteLeft className="h-4 w-4" />
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-base font-semibold text-slate-950">
                    {item.name}
                  </h4>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      item.status === "Approved"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                        : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="mt-2 flex gap-1 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <FaStar key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.quote}
                </p>
              </div>

              <div className="flex items-center gap-2 lg:justify-end">
                <button
                  type="button"
                  aria-label={`Preview testimonial from ${item.name}`}
                  title="Preview"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
                >
                  <FaEye className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label={`Delete testimonial from ${item.name}`}
                  title="Delete"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-100 text-red-600 transition hover:bg-red-50"
                >
                  <FaTrashCan className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
