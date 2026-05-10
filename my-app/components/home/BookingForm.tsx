import { FiChevronDown } from 'react-icons/fi';
import AnimatedButton from '../ui/animated-button';

const serviceTypes = [
  'AC Maintenance',
  'Electrical Work',
  'Plumbing Service',
  'General Repair',
  'Installation Service',
];

function BookingForm() {
  return (
    <section className="relative z-20 -mt-24 px-4 pb-14 sm:px-6 lg:-mt-28 lg:px-8">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 shadow-[0_24px_70px_-28px_rgba(2,6,23,0.45)] backdrop-blur">
        <div className="px-6 py-7 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
                Quick Booking
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Book a Service
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share your service details and our team will contact you shortly.
              </p>
          </div>

          <form className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">WhatsApp Number</span>
              <div className="flex h-14 items-center rounded-2xl border border-slate-200 bg-white px-4 focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-200">
                <span className="mr-3 text-sm font-semibold text-slate-500">PK +92</span>
                <input
                  type="tel"
                  placeholder="3XX XXXXXXX"
                  className="h-full w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>
            </label>

            <label className="relative space-y-2">
              <span className="text-sm font-medium text-slate-700">Service Type</span>
              <select className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-11 text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200">
                <option value="">Choose service</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <FiChevronDown className="pointer-events-none absolute right-4 top-[3.05rem] h-5 w-5 text-slate-500" />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-700">Location / Area</span>
              <input
                type="text"
                placeholder="e.g. DHA Phase 6, Lahore"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-slate-700">Problem Details (Optional)</span>
              <textarea
                placeholder="Briefly describe the issue so our team can prepare before arrival."
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <AnimatedButton
              type="submit"
              label="Request Service"
              className="md:col-span-2 mt-2 justify-self-center"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
