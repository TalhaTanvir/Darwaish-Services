import type { Metadata } from "next";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

export const metadata: Metadata = {
  title: "Admin | Darwaish Services",
  description: "Darwaish Services admin dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#eef3ef] text-slate-950">
      <Sidebar />

      <div className="lg:pl-72">
        <Topbar />

        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
