"use client";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  Gamepad2,
  Gift,
  User,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#08111F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600">
            <Gamepad2 className="text-white" size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">TopUpZone</h2>
            <p className="-mt-1 text-xs text-slate-400">
              Fast & Secure
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="font-medium text-slate-300 transition hover:text-violet-400"
          >
            Home
          </a>

          <a
            href="#"
            className="font-medium text-slate-300 transition hover:text-violet-400"
          >
            Games
          </a>

          <a
            href="#"
            className="font-medium text-slate-300 transition hover:text-violet-400"
          >
            Categories
          </a>

          <a
            href="#"
            className="relative font-medium text-slate-300 transition hover:text-violet-400"
          >
            Promo

            <span className="absolute -right-7 -top-2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] text-white">
              HOT
            </span>
          </a>

          <a
            href="#"
            className="font-medium text-slate-300 transition hover:text-violet-400"
          >
            Contact
          </a>
        </nav>

        {/* Search */}
        <div className="hidden items-center lg:flex">
          <div className="flex items-center rounded-xl border border-slate-700 bg-[#111827] px-4">
            <Search
              size={18}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search game..."
              className="w-56 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-xl border border-slate-700 px-5 py-2.5 text-white transition hover:border-violet-500">
            Login
          </button>

          <button className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 font-medium text-white transition hover:scale-105">
            Register
          </button>
        </div>

        {/* Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-[#08111F] lg:hidden">
          <div className="space-y-4 p-6">
            {/* Search */}
            <div className="flex items-center rounded-xl border border-slate-700 bg-[#111827] px-4">
              <Search
                size={18}
                className="text-slate-500"
              />

              <input
                placeholder="Search..."
                className="w-full bg-transparent px-3 py-3 text-white outline-none"
              />
            </div>

            <a
              href="#"
              className="block text-slate-300"
            >
              Home
            </a>

            <a
              href="#"
              className="block text-slate-300"
            >
              Games
            </a>

            <a
              href="#"
              className="block text-slate-300"
            >
              Categories
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-slate-300"
            >
              <Gift size={18} />
              Promo
            </a>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 text-white">
              <User size={18} />
              Login
            </button>

            <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 font-semibold text-white">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}