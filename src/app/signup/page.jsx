"use client";

import { useState } from "react";
import Link from "next/link";

import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";

import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Image as ImageIcon,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaArrowRight, FaUserGraduate } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const SignupPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-20 bg-[#070B14]">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-pink-500/10 blur-3xl rounded-full" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

            <div className="relative z-10 w-full max-w-lg rounded-[36px] border border-white/10 bg-white/4 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,255,255,0.08)] overflow-hidden">

                <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500" />

                <div className="p-8 md:p-10">

                    <div className="flex justify-center">
                        <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
                            <FaUserGraduate className="relative text-4xl text-white" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
                            <HiSparkles />
                            Join SkillSphere
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Create Your
                            <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Dream Career
                            </span>
                        </h1>
                        <p className="mt-4 text-gray-400 leading-relaxed">
                            Learn modern skills from industry experts and unlock your future 🚀
                        </p>
                    </div>

                    <Form className="flex flex-col mt-10 group/form">

                        <TextField isRequired name="name" className="flex flex-col gap-2 w-full group">
                            <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-cyan-400 transition-colors">
                                Full Name
                            </Label>
                            <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                <Input
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
                                    placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
                                    focus:border-cyan-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-500/10 outline-none"
                                />
                            </div>
                            <FieldError className="text-xs font-semibold text-pink-500 mt-1 ml-1" />
                        </TextField>

                        <TextField isRequired name="email" type="email" className="flex flex-col gap-2 w-full mt-5 group">
                            <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-cyan-400 transition-colors">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                <Input
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
                                    placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
                                    focus:border-cyan-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-500/10 outline-none"
                                />
                            </div>
                            <FieldError className="text-xs font-semibold text-pink-500 mt-1 ml-1" />
                        </TextField>

                        <TextField isRequired name="photo" className="flex flex-col gap-2 w-full mt-5 group">
                            <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-purple-400 transition-colors">
                                Photo URL
                            </Label>
                            <div className="relative">
                                <ImageIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                                <Input
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
                                    placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
                                    focus:border-purple-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-purple-500/10 outline-none"
                                />
                            </div>
                            <FieldError className="text-xs font-semibold text-pink-500 mt-1 ml-1" />
                        </TextField>

                        <TextField isRequired name="password" className="flex flex-col gap-2 w-full mt-5 group">
                            <Label className="text-xs font-bold text-gray-400 ml-1 tracking-wide uppercase group-focus-within:text-purple-400 transition-colors">
                                Password
                            </Label>
                            <InputGroup className="relative flex items-center rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 overflow-hidden group-focus-within:border-purple-500/50 group-focus-within:bg-white/[0.07] group-focus-within:ring-4 group-focus-within:ring-purple-500/10">
                                <div className="absolute left-4 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                    <Lock size={18} />
                                </div>
                                <InputGroup.Input
                                    type={isVisible ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-transparent text-white outline-none placeholder:text-gray-600"
                                />
                                <InputGroup.Suffix className="absolute right-2">
                                    <Button
                                        isIconOnly
                                        variant="ghost"
                                        onPress={() => setIsVisible(!isVisible)}
                                        className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                                    >
                                        {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <FieldError className="text-xs font-semibold text-pink-500 mt-1 ml-1" />
                        </TextField>

                        <Button
                            type="submit"
                            className="relative mt-8 w-full h-14 overflow-hidden rounded-2xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] group/btn"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
                            <div className="relative flex items-center justify-center gap-3">
                                <span>Create Account</span>
                                <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </div>
                        </Button>

                        <div className="relative flex items-center justify-center my-8 group/divider">
                            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                            <span className="px-6 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 bg-[#070B14] relative z-10 select-none group-focus-within/form:text-purple-400 transition-colors duration-500">
                                Or Continue With
                            </span>
                            <div className="flex-1 h-px bg-linear-to-l from-transparent via-white/10 to-transparent" />
                        </div>

                        <Button
                            className="w-full h-14 rounded-2xl border border-white/10 bg-white/4 text-white font-semibold hover:bg-white/8 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </Button>
                    </Form>

                    <div className="text-center mt-8 text-gray-400 font-medium tracking-wide">

                        Already have an account?{" "}

                        <Link
                            href="/login"
                            className="relative inline-flex items-center text-cyan-400 font-bold group overflow-hidden"
                        >

                            <span
                                className="transition-all duration-300
            group-hover:text-cyan-300"
                            >
                                Login to Your Account
                            </span>

                            <span
                                className="absolute left-0 bottom-0 h-0.5 w-full
            bg-linear-to-r from-cyan-400 to-purple-500
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-300
            origin-center"
                            />

                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;