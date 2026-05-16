"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import {
    Button,
    FieldError,
    Form,
    Input,
    InputGroup,
    Label,
    TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import {
    FaArrowRight,
    FaLock,
    FaUserGraduate,
} from "react-icons/fa";
import {
    HiSparkles,
} from "react-icons/hi2";
const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-10 bg-[#0B1120]">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-pink-500/10 blur-3xl rounded-full"></div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[45px_45px]">
            </div>

            <div
                className="relative z-10 w-full max-w-md rounded-[36px]
                border border-white/10 bg-white/5
                backdrop-blur-3xl shadow-[0_0_60px_rgba(0,255,255,0.08)]
                overflow-hidden"
            >

                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

                <div className="p-8 md:p-10">
                    <div className="flex justify-center mb-8">
                        <div
                            className="relative w-24 h-24 rounded-full
                            bg-linear-to-br from-cyan-400 via-sky-500 to-purple-600
                            flex items-center justify-center
                            shadow-2xl shadow-cyan-500/30"
                        >
                            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl"></div>
                            <FaUserGraduate className="relative text-4xl text-white" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="inline-flex items-center gap-2
                            px-4 py-2 rounded-full
                            border border-cyan-500/20
                            bg-cyan-500/10 text-cyan-300
                            text-sm font-semibold"
                        >
                            <HiSparkles />
                            Welcome To SkillSphere
                        </div>
                    </div>
                    <div className="text-center my-4">
                        <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                            Login to Your Account
                        </h1>
                    </div>

                    <Form
                        className="flex flex-col gap-5 mt-8"
                    >
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            className="flex flex-col gap-2 w-full group"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-sm font-bold text-gray-300 ml-1 tracking-wide uppercase group-focus-within:text-cyan-400 transition-colors">
                                Enter Your Email
                            </Label>

                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                                    <Mail size={18} />
                                </div>

                                <Input
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/3 text-white 
      placeholder:text-gray-600 backdrop-blur-xl transition-all duration-300
      focus:border-cyan-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-500/10 outline-none"
                                />
                            </div>

                            <FieldError className="text-xs font-semibold text-pink-500 mt-1 ml-1 animate-in fade-in slide-in-from-top-1" />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            className="flex flex-col gap-2 w-full my-3 group"
                        >
                            <Label className="text-sm font-bold text-gray-300 ml-1 tracking-wide uppercase group-focus-within:text-purple-400 transition-colors">
                                Enter Your Password
                            </Label>

                            <InputGroup
                                className="relative flex items-center rounded-2xl border border-white/10 bg-white/3 
    backdrop-blur-xl transition-all duration-300 overflow-hidden
    group-focus-within:border-purple-500/50 group-focus-within:bg-white/[0.07] group-focus-within:ring-4 group-focus-within:ring-purple-500/10"
                            >
                                <div className="absolute left-4 text-gray-500 group-focus-within:text-purple-400 transition-colors">
                                    <Lock size={18} />
                                </div>

                                <InputGroup.Input
                                    className="w-full pl-12 pr-12 py-4 bg-transparent text-white outline-none placeholder:text-gray-600"
                                    type={isVisible ? "text" : "password"}
                                    placeholder="••••••••"
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
                            className="relative w-full h-14 overflow-hidden rounded-2xl 
  bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 
  text-white font-extrabold text-base tracking-wide
  shadow-[0_0_20px_rgba(6,182,212,0.3)]
  transition-all duration-500 
  hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
  active:scale-95 group"
                        >
                            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

                            <div className="relative flex items-center justify-center gap-3">
                                <FaLock className="text-sm opacity-80 group-hover:rotate-12 transition-transform" />

                                <span className="uppercase tracking-widest">Login Account</span>

                                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                            </div>

                        </Button>

                        <div className="relative flex items-center justify-center my-3 group">
                            <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/10 to-transparent">
                            </div>
                            <span
                                className="px-6 py-1 text-xs font-bold tracking-[0.3em] uppercase text-gray-400 
    bg-[#020617] relative z-10 select-none
    group-focus-within:text-purple-400 transition-colors duration-500"
                            >
                                Or Continue With
                            </span>
                            <div className="flex-1 h-px bg-linear-to-l from-transparent via-white/10 to-transparent">
                            </div>
                        </div>

                        <Button
                            className="w-full h-14 rounded-2xl flex items-center justify-center gap-3
  border border-white/10 bg-white/3 text-sm font-semibold text-gray-200
  hover:bg-white/8 hover:text-white hover:border-purple-500/30
  hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)]
  transition-all duration-300 backdrop-blur-xl group"
                        >
                            <div className="transition-transform duration-300 group-hover:scale-110">
                                <FcGoogle className="text-xl" />
                            </div>
                            <span>Sign in with Google</span>
                        </Button>

                    </Form>

                    <div className="text-center mt-8 text-gray-400 font-medium tracking-wide">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="relative inline-flex items-center text-cyan-400 font-bold group overflow-hidden"
                        >
                            <span
                                className="transition-all duration-300
            group-hover:text-cyan-300"
                            >
                                Create Account
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

export default LoginPage;