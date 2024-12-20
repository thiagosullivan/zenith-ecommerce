import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zenith Estamparia",
  description:
    "Zenith Estamparia é sua melhor solução para estampas personalizadas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
