
import {
  FiAward,
  FiClock,
  FiShield,
  FiUsers,
} from 'react-icons/fi';

const highlights = [
  {
    icon: FiShield,
    title: 'Certified Teams',
    description:
      'Trained specialists follow safety-first protocols and quality standards on every site visit.',
  },
  {
    icon: FiClock,
    title: 'Fast Turnaround',
    description:
      'From inspection to execution, our process is designed to reduce downtime and keep operations moving.',
  },
  {
    icon: FiAward,
    title: 'Reliable Quality',
    description:
      'We use proven materials, transparent checklists, and post-work verification to ensure durable results.',
  },
  {
    icon: FiUsers,
    title: 'Clear Communication',
    description:
      'You get consistent updates, practical recommendations, and a single point of contact throughout.',
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Built for Quality, Speed, and Long-Term Trust
            </h2>
            <p className="mt-5 max-w-xl text-sm text-slate-600 sm:text-base">
              We combine practical field experience with modern project
              discipline to deliver dependable service outcomes across
              residential, commercial, and industrial needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-sky-300"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200 bg-sky-50 text-sky-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
