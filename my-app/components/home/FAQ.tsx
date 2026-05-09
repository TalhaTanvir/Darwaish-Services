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
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-neutral-300 bg-neutral-100 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Answers to Common Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
            >
              <summary className="cursor-pointer list-none text-left text-base font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
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
