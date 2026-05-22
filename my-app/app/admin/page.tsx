import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCircleQuestion,
  FaQuoteLeft,
  FaScrewdriverWrench,
} from "react-icons/fa6";

const quickLinks = [
  {
    label: "Review bookings",
    href: "/admin/booking",
    icon: FaCalendarCheck,
    description: "Track customer requests and assign service teams.",
  },
  {
    label: "Update services",
    href: "/admin/services",
    icon: FaScrewdriverWrench,
    description: "Edit service copy, pricing, and featured offers.",
  },
  {
    label: "Manage FAQ",
    href: "/admin/faq",
    icon: FaCircleQuestion,
    description: "Keep customer answers clear and current.",
  },
  {
    label: "Approve testimonials",
    href: "/admin/testimonials",
    icon: FaQuoteLeft,
    description: "Publish trusted customer feedback.",
  },
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Admin overview
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              Darwaish Services dashboard
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Manage bookings, service content, FAQs, and testimonials from one
              focused workspace.
            </p>
          </div>

          <Link
            href="/admin/booking"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Open bookings
            <FaArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Quick actions
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Jump into the main admin workflows.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-[#f8faf8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-slate-950">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-slate-500">
                      {item.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                Recent bookings
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Customer requests will appear here when booking data is
                connected.
              </p>
            </div>
            <Link
              href="/admin/booking"
              className="text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-950 hover:underline"
            >
              View bookings
            </Link>
          </div>

          <div className="mt-5 rounded-lg border border-dashed border-slate-300 bg-[#f8faf8] px-5 py-12 text-center">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-white text-slate-500 ring-1 ring-slate-200">
              <FaCalendarCheck className="h-4 w-4" />
            </span>
            <h4 className="mt-4 text-sm font-semibold text-slate-950">
              No booking data yet
            </h4>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Connect booking records or add a bookings view to populate this
              section with live customer requests.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="text-lg font-semibold text-slate-950">
          Data summaries
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          These areas are ready for live data once the admin pages are wired to
          your data source.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-dashed border-slate-300 bg-[#f8faf8] p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200">
              <FaScrewdriverWrench className="h-4 w-4" />
            </span>
            <h4 className="mt-4 text-sm font-semibold text-slate-950">
              Services
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Service counts, featured items, and update status will appear
              here.
            </p>
          </article>

          <article className="rounded-lg border border-dashed border-slate-300 bg-[#f8faf8] p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200">
              <FaCircleQuestion className="h-4 w-4" />
            </span>
            <h4 className="mt-4 text-sm font-semibold text-slate-950">FAQ</h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              FAQ totals, categories, and draft status will appear here.
            </p>
          </article>

          <article className="rounded-lg border border-dashed border-slate-300 bg-[#f8faf8] p-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-600 ring-1 ring-slate-200">
              <FaQuoteLeft className="h-4 w-4" />
            </span>
            <h4 className="mt-4 text-sm font-semibold text-slate-950">
              Testimonials
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Testimonial totals, approvals, and recent feedback will appear
              here.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
