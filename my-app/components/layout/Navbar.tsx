
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

function Navbar() {
  const [isCompact, setIsCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCompact(latest > 50);
  });

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: 0,
        paddingBottom: isCompact ? 10 : 18,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      <motion.nav
        initial={false}
        animate={{
          width: isCompact ? "92%" : "100%",
          borderRadius: isCompact ? 20 : 0,
          backgroundColor: isCompact
            ? "rgba(255,255,255,0.70)"
            : "rgba(255,255,255,0.88)",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-4 backdrop-blur-xl sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center self-center">
          <motion.span
            initial={false}
            animate={{
              height: isCompact ? 64 : 80,
              width: isCompact ? 224 : 288,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative block overflow-hidden sm:h-24 sm:w-80"
          >
            <Image
              src="/Darwaish Logo.png"
              alt="Darwaish Services Logo"
              width={560}
              height={170}
              priority
              className="h-full w-auto object-contain"
            />
          </motion.span>
        </Link>

        <ul className="hidden items-center self-center justify-self-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  className="group relative inline-block text-base font-semibold tracking-[0.01em] text-slate-700 transition-colors duration-300 hover:text-slate-950"
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-slate-900 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="hidden justify-self-end lg:block"
        >
          <Link
          href="/get-quote"
          className="self-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700"
        >
          Get Quote
          </Link>
        </motion.div>

        <div className="col-start-3 justify-self-end lg:hidden">
          <MobileNav />
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;
