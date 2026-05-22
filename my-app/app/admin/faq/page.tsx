import {
  FaCircleCheck,
  FaCircleQuestion,
  FaEye,
  FaGripVertical,
  FaPenToSquare,
  FaPlus,
  FaRegClock,
  FaRegTrashCan,
} from "react-icons/fa6";

const faqs = [
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We support homes, offices, retail units, and light industrial facilities with customized scopes.",
    category: "General",
    status: "Published",
    updated: "May 22, 2026",
  },
  {
    question: "Can I request emergency support?",
    answer:
      "Yes, we provide fast-response support for urgent maintenance issues based on location and team availability.",
    category: "Bookings",
    status: "Published",
    updated: "May 20, 2026",
  },
  {
    question: "Do you provide maintenance contracts?",
    answer:
      "We offer monthly and annual maintenance plans that include preventive checks and priority service response.",
    category: "Services",
    status: "Draft",
    updated: "May 18, 2026",
  },
  {
    question: "How do quotations work?",
    answer:
      "After assessment, we share a transparent quote covering scope, materials, timeline, and execution milestones.",
    category: "Pricing",
    status: "Published",
    updated: "May 16, 2026",
  },
];

const stats = [
  { label: "Total questions", value: "12", icon: FaCircleQuestion },
  { label: "Published", value: "9", icon: FaCircleCheck },
  { label: "Drafts", value: "3", icon: FaRegClock },
];

export default function FAQAdminPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Customer help content
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950 sm:text-3xl">
              FAQ management
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Keep public answers clear, searchable, and ready for customers
              before they book a service.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <FaPlus className="h-4 w-4" />
            New FAQ
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">
                    {item.value}
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-950">
                Question library
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Review, publish, and organize the FAQs shown on the website.
              </p>
            </div>

            <select
              aria-label="Filter FAQ category"
              className="h-10 rounded-lg border border-slate-200 bg-[#f8faf8] px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              defaultValue="all"
            >
              <option value="all">All categories</option>
              <option value="general">General</option>
              <option value="bookings">Bookings</option>
              <option value="services">Services</option>
              <option value="pricing">Pricing</option>
            </select>
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((item, index) => (
              <article
                key={item.question}
                className="grid gap-4 p-5 transition hover:bg-[#f8faf8] sm:p-6 lg:grid-cols-[auto_1fr_auto]"
              >
                <button
                  type="button"
                  aria-label={`Reorder ${item.question}`}
                  title="Reorder"
                  className="hidden h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-slate-700 lg:inline-flex"
                >
                  <FaGripVertical className="h-4 w-4" />
                </button>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {item.category}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        item.status === "Published"
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                          : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      #{index + 1}
                    </span>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-slate-950">
                    {item.question}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.answer}
                  </p>
                  <p className="mt-3 text-xs font-medium text-slate-400">
                    Updated {item.updated}
                  </p>
                </div>

                <div className="flex items-center gap-2 lg:justify-end">
                  <button
                    type="button"
                    aria-label={`Preview ${item.question}`}
                    title="Preview"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >
                    <FaEye className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Edit ${item.question}`}
                    title="Edit"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                  >
                    <FaPenToSquare className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${item.question}`}
                    title="Delete"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-100 bg-white text-red-600 transition hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                  >
                    <FaRegTrashCan className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-slate-950">FAQ editor</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            Draft a new answer or update the selected question.
          </p>

          <form className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="faqQuestion"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Question
              </label>
              <input
                id="faqQuestion"
                type="text"
                placeholder="What should customers know?"
                className="h-11 w-full rounded-lg border border-slate-200 bg-[#f8faf8] px-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              />
            </div>

            <div>
              <label
                htmlFor="faqCategory"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Category
              </label>
              <select
                id="faqCategory"
                className="h-11 w-full rounded-lg border border-slate-200 bg-[#f8faf8] px-3 text-sm text-slate-950 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
                defaultValue="General"
              >
                <option>General</option>
                <option>Bookings</option>
                <option>Services</option>
                <option>Pricing</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="faqAnswer"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Answer
              </label>
              <textarea
                id="faqAnswer"
                rows={7}
                placeholder="Write a clear, helpful answer."
                className="w-full resize-none rounded-lg border border-slate-200 bg-[#f8faf8] px-3 py-3 text-sm leading-6 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-100"
              />
            </div>

            <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-[#f8faf8] p-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-slate-950"
                defaultChecked
              />
              <span>
                <span className="block text-sm font-semibold text-slate-800">
                  Publish on website
                </span>
                <span className="mt-1 block text-sm leading-5 text-slate-500">
                  Show this answer in the public FAQ section after saving.
                </span>
              </span>
            </label>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <button
                type="button"
                className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Save draft
              </button>
              <button
                type="submit"
                className="h-11 rounded-lg bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Publish FAQ
              </button>
            </div>
          </form>
        </aside>
      </section>
    </div>
  );
}
