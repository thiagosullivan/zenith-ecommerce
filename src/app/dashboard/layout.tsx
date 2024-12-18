import { ReactNode } from "react";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main className="border border-gray-300 rounded-md p-8 mb-6">
        {children}
      </main>
    </div>
  );
}
