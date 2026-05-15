import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/homepage/Footer";
import NavBar from "@/components/homepage/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere — TR TECHS",
  description:
    "SkillSphere — Learn Without Limits is an online learning platform that offers a wide range of courses in technology, programming, and design.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >

      <body className="min-h-screen flex flex-col text-white bg-[#0B1120] relative overflow-x-hidden">

        <div className="fixed inset-0 -z-50">

          <div className="absolute inset-0 bg-linear-to-br from-[#0B1120] via-[#111827] to-[#1E1B4B]"></div>

          <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/10 blur-3xl rounded-full"></div>

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]"></div>

        </div>

        <NavBar />

        <main className="flex-1 relative z-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}