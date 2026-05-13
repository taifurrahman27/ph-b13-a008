import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaStar,
    FaClock,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";

const CourseCard = ({ course }) => {

    const {
        id,
        title,
        description,
        image,
        instructor,
        duration,
        students,
        rating,
        level,
        price,
    } = course;

    return (
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            <div className="relative overflow-hidden">

                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cyan-500 text-white text-xs font-semibold shadow-md">
                    {level}
                </span>

                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full font-bold shadow-lg">
                    ${price}
                </div>

            </div>

            <div className="p-6">

                <div className="flex items-center gap-2 text-sm mb-3">

                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <span className="font-semibold text-gray-800">
                            {rating}
                        </span>
                    </div>

                    <span className="text-gray-400">
                        •
                    </span>

                    <div className="flex items-center gap-1 text-gray-500">
                        <FaUsers />
                        <span>
                            {students}+ Students
                        </span>
                    </div>

                </div>

                <h2 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-cyan-600 transition">
                    {title}
                </h2>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-5">

                    <div>
                        <p className="text-xs text-gray-400">
                            Instructor
                        </p>

                        <h4 className="font-semibold text-gray-800">
                            {instructor}
                        </h4>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <FaClock className="text-cyan-500" />
                        {duration}
                    </div>

                </div>

                <div className="border-t border-gray-200 my-5"></div>

                <Link href={`/all-courses/${id}`}>

                    <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:gap-4 transition-all duration-300 shadow-lg shadow-cyan-500/20">

                        View Details

                        <FaArrowRight className="text-sm" />

                    </button>

                </Link>

            </div>

        </div>
    );
};

export default CourseCard;