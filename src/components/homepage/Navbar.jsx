"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navLogo from "../../assets/logo.png";

import {
    PiListBold,
    PiXBold,
} from "react-icons/pi";

import {
    FaChevronRight,
} from "react-icons/fa";

import Navlink from "../Navlink";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B1120]/90 backdrop-blur-xl">

            <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"></div>

            <nav className="relative flex gap-3 items-center justify-between max-w-7xl mx-auto px-4 py-4">

                <div className="flex items-center gap-3">

                    <Link href={"/"} className="flex items-center gap-3">

                        <div className="relative">
                            <Image
                                src={navLogo}
                                alt="logo"
                                width={50}
                                height={50}
                                priority
                                className=" border border-white/10 shadow-lg shadow-cyan-500/20"
                            />

                            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 -z-10">
                            </div>
                        </div>

                        <h2 className="text-2xl font-extrabold tracking-tight">
                            <span className="text-white">Skill</span>
                            <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600  bg-clip-text text-transparent">
                                Sphere
                            </span>
                        </h2>

                    </Link>

                </div>

                <ul className="hidden md:flex items-center gap-5">

                    <li>
                        <Navlink href={"/"}>Home</Navlink>
                    </li>

                    <li>
                        <Navlink href={"/all-courses"}>
                            Courses
                        </Navlink>
                    </li>

                    <li>
                        <Navlink href={"/profile"}>
                            My Profile
                        </Navlink>
                    </li>

                </ul>

                <div className="hidden md:flex items-center gap-3">

                    {isPending ?
                        "User Loading..." : user ? (<div className="flex justify-center items-center gap-3 cursor-pointer">
                            <p className="text-xl font-bold text-blue-500"> Welcome, {user?.name}</p>
                            <Image src={user?.image} alt="DP" width={50} height={50}>
                            </Image>
                            <div
                                onClick={async () => await authClient.signOut()}
                                className="group px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Logout

                            </div>
                        </div>) : (<Link
                            href={"/login"}
                            className="group px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                        >
                            Login
                            <FaChevronRight className="group-hover:translate-x-1 transition" />
                        </Link>)}

                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-2xl p-2 rounded-lg border border-white/10 bg-white/5"
                >
                    {
                        menuOpen
                            ? <PiXBold />
                            : <PiListBold />
                    }
                </button>

            </nav>

            {
                menuOpen && (
                    <div className="md:hidden border-t border-white/10 bg-[#0B1120]/95 backdrop-blur-xl px-5 py-5 space-y-5">

                        <div className="flex flex-col gap-4 text-white font-medium">

                            <Navlink href={"/"}>
                                Home
                            </Navlink>

                            <Navlink href={"/all-courses"}>
                                Courses
                            </Navlink>

                            <Navlink href={"/profile"}>
                                My Profile
                            </Navlink>

                        </div>
                        {isPending ?
                            "User Loading..." : user ? (<div className="flex justify-center items-center gap-3 cursor-pointer">
                                <p className="text-xl font-bold text-blue-500"> Welcome, {user?.name}</p>
                                <Image src={user?.image} alt="DP" width={50} height={50}>
                                </Image>
                                <div
                                    onClick={async () => await authClient.signOut()}
                                    className="group px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                                >
                                    Logout

                                </div>
                            </div>) : (<Link
                                href={"/login"}
                                className="group px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Login
                                <FaChevronRight className="group-hover:translate-x-1 transition" />
                            </Link>)}
                    </div>
                )
            }

        </header >
    );
};

export default NavBar;
