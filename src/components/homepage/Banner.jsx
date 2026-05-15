"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner1 from "../../../public/images/id-1.jpg";
import banner2 from "../../../public/images/id-4.jpg";
import banner3 from "../../../public/images/id-5.jpg";
import Link from "next/link";

const slides = [
    {
        image: banner1,
        title: "Upgrade Your Skills Today 🚀",
        desc: "Learn modern web development with SkillSphere",
    },
    {
        image: banner2,
        title: "Learn from Industry Experts 💡",
        desc: "Build real-world projects and grow your career",
    },
    {
        image: banner3,
        title: "Become Job Ready 🔥",
        desc: "Master frontend, backend & full-stack development",
    },
];

export default function Banner() {
    return (
        <section className="relative min-h-screen bg-[#0B1120] overflow-hidden">

            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 3500 }}
                pagination={{ clickable: true }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                className="h-screen"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-screen flex items-center overflow-hidden">

                            <div className="absolute inset-0 scale-110 animate-zoomSlow">
                                <Image
                                    src={slide.image}
                                    alt="banner"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 bg-black/60"></div>

                            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-white">

                                <div className="max-w-2xl">

                                    <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
                                        SkillSphere Learning Platform
                                    </span>

                                    <h1 className="text-4xl md:text-6xl font-black leading-tight">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-6 text-gray-300 text-lg">
                                        {slide.desc}
                                    </p>

                                    <div className="mt-8">

                                        <Link href="/all-courses" className="inline-block px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition-transform duration-200">

                                            Explore Courses

                                        </Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                @keyframes zoomSlow {
                    0% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1.25);
                    }
                }

                .animate-zoomSlow {
                    animation: zoomSlow 6s ease-in-out infinite alternate;
                }
            `}</style>

        </section>
    );
}
