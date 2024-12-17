import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>Dashboard HEADER</h1>
      <main>{children}</main>
      <h1>Dashboard Footer</h1>
    </div>
  );
}
