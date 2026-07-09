"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Mail, Lock, ArrowRight } from "lucide-react";
import BackButton from "../components/common/Footer/BackButton/BackButton";

export default function LoginPage() {
    return (
        <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">
            
            <div className="relative max-w-7xl w-full grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <BackButton />
                {/* Left */}
                <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 relative">

                    <div className="absolute w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />

                    <img
                        src="https://mfiles.alphacoders.com/989/thumb-1920-989965.jpg"
                        alt="Character"
                        width={650}
                        height={650}
                        priority
                        className="relative z-10 object-contain h-screen w-full"
                    />

                </div>

                {/* Right */}
                <div className="flex flex-col justify-center p-10 lg:p-16">

                    <div className="mb-10">

                        <h1 className="text-4xl font-bold text-white">
                            Welcome Back 👋
                        </h1>

                        <p className="mt-3 text-slate-400">
                            Login to continue your gaming journey.
                        </p>

                    </div>

                    <form className="space-y-6">

                        {/* Email */}

                        <div>

                            <label className="text-sm text-slate-300">
                                Email
                            </label>

                            <div className="mt-2 flex items-center border border-slate-700 rounded-xl px-4 h-14 bg-slate-950">

                                <Mail size={18} className="text-slate-500" />

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div>

                            <label className="text-sm text-slate-300">
                                Password
                            </label>

                            <div className="mt-2 flex items-center border border-slate-700 rounded-xl px-4 h-14 bg-slate-950">

                                <Lock size={18} className="text-slate-500" />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="ml-3 w-full bg-transparent outline-none text-white placeholder:text-slate-500"
                                />

                                <Eye
                                    size={18}
                                    className="text-slate-500 cursor-pointer"
                                />

                            </div>

                        </div>

                        {/* Remember */}

                        <div className="flex items-center justify-between">

                            <label className="flex items-center gap-2 text-sm text-slate-400">

                                <input type="checkbox" />

                                Remember me

                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-blue-400 hover:text-blue-300 text-sm"
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        {/* Button */}

                        <button
                            className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white flex items-center justify-center gap-2"
                        >

                            Login

                            <ArrowRight size={18} />

                        </button>

                    </form>

                    {/* Divider */}

                    <div className="my-8 flex items-center">

                        <div className="flex-1 h-px bg-slate-800" />

                        <span className="mx-4 text-slate-500 text-sm">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-slate-800" />

                    </div>

                    {/* Social */}

                    <div className="space-y-4">

                        <button
                            className="w-full h-14 rounded-xl border border-slate-700 hover:border-blue-500 transition text-white"
                        >
                            Continue with Google
                        </button>

                        <button
                            className="w-full h-14 rounded-xl border border-slate-700 hover:border-indigo-500 transition text-white"
                        >
                            Continue with Discord
                        </button>

                    </div>

                    {/* Register */}

                    <p className="mt-10 text-center text-slate-400">

                        Don't have an account?

                        <Link
                            href="/register"
                            className="ml-2 text-blue-400 hover:text-blue-300"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>
        </section>
    );
}