import Link from "next/link";

function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-700 via-cyan-700 to-emerald-700 p-8 text-white shadow-[0_18px_60px_rgba(2,132,199,0.35)] sm:p-12">
          <p className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em]">
            Get Started
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s Plan Your Next Technical Service Project
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
            Share your requirement and our team will get back with a practical
            plan, timeline, and transparent quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
