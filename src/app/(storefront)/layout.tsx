import { ReactNode } from "react";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <h1>STORE FRONT NAV</h1>
      <main>{children}</main>
      <h1>STORE FRONT FOOTER</h1>
    </>
  );
}
