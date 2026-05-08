import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/contact" },
];

const customerSupportLinks = [
  { label: "Help Center", href: "/contact" },
  { label: "Service Areas", href: "/#services" },
  { label: "Booking Guide", href: "/contact" },
  { label: "FAQs", href: "/#faq" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-8">
        <div className="max-w-lg">
          <h3 className="text-4xl font-semibold leading-tight text-white">
            Comfort You Can Feel.
            <br />
            Service You Can Trust.
          </h3>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition hover:bg-slate-200"
          >
            Book now
          </Link>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-white">Customer Support</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {customerSupportLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-white">Social Media</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto w-full max-w-7xl px-4 py-5 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} Darwaish Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

