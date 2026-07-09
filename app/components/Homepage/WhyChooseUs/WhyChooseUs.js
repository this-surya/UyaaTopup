"use client";

import {
    Zap,
    ShieldCheck,
    CreditCard,
    Headphones,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {

    const features = [

        {
            icon: <Zap size={30} />,
            title: "Instant Process",
            description:
                "Top up diproses otomatis dalam hitungan detik tanpa menunggu lama.",
        },

        {
            icon: <ShieldCheck size={30} />,
            title: "100% Secure",
            description:
                "Seluruh transaksi terenkripsi dan dijamin aman.",
        },

        {
            icon: <CreditCard size={30} />,
            title: "Many Payments",
            description:
                "QRIS, Dana, OVO, GoPay, ShopeePay, Virtual Account dan lainnya.",
        },

        {
            icon: <Headphones size={30} />,
            title: "24/7 Support",
            description:
                "Customer service siap membantu kapan pun kamu membutuhkan.",
        },

    ];

    return (

        <section className="bg-[#08111F] py-28">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="font-semibold text-violet-400">
                        WHY CHOOSE US
                    </span>

                    <h2 className="mt-4 text-5xl font-extrabold text-white">

                        Kenapa Memilih Kami?

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">

                        Platform top up game terpercaya
                        dengan proses tercepat,
                        pembayaran lengkap,
                        dan keamanan terbaik.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((item, index) => (

                        <FeatureCard

                            key={index}

                            icon={item.icon}

                            title={item.title}

                            description={item.description}

                            delay={index * .15}

                        />

                    ))}

                </div>

            </div>

        </section>

    );
}