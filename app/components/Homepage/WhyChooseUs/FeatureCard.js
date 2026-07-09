"use client";

import { motion } from "motion/react";

export default function FeatureCard({
    icon,
    title,
    description,
    delay,
}) {

    
    return (
        <div
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-[#111827]
                p-8
                transition-all
                duration-300
            "
        >
            {/* Glow */}
            <div
                className="
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-violet-500/10
                blur-3xl
                transition
                duration-500
                group-hover:bg-violet-500/30
            "
            />

            <div className="relative z-10">

                <div
                    className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-fuchsia-600
                    text-white
                "
                >
                    {icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                    {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                    {description}
                </p>

            </div>

        </div>
    );
}