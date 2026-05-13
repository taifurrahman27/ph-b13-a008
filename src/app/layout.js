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
  description: "SkillSphere — Learn Without Limits is an online learning platform that offers a wide range of courses in technology, programming, and design. Our mission is to empower individuals to acquire new skills and advance their careers through high-quality education. With expert instructors, interactive content, and a supportive community, SkillSphere provides a comprehensive learning experience for students of all levels. Join us today and start your journey towards mastering new skills and achieving your goals. by TR TECHS.",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-100">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

