"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaArrowRight,
} from "react-icons/fa";

import {
    MdEmail,
    MdCall,
    MdLocationOn,
} from "react-icons/md";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#0B1120] text-gray-300">

            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    <div className="space-y-5">

                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight">
                                <span className="text-white">Skill</span>
                                <span className="bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Sphere
                                </span>
                            </h2>

                            <p className="mt-4 text-sm leading-relaxed text-gray-400">
                                Learn modern web development, improve your
                                technical skills, and build real-world projects
                                with industry-level guidance.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">

                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                <FaYoutube />
                            </a>

                        </div>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold text-white mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/all-courses"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    My Profile
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    About Us
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold text-white mb-5">
                            Resources
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link
                                    href="/blog"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/faq"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/support"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    Support Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy"
                                    className="flex items-center gap-2 hover:text-cyan-400 transition"
                                >
                                    <FaArrowRight className="text-xs" />
                                    Privacy Policy
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-semibold text-white mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-start gap-3">
                                <MdEmail className="text-cyan-400 text-xl mt-0.5" />

                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="text-white">
                                        support@skillsphere.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MdCall className="text-purple-400 text-xl mt-0.5" />

                                <div>
                                    <p className="text-gray-400">Phone</p>
                                    <p className="text-white">
                                        +8801XXXXXXXXX
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MdLocationOn className="text-pink-400 text-xl mt-0.5" />

                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-white">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

                <div className="border-t border-white/10 mt-14 pt-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                        <p className="text-gray-500 text-center md:text-left">
                            © 2026 SkillSphere. All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-5">

                            <Link
                                href="/terms"
                                className="hover:text-white transition"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/privacy"
                                className="hover:text-white transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/cookies"
                                className="hover:text-white transition"
                            >
                                Cookies Policy
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
