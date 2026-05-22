import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaChartLine,
  FaCheck,
  FaClockRotateLeft,
  FaEnvelope,
  FaLock,
  FaShieldHalved,
} from "react-icons/fa6";

const adminSignals = [
  { label: "System status", value: "Operational", icon: FaCheck },
  { label: "Last sync", value: "5 mins ago", icon: FaClockRotateLeft },
  { label: "Protection", value: "2FA ready", icon: FaShieldHalved },
];

export default function Login() {
  return (
    <main className="min-h-screen bg-[#f4f2ee] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-[#d9d3c8] bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-[#fbfaf7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <Image
              src="/Darwaish Logo.png"
              alt="Darwaish Services"
              width={34}
              height={34}
              className="h-8 w-8 rounded-full object-contain"
            />
            Darwaish Services
          </Link>

          <div className="mt-8 rounded-[2rem] border border-[#d9d3c8] bg-white p-6 shadow-[0_24px_70px_-36px_rgba(15,23,42,0.45)] sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7c6b56]">
                Admin Portal
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Welcome back
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sign in to manage bookings, technician schedules, customer
                requests, and daily service operations.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  Email address
                </span>
                <span className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-[#fbfaf7] px-4 transition focus-within:border-slate-900 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-200">
                  <FaEnvelope className="h-4 w-4 shrink-0 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="admin@darwaishservices.com"
                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                  />
                </span>
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">
                  Password
                </span>
                <span className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-[#fbfaf7] px-4 transition focus-within:border-slate-900 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-200">
                  <FaLock className="h-4 w-4 shrink-0 text-slate-500" />
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter password"
                    className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                  />
                </span>
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="inline-flex items-center gap-2 font-medium text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-slate-950 focus:ring-slate-900"
                  />
                  Remember me
                </label>
                <Link
                  href="/admin/auth/forgot-password"
                  className="font-semibold text-slate-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 text-sm font-semibold text-white shadow-[0_18px_36px_-24px_rgba(2,6,23,0.9)] transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Sign in
                <FaArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>

        <aside className="relative hidden min-h-[680px] overflow-hidden rounded-[2rem] border border-[#d9d3c8] bg-slate-950 p-8 text-white shadow-[0_28px_90px_-42px_rgba(15,23,42,0.75)] lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,23,42,0.98),rgba(31,41,55,0.94)_48%,rgba(16,84,96,0.88))]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 ring-1 ring-white/15">
                <FaChartLine className="h-5 w-5" />
              </span>
              <h2 className="mt-8 max-w-md text-4xl font-semibold leading-tight tracking-tight">
                Control daily service operations with clarity.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Review bookings, assign teams, monitor availability, and keep
                customer follow-ups moving from one focused dashboard.
              </p>
            </div>

            <div className="grid gap-3">
              {adminSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div
                    key={signal.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 backdrop-blur"
                  >
                    <span className="inline-flex items-center gap-3 text-sm font-medium text-slate-200">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      {signal.label}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {signal.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
