import { FiHelpCircle, FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We support homes, offices, retail units, and light industrial facilities with customized scopes.",
  },
  {
    question: "Can I request emergency support?",
    answer:
      "Yes, we provide fast-response support for urgent maintenance issues based on location and team availability.",
  },
  {
    question: "Do you provide maintenance contracts?",
    answer:
      "We offer monthly and annual maintenance plans that include preventive checks and priority service response.",
  },
  {
    question: "How do quotations work?",
    answer:
      "After assessment, we share a transparent quote covering scope, materials, timeline, and execution milestones.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Answers to Common Questions
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Everything you need to know before getting started with our team.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(2,6,23,0.06)] transition duration-300 open:border-sky-300"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-slate-900 marker:content-none">
                <span className="flex items-center gap-3">
                  <FiHelpCircle className="h-5 w-5 text-sky-700" />
                  <span>{item.question}</span>
                </span>
                <span className="relative h-6 w-6 shrink-0">
                  <FiPlus className="absolute inset-0 h-6 w-6 transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                  <FiX className="absolute inset-0 h-6 w-6 opacity-0 transition-all duration-300 group-open:opacity-100" />
                </span>
              </summary>
              <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
