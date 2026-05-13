
import { ArrowLeft, FileSearch, Home, House } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

import {
    FaStar,
    FaUsers,
    FaClock,
    FaCheckCircle,
    FaPlayCircle,
} from "react-icons/fa";

const CourseDetailsPage = async ({ params }) => {


    const isLoggedIn = true;

    if (!isLoggedIn) {

        redirect(`/login?redirect=/all-courses/${params.id}`);

    }

    const { id } = await params;

    const res = await fetch(
        "http://localhost:3000/data.json",
        {
            cache: "no-store",
        }
    );

    const courses = await res.json();

    const course = courses.find((p) => p.id == id);
    console.log(course);


    if (!course) {
        return (
            <div className="relative min-h-screen overflow-hidden bg-[#0B1120] flex items-center justify-center px-5">

                <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]"></div>

                <div className="relative z-10 max-w-2xl w-full text-center">

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-4xl p-10 md:p-14 shadow-2xl">

                        <div className="relative mx-auto w-fit mb-8">
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-purple-500 blur-2xl opacity-30 rounded-full"></div>

                            <div className="relative w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                                <FileSearch size={60} strokeWidth={1.5} />
                            </div>
                        </div>

                        <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
                            Error 404
                        </span>

                        <h1 className="mt-6 text-4xl md:text-6xl font-black text-white">
                            Course{" "}
                            <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Not Found
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
                            We couldn’t find the course you are looking for. It may have been removed,
                            renamed, or is temporarily unavailable in SkillSphere.
                        </p>


                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                            <Link href="/all-courses">
                                <button className="group px-7 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                                    <ArrowLeft
                                        size={18}
                                        className="group-hover:-translate-x-1 transition"
                                    />
                                    Back to Courses
                                </button>
                            </Link>

                            <Link href="/">
                                <button className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300 font-medium">
                                    <Home
                                        size={18}
                                        className="group-hover:-translate-x-1 transition"
                                    />                                    Go to Home
                                </button>
                            </Link>

                        </div>

                        <div className="mt-12 pt-6 border-t border-white/10">
                            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
                                SkillSphere • Learn Without Limits
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        );

    }



    const curriculum = [
        "Introduction & Setup",
        "HTML5 Fundamentals",
        "CSS3 & Responsive Design",
        "JavaScript Essentials",
        "React & Components",
        "Next.js Full Stack Development",
        "Authentication & Firebase",
        "API Integration",
        "Project Building",
        "Deployment & Optimization",
    ];

    return (
        <section className="min-h-screen bg-[#0B1120] text-white py-14 px-5">

            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div>

                        <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/20">
                            {course.level}
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold mt-5 leading-tight">
                            {course.title}
                        </h1>

                        <p className="mt-5 text-gray-300 leading-relaxed text-lg">
                            {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-8">

                            <div className="flex items-center gap-2 text-yellow-400">
                                <FaStar />
                                <span>{course.rating} Rating</span>
                            </div>

                            <div className="flex items-center gap-2 text-cyan-400">
                                <FaUsers />
                                <span>
                                    99K+ Students
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-purple-400">
                                <FaClock />
                                <span>{course.duration}</span>
                            </div>

                        </div>

                        <div className="mt-8 flex items-center gap-4">

                            <div className="w-14 h-14 rounded-full bg-linear-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-xl font-bold">
                                {course.instructor?.charAt(0)}
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm">
                                    Instructor
                                </p>

                                <h3 className="text-xl font-semibold">
                                    {course.instructor}
                                </h3>
                            </div>

                        </div>

                        <div className="mt-8">

                            <h2 className="text-2xl font-bold text-cyan-400">
                                Price: ${course.price}
                            </h2>

                        </div>

                        <button className="mt-8 px-8 py-4 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-600 font-semibold text-lg hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20">
                            Enroll Now
                        </button>

                    </div>

                    <div className="relative">

                        <Image
                            src={course.image}
                            alt={course.title}
                            width={700}
                            height={500}
                            className="rounded-2xl w-full h-112.5 object-cover border border-white/10"
                        />

                        <div className="absolute -inset-3 bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"></div>

                    </div>

                </div>

                <div className="mt-20">

                    <div className="text-center mb-12">

                        <h2 className="text-4xl font-bold">
                            Course Curriculum
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Everything you will learn in this course
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        {
                            curriculum.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                                >

                                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                        <FaPlayCircle />
                                    </div>

                                    <div>

                                        <p className="text-gray-400 text-sm">
                                            Module {index + 1}
                                        </p>

                                        <h3 className="font-semibold text-lg">
                                            {item}
                                        </h3>

                                    </div>

                                    <FaCheckCircle className="ml-auto text-green-400" />

                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CourseDetailsPage;
