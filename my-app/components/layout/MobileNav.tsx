
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-end pr-1">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative z-[60] inline-flex h-12 w-12 items-center justify-center rounded-md ${
            open ? "text-neutral-500" : "text-slate-900"
          }`}
        >
          <MenuToggleIcon open={open} className="h-8 w-8" />
        </button>
      </div>

      {open && (
        <nav className="fixed inset-0 z-[55] h-dvh w-screen bg-black px-14 pt-28 pb-10">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-5xl font-medium leading-none text-neutral-500 sm:text-[3.25rem]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default MobileNav;
