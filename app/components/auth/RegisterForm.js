"use client";

import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import BackButton from "../common/Footer/BackButton/BackButton";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">
        <BackButton />
      {/* Username */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Username
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">
          <User size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Enter username"
            className="w-full bg-transparent p-4 text-white outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Email
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">
          <Mail size={18} className="text-slate-400" />

          <input
            type="email"
            placeholder="Enter email"
            className="w-full bg-transparent p-4 text-white outline-none"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">

          <Lock size={18} className="text-slate-400" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            className="w-full bg-transparent p-4 text-white outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={18} className="text-slate-400" />
            ) : (
              <Eye size={18} className="text-slate-400" />
            )}
          </button>

        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Confirm Password
        </label>

        <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 px-4">

          <Lock size={18} className="text-slate-400" />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-transparent p-4 text-white outline-none"
          />

        </div>
      </div>

      <button
        className="
          w-full
          rounded-xl
          bg-violet-600
          py-4
          font-semibold
          text-white
          transition
          hover:bg-violet-700
        "
      >
        Create Account
      </button>

      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 h-px w-full bg-slate-700"></div>
        <span className="relative bg-[#08111F] px-4 text-sm text-slate-400">
          OR
        </span>
      </div>

      <button
        type="button"
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-slate-700
          py-4
          text-white
          transition
          hover:border-violet-500
        "
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />

        Continue with Google
      </button>

      <p className="text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-violet-400 hover:text-violet-300"
        >
          Sign In
        </Link>
      </p>

    </form>
  );
}