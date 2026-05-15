"use client";

import Image from "next/image";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitter } from "react-icons/bs";

const instructors = [
    {
        "id": 1,
        "name": "Dr. Aris Thorne",
        "title": "Senior Software Architect",
        "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80"
    },
    {
        "id": 2,
        "name": "Elena Sofia",
        "title": "Lead UI/UX Strategist",
        "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80"
    },
    {
        "id": 3,
        "name": "David Vark",
        "title": "Full Stack Developer",
        "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=640&q=80"
    },
    {
        "id": 4,
        "name": "Julian Pearce",
        "title": "Cloud Infrastructure Lead",
        "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=640&q=80"
    }
];

export default function TopInstructors() {
    return (
        <section className="py-24 my-20 bg-[#020617] px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Expert Mentors
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Meet the <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600  ">Masters</span>
                        </h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {instructors.map((expert) => (
                        <div
                            key={expert.id}
                            className="group relative h-105 rounded-4xl overflow-hidden bg-gray-900 border border-white/5 transition-all duration-500 hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]"
                        >
                            <Image
                                src={expert.image}
                                alt={expert.name}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                            <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-purple-600 transition-colors">
                                    <LiaLinkedin size={18} />
                                </button>
                                <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 transition-colors">
                                    <BsTwitter size={18} />
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {expert.title.split(' ')[0]} Specialist
                                </p>
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {expert.name}
                                </h3>
                                <div className="h-0.5 w-0 bg-linear-to-r from-cyan-400 to-purple-500 mt-3 group-hover:w-full transition-all duration-700" />
                                <p className="text-gray-400 text-sm mt-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    Helping students master {expert.title.toLowerCase()} through real-world projects.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}