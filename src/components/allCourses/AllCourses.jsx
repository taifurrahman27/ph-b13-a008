"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { FaSearch } from "react-icons/fa";
const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch("/data.json");
            if (!res.ok) {
                throw new Error("Failed to fetch courses");
            }
            const data = await res.json();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter((course) =>
        course.title
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    return (
        <section className="w-full pt-4 pb-8">
            <div
                className="flex flex-col lg:flex-row
                items-center justify-between
                gap-6 mb-8"
            >

                <div>
                    <h1
                        className="text-4xl md:text-5xl
                        font-black text-center text-white"
                    >
                        All Courses
                    </h1>
                </div>

                <div className="relative w-full max-w-md">
                    <FaSearch
                        className="absolute left-4 top-1/2
                        -translate-y-1/2 text-gray-400"
                    />
                    <input
                        type="text"
                        placeholder="Search courses by title..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full pl-8 pr-4 py-4 rounded-2xl
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        text-white placeholder:text-gray-500
                        outline-none
                        focus:border-cyan-500/40
                        focus:ring-4 focus:ring-cyan-500/10
                        transition-all duration-300"
                    />
                </div>
            </div>
            <div className="mb-8">
                <p className="text-gray-400 text-sm">
                    Showing{" "}
                    <span className="text-cyan-400 font-bold">
                        {filteredCourses.length}
                    </span>{" "}
                    courses
                </p>
            </div>
            {
                filteredCourses.length > 0 ? (
                    <div
                        className="grid grid-cols-1
                        md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {
                            filteredCourses.map((course) => (

                                <CourseCard
                                    key={course.id}
                                    course={course}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div
                        className="flex flex-col
                        items-center justify-center
                        py-24"
                    >
                        <h2 className="text-3xl font-bold text-white">
                            No Course Found
                        </h2>
                        <p className="text-gray-400 mt-3">
                            Try another search keyword.
                        </p>
                    </div>
                )
            }
        </section>
    );
};

export default AllCourses;