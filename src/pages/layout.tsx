import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex flex-col items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main className="flex-grow w-full bg-neutral-50 p-4">{children}</main>
      <Footer />
    </div>
  );
}
