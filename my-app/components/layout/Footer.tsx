import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Gmail", href: "mailto:darwaish@gmail.com", icon: FaEnvelope },
  { label: "WhatsApp", href: "https://wa.me/97333337788", icon: FaWhatsapp },
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

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:border-white hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

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
          <h4 className="text-2xl font-semibold text-white">Address</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>Building 245, Road 3901, Block 339, Manama, Bahrain</p>
            <p>+973 3333 7788</p>
            <p>darwaish@gmail.com</p>
          </div>
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
