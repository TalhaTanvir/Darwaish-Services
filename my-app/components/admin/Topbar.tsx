"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBell,
  FaGlobe,
  FaMagnifyingGlass,
  FaUserTie,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { adminNavItems } from "./Sidebar";

const pageTitles: Record<string, { eyebrow: string; title: string }> = {
  "/admin": { eyebrow: "Operations", title: "Dashboard Overview" },
  "/admin/booking": { eyebrow: "Requests", title: "Booking Management" },
  "/admin/services": { eyebrow: "Catalog", title: "Service Management" },
  "/admin/faq": { eyebrow: "Content", title: "FAQ Management" },
  "/admin/testimonials": { eyebrow: "Social Proof", title: "Testimonials" },
};

function getPageTitle(pathname: string) {
  const exactTitle = pageTitles[pathname];

  if (exactTitle) {
    return exactTitle;
  }

  const section = Object.entries(pageTitles).find(([href]) => {
    return href !== "/admin" && pathname.startsWith(`${href}/`);
  });

  return section?.[1] ?? pageTitles["/admin"];
}

function isActivePath(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Topbar() {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex min-h-20 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3 lg:hidden">
          <Image
            src="/Darwaish Logo.png"
            alt="Darwaish Services"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain ring-1 ring-slate-200"
            priority
          />
          <div>
            <p className="text-sm font-semibold">Darwaish Services</p>
            <p className="text-xs font-medium text-slate-500">
              Admin Console
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">
            {pageTitle.title}
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex h-11 min-w-0 items-center gap-3 rounded-lg border border-slate-200 bg-[#f8faf8] px-3 transition focus-within:border-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-slate-100 sm:w-80">
            <FaMagnifyingGlass className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="search"
              placeholder="Search bookings, content, customers"
              className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </label>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-[#eef3ef] hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <FaGlobe className="h-4 w-4" />
              Website
            </Link>
            <button
              type="button"
              aria-label="Notifications"
              title="Notifications"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-[#eef3ef] hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <FaBell className="h-4 w-4" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </button>
            <button
              type="button"
              aria-label="Account"
              title="Account"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <FaUserTie className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <nav
        className="flex gap-2 overflow-x-auto border-t border-slate-200 px-4 py-3 sm:px-6 lg:hidden"
        aria-label="Admin mobile"
      >
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border px-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",
                active
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-[#eef3ef] hover:text-slate-950",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
