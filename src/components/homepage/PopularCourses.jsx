"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const courses = [
    {
        "id": 1,
        "title": "Complete Web Development Bootcamp",
        "instructor": "Dr. Angela Yu",
        "rating": 4.9,
        "image": "/images/id-1.jpg",
    },

    {
        "id": 5,
        "title": "Cyber Security: From Zero to Hero",
        "instructor": "Nathan House",
        "rating": 4.9,
        "image": "/images/id-5.jpg",
        "category": "IT & Software"
    },

    {
        "id": 7,
        "title": "React & Next.js: The Practical Guide",
        "instructor": "Maximilian Schwarzmüller",
        "rating": 4.9,
        "image": "/images/id-7.jpg",
        "category": "Development"
    },
    {
        "id": 9,
        "title": "Mobile App Dev with Flutter",
        "instructor": "Paolo Dichone",
        "rating": 4.8,
        "image": "/images/id-9.jpg",
        "category": "Development"
    },
    {
        "id": 2,
        "title": "Advanced UI/UX Design Systems",
        "instructor": "Sarah Johnson",
        "rating": 4.8,
        "image": "/images/id-2.jpg",
        "category": "Design"
    },

];

const PopularCourses = () => {
    return (
        <div className="bg-[#0B1120] my-20 py-20 px-4">

            <h1 className="text-4xl font-bold text-center text-white mb-12">
                Popular Courses
            </h1>

            <Swiper
                modules={[Autoplay, FreeMode]}
                spaceBetween={25}
                slidesPerView={1}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                className="cursor-grab active:cursor-grabbing"
            >
                {courses.map((course) => (
                    <SwiperSlide key={course.id}>
                        <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl text-white shadow-lg hover:scale-[1.03] transition-all duration-300">

                            <div className="relative h-44">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>

                            <div className="p-5">

                                <h2 className="text-lg font-bold line-clamp-1">
                                    {course.title}
                                </h2>

                                <p className="text-sm text-gray-400 mt-1">
                                    {course.instructor}
                                </p>

                                <div className="mt-2 text-yellow-400 text-sm">
                                    ⭐ {course.rating}
                                </div>

                                <Link href={`/all-courses/${course.id}`}>
                                    <button className="mt-4 w-full py-2 rounded-xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition">
                                        View Details
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default PopularCourses;