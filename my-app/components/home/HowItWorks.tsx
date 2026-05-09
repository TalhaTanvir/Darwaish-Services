
import { FiCheckCircle, FiClipboard, FiSearch, FiTool } from 'react-icons/fi';

const steps = [
  {
    icon: FiSearch,
    title: 'Site Assessment',
    description:
      'We inspect your location, identify pain points, and document technical requirements before work begins.',
  },
  {
    icon: FiClipboard,
    title: 'Plan & Quote',
    description:
      'You receive a clear scope, timeline, and cost breakdown so decisions can be made with confidence.',
  },
  {
    icon: FiTool,
    title: 'Execution',
    description:
      'Our team completes the job with strict quality controls, safety checks, and real-time coordination.',
  },
  {
    icon: FiCheckCircle,
    title: 'Handover & Support',
    description:
      'Final verification, cleanup, and ongoing support ensure performance remains stable after delivery.',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            A Structured Process from First Call to Final Delivery
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Our workflow is simple, transparent, and engineered to keep your
            project on track at every stage.
          </p>
        </div>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-sky-300"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Step {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
