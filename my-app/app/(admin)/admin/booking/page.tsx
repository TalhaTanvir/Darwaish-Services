import {
  FaCalendarCheck,
  FaClock,
  FaLocationDot,
  FaPhone,
  FaPlus,
  FaUser,
} from "react-icons/fa6";

const bookings = [
  {
    customer: "Ahmed Khan",
    service: "AC servicing",
    time: "Today, 4:30 PM",
    location: "Satellite Town, Sargodha",
    status: "New",
  },
  {
    customer: "Sara Ali",
    service: "Electrical inspection",
    time: "May 23, 11:00 AM",
    location: "University Road, Sargodha",
    status: "Assigned",
  },
  {
    customer: "Usman Raza",
    service: "Plumbing repair",
    time: "May 24, 2:00 PM",
    location: "Trust Plaza, Sargodha",
    status: "Confirmed",
  },
];

export default function BookingAdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Service requests
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              Booking management
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Track customer requests, appointment times, and assignment status.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <FaPlus className="h-4 w-4" />
            Add booking
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["New requests", "6"],
          ["Assigned", "14"],
          ["Completed", "38"],
        ].map(([label, value]) => (
          <article
            key={label}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950">
              {value}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">
            Recent bookings
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Replace this sample list with live booking records when the data
            source is connected.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {bookings.map((booking) => (
            <article
              key={`${booking.customer}-${booking.time}`}
              className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-base font-semibold text-slate-950">
                    <FaUser className="h-4 w-4 text-slate-400" />
                    {booking.customer}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                    {booking.status}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {booking.service}
                </p>
                <div className="mt-3 grid gap-2 text-sm text-slate-500 sm:grid-cols-2">
                  <span className="inline-flex items-center gap-2">
                    <FaClock className="h-4 w-4" />
                    {booking.time}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FaLocationDot className="h-4 w-4" />
                    {booking.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`Call ${booking.customer}`}
                  title="Call"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50"
                >
                  <FaPhone className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 items-center gap-2 rounded-lg bg-slate-950 px-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <FaCalendarCheck className="h-4 w-4" />
                  Assign
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
