"use client";

import Image from "next/image";
import Link from "next/link";

import {
    FaArrowRight,
    FaClock,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const newReleaseCourses = [
    {
        id: 1,
        title: "Next.js 16 Complete Guide",
        image: "/images/id-4.jpg",
        instructor: "David Miller",
        rating: 4.9,
        students: "2K+",
        duration: "6 Weeks",
        level: "Beginner",
        price: 59,
    },
    {
        id: 2,
        title: "Advanced UI/UX Design System",
        image: "/images/id-5.jpg",
        instructor: "Emma Watson",
        rating: 4.8,
        students: "1.5K+",
        duration: "8 Weeks",
        level: "Intermediate",
        price: 89,
    },
    {
        id: 3,
        title: "AI Powered Web Applications",
        image: "/images/id-6.jpg",
        instructor: "Michael Lee",
        rating: 5.0,
        students: "3K+",
        duration: "10 Weeks",
        level: "Advanced",
        price: 109,
    },
];

export default function NewReleaseCourses() {

    return (

        <section className="relative py-24 overflow-hidden">

            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">

                    <span
                        className="inline-flex items-center gap-2
                        px-4 py-2 rounded-full
                        border border-purple-500/20
                        bg-purple-500/10
                        text-purple-300 text-sm font-semibold"
                    >
                        ✨ Fresh Learning Content
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
                        New Release Courses
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Explore the latest cutting-edge courses designed to keep
                        you ahead in modern technology and digital innovation.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        newReleaseCourses.map((course) => (

                            <div
                                key={course.id}
                                className="group flex flex-col overflow-hidden
                                rounded-3xl border border-white/10
                                bg-white/4
                                backdrop-blur-xl
                                hover:-translate-y-2
                                hover:border-purple-500/30
                                transition-all duration-500
                                shadow-[0_0_30px_rgba(0,0,0,0.25)]"
                            >

                                <div className="relative overflow-hidden">

                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-60 object-cover
                                        group-hover:scale-110
                                        transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                                    <span
                                        className="absolute top-4 left-4
                                        px-3 py-1 rounded-full
                                        bg-purple-500 text-white
                                        text-xs font-semibold"
                                    >
                                        NEW
                                    </span>

                                    <div
                                        className="absolute bottom-4 right-4
                                        bg-white/90 backdrop-blur-md
                                        text-gray-900 px-4 py-1.5
                                        rounded-full font-bold"
                                    >
                                        ${course.price}
                                    </div>

                                </div>

                                <div className="flex flex-col grow p-6">

                                    <div className="flex items-center gap-4 text-sm mb-4">

                                        <div className="flex items-center gap-1 text-yellow-400">

                                            <FaStar />

                                            <span className="font-semibold text-white">
                                                {course.rating}
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-1 text-gray-400">

                                            <FaUsers />

                                            <span>
                                                {course.students}
                                            </span>

                                        </div>

                                    </div>

                                    <h3
                                        className="text-2xl font-bold text-white
                                        group-hover:text-purple-400
                                        transition-colors"
                                    >
                                        {course.title}
                                    </h3>

                                    <p className="mt-3 text-gray-400">
                                        Instructor:{" "}
                                        <span className="text-white font-medium">
                                            {course.instructor}
                                        </span>
                                    </p>

                                    <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">

                                        <FaClock className="text-purple-400" />

                                        {course.duration}

                                    </div>

                                    <div className="grow"></div>

                                    <Link
                                        href={"/all-courses"}
                                        className="mt-8"
                                    >

                                        <button
                                            className="w-full py-3 rounded-2xl
                                            bg-linear-to-r
                                            from-purple-500 to-cyan-500
                                            text-white font-semibold
                                            flex items-center justify-center gap-2
                                            hover:gap-4
                                            transition-all duration-300"
                                        >

                                            Explore Courses

                                            <FaArrowRight className="text-sm" />

                                        </button>

                                    </Link>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );
}
