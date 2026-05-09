const testimonials = [
  {
    quote:
      "Darwaish Services handled our facility upgrade with zero delays. Their coordination and execution were excellent.",
    name: "Aamir Siddiqui",
    role: "Operations Manager",
  },
  {
    quote:
      "From the first inspection to final handover, the team stayed transparent and delivered exactly what was promised.",
    name: "Hina Fatima",
    role: "Property Owner",
  },
  {
    quote:
      "We signed an annual maintenance plan and response time has been consistently fast and professional.",
    name: "Usman Khalid",
    role: "Admin Lead",
  },
];

function Testimonilas() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
            Testimonials
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Trusted by Homeowners and Businesses
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm leading-relaxed text-slate-600">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <p className="text-base font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonilas;
