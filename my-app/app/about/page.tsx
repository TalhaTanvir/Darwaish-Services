import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/common/PageBanner";
import { FaArrowRightLong } from "react-icons/fa6";

const highlights = [
  {
    title: "Built on trust",
    text: "Most of our work comes from returning customers and word-of-mouth referrals.",
  },
  {
    title: "People-first team",
    text: "We focus on clear communication, respectful service, and practical solutions.",
  },
  {
    title: "Consistent quality",
    text: "From small visits to larger projects, we follow the same quality standards.",
  },
];

const numbers = [
  { value: "12+", label: "Years in service" },
  { value: "10,000+", label: "Completed visits" },
  { value: "4.9/5", label: "Average rating" },
  { value: "24/7", label: "Support availability" },
];

export default function Page() {
  return (
    <main className="bg-[#f4f2ee] pb-20">
      <PageBanner
        title="About Us"
        imageSrc="/images/Hero1.png"
        imageAlt="About us hero"
      />

      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-3xl border border-[#d9d3c8] bg-[#fffdf9] p-7 shadow-sm sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c6b56]">
              Our Story
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1f2937] sm:text-4xl">
              Service that feels personal,
              <span className="block">not transactional</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#4b5563]">
              Darwaish Services started with a simple idea: people should feel
              confident when they invite a service team into their home or
              business. We built our company around reliability, honest advice,
              and work that lasts.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Today, we continue that same approach with skilled technicians,
              responsive support, and a commitment to doing things the right way
              every time.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f2937] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Talk to our team
                <FaArrowRightLong className="h-4 w-4" />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center rounded-full border border-[#c7bfb3] bg-[#fff] px-6 py-3 text-sm font-semibold text-[#1f2937] transition hover:border-[#1f2937]"
              >
                View services
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-[#d9d3c8] bg-white shadow-sm">
            <div className="relative h-72 w-full sm:h-80 lg:h-full lg:min-h-[28rem]">
              <Image
                src="/images/AboutPic.png"
                alt="Darwaish Services team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#dfe9dd] sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((item) => (
            <article
              key={item.label}
              className="border-b border-[#c3d0c2] px-6 py-7 sm:border-r sm:border-b-0 lg:last:border-r-0"
            >
              <p className="text-3xl font-semibold text-[#1f2937]">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-[#4b5563]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#d9d3c8] bg-white p-7 shadow-sm sm:p-9">
          <h2 className="text-3xl font-semibold text-[#1f2937]">What defines us</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e7e2da] bg-[#f9f7f3] p-5"
              >
                <h3 className="text-xl font-semibold text-[#1f2937]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
