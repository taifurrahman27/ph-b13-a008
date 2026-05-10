"use client";

import Link from "next/link";
import { Home, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-[#0B1120] text-white flex items-center justify-center px-6">

            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 max-w-2xl w-full">

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl text-center">

                    <h1 className="text-[110px] md:text-[150px] font-black leading-none tracking-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        404
                    </h1>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        Oops! Page Not Found
                    </h2>

                    <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                        The page you are trying to access doesn&apos;t exist or may
                        have been moved. Continue learning with SkillSphere by
                        exploring our courses or returning to the homepage.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/20"
                        >
                            <Home size={18} />
                            Back to Home
                        </Link>

                        <Link
                            href="/courses"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-medium"
                        >
                            <BookOpen size={18} />
                            Browse Courses
                        </Link>
                    </div>

                    <button
                        onClick={() => window.history.back()}
                        className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
                    >
                        <ArrowLeft size={16} />
                        Go Back
                    </button>

                </div>

                <p className="text-center text-gray-500 text-sm mt-6">
                    © 2026 SkillSphere — Learn Without Limits
                </p>

            </div>
        </div>
    );
}