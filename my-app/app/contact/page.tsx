import PageBanner from "@/components/common/PageBanner";

export default function Page() {
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54089.714771444655!2d72.6859776!3d32.079872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177a60e8fe7b3%3A0xbeae922e99d0200e!2sTrust%20Plaza%20Sargodha!5e0!3m2!1sen!2s!4v1778368016240!5m2!1sen!2s";
  const isValidGoogleEmbed = mapEmbedSrc.startsWith(
    "https://www.google.com/maps/embed"
  );

  return (
    <main className="bg-[#f3f3f3] pb-16">
      <PageBanner
        title="Contact Us"
        imageSrc="/images/Hero1.png"
        imageAlt="Contact us hero"
      />

      <section className="mx-auto mt-12 grid w-full max-w-7xl grid-cols-1 border border-[#d9d9d9] bg-white lg:grid-cols-2">
        <div className="border-b border-[#d9d9d9] px-6 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-16">
          <h2 className="text-3xl font-semibold leading-tight text-[#0f172a] sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#4b5563] sm:text-lg">
            We are available for questions, feedback, or collaboration
            opportunities. Let us know how we can help!
          </p>

          {/* <div className="mt-14 lg:mt-28">
            <h3 className="text-2xl font-semibold text-[#0f172a] sm:text-3xl">
              Contact Details
            </h3>
            <div className="mt-5 space-y-2 text-base leading-relaxed text-[#111827]">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+112334567890" className="hover:underline">
                  (123) 34567890
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:email@example.com"
                  className="underline underline-offset-2"
                >
                  email@example.com
                </a>
              </p>
            </div>
          </div> */}
        </div>

        <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <form className="space-y-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm text-[#111827] outline-none transition focus:border-[#111827]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold text-[#111827]"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm text-[#111827] outline-none transition focus:border-[#111827]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#111827]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm text-[#111827] outline-none transition focus:border-[#111827]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-[#111827]"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm text-[#111827] outline-none transition focus:border-[#111827]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-[#111827]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message here."
                rows={5}
                className="w-full resize-none rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#111827]"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#101114] text-base font-semibold text-white transition hover:bg-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="rounded-2xl border border-white/40 bg-white/70 p-4 shadow-sm backdrop-blur-md transition-all duration-300 sm:p-6">
          <h2 className="text-2xl font-semibold text-[#0f172a]">Find Us</h2>
          <p className="mt-2 text-sm text-[#4b5563]">
            Visit our shop location on the map below.
          </p>

          <div className="mt-5 overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5">
            <div className="relative w-full pb-[56.25%]">
              {isValidGoogleEmbed ? (
                <iframe
                  src={mapEmbedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Google Maps Location"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-[#f8fafc] px-6 text-center text-sm text-[#64748b]">
                  Add a valid Google Maps embed URL to `mapEmbedSrc`.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
