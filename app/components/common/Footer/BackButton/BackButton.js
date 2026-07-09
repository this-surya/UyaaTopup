"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="
        absolute
        top-6
        left-6
        z-30

        flex
        items-center
        gap-2

        rounded-full

        border
        border-white/20

        bg-black/40

        px-5
        py-3

        text-white

        backdrop-blur-md

        transition-all
        duration-300

        hover:bg-violet-600
        hover:border-violet-600
      "
    >
      <ArrowLeft size={18} />

      <span className="font-medium">
        Home
      </span>
    </Link>
  );
}