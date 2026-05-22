"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import {
  FaCalendarCheck,
  FaCircleQuestion,
  FaHouse,
  FaQuoteLeft,
  FaRightFromBracket,
  FaScrewdriverWrench,
  FaShieldHalved,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const adminNavItems: AdminNavItem[] = [
  { label: "Overview", href: "/admin", icon: FaHouse },
  { label: "Bookings", href: "/admin/booking", icon: FaCalendarCheck },
  { label: "Services", href: "/admin/services", icon: FaScrewdriverWrench },
  { label: "FAQ", href: "/admin/faq", icon: FaCircleQuestion },
  { label: "Testimonials", href: "/admin/testimonials", icon: FaQuoteLeft },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/admin") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-6">
        <Image
          src="/Darwaish Logo.png"
          alt="Darwaish Services"
          width={44}
          height={44}
          className="h-11 w-11 rounded-lg object-contain ring-1 ring-slate-200"
          priority
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-950">
            Darwaish Services
          </p>
          <p className="text-xs font-medium text-slate-500">Admin Console</p>
        </div>
      </div>

      <div className="px-4 py-5">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
            Operations
          </p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            Manage service content and requests.
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3" aria-label="Admin">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActivePath(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",
                active
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:bg-[#eef3ef] hover:text-slate-950",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition",
                  active
                    ? "bg-white/10 text-emerald-200"
                    : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-emerald-700",
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
