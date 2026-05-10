import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

const services = [
  {
    title: "Home Electrical Services",
    description:
      "Safe wiring, fixture installation, and quick troubleshooting for everyday home needs.",
    points: ["Switches and sockets", "Lighting upgrades", "Safety checks"],
  },
  {
    title: "Plumbing & Water Systems",
    description:
      "From leak repairs to pipeline work, we handle jobs with clean finishes and durable results.",
    points: ["Leak detection", "Bathroom fittings", "Tank and line maintenance"],
  },
  {
    title: "HVAC Care",
    description:
      "Reliable cooling and heating support to keep your space comfortable in every season.",
    points: ["AC servicing", "Filter and airflow checks", "Performance optimization"],
  },
  {
    title: "Commercial Maintenance",
    description:
      "Planned and on-call maintenance support for offices, shops, and commercial properties.",
    points: ["Routine inspections", "Priority response", "Maintenance reporting"],
  },
];

const processSteps = [
  {
    title: "Share your requirement",
    text: "Tell us the issue or project details through a quick message or call.",
  },
  {
    title: "Get a clear plan",
    text: "We recommend the right scope, timeline, and service approach for your needs.",
  },
  {
    title: "Execution by experts",
    text: "Our team completes the work carefully with quality checks before handover.",
  },
];

export default function Page() {
  return (
    <main className="bg-[#f4f2ee] pb-20">
      <PageBanner
        title="Our Services"
        imageSrc="/images/Hero1.png"
        imageAlt="Services hero"
      />

      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#d9d3c8] bg-white">
          <div className="grid gap-6 p-7 sm:p-9 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7c6b56]">
                Professional Support
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1f2937] sm:text-5xl">
                Modern solutions for
                <span className="block">homes and businesses</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4b5563]">
                We provide dependable technical services with a practical,
                transparent approach. Every project is handled with attention to
                detail, clear communication, and long-term reliability in mind.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1f2937] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Book a service
                  <FaArrowRightLong className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-[#c7bfb3] bg-[#fff] px-6 py-3 text-sm font-semibold text-[#1f2937] transition hover:border-[#1f2937]"
                >
                  Why choose us
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e8e1d7] bg-[#f9f7f3] p-6">
              <h2 className="text-xl font-semibold text-[#1f2937]">
                Service Promise
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Skilled technicians on every visit",
                  "Transparent recommendations and pricing",
                  "Respectful, clean, and timely work",
                  "Support after project completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#dfe9dd] text-[#1f2937]">
                      <FaCheck className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-[#4b5563]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-[#1f2937] sm:text-4xl">
          What we do best
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#4b5563]">
          A focused set of services designed for performance, safety, and
          smooth day-to-day operation.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#d9d3c8] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-[#1f2937]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#374151]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1f2937]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#d9d3c8] bg-[#dfe9dd] p-7 sm:p-9">
          <h2 className="text-3xl font-semibold text-[#1f2937] sm:text-4xl">
            How we work
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-[#c7d7c5] bg-white/85 p-5 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-[#1f2937]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
