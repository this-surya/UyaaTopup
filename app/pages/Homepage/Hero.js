
import {
    FaBolt,
    FaShieldAlt,
    FaHeadset,
    FaPlay
} from "react-icons/fa";

// import heroImage from "../../assets/hero.png";


export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#08111F]">

            {/* Background Glow */}
            <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[150px]" />

            <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-14 px-6 py-20 lg:flex-row">

                {/* LEFT */}
                <div className="z-10 flex-1">

                    <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
                        🔥 Platform Top Up Game Terpercaya
                    </span>

                    <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

                        Top Up Game

                        <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                            Termurah &
                        </span>

                        Tercepat
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                        Nikmati proses top up game favoritmu hanya dalam hitungan
                        detik dengan harga terbaik, transaksi aman, dan customer
                        support yang siap membantu kapan saja.
                    </p>

                    {/* Feature */}
                    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <FeatureCard
                            icon={<FaBolt />}
                            title="Instan"
                            subtitle="1-5 Menit"
                        />

                        <FeatureCard
                            icon={<FaShieldAlt />}
                            title="100% Aman"
                            subtitle="Garansi Aman"
                        />

                        <FeatureCard
                            icon={<FaHeadset />}
                            title="Support"
                            subtitle="24/7 Online"
                        />

                    </div>

                    {/* Button */}
                    <div className="mt-10 flex flex-wrap items-center gap-5">

                        <button
                            className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
                        >
                            Top Up Sekarang
                        </button>

                        <button
                            className="flex items-center gap-3 text-slate-300"
                        >

                            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700">

                                <FaPlay />

                            </div>

                            Cara Top Up

                        </button>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="relative flex-1">
                    <div className="h-screen inset-y-0 right-0 ">
                        <video
                            alt="Gaming Hero"
                            className="relative z-10 aspect-ratio"
                            autoPlay loop muted
                        >
                            <source src="games/re.mp4" type="video/mp4" />
                        </video>
                    </div>


                    {/* Floating Promo */}

                    <div
                        className="absolute bottom-5 left-1/2 w-[330px] -translate-x-1/2 rounded-3xl border border-violet-500/20 bg-white/10 p-6 backdrop-blur-xl z-99"
                    >

                        <p className="text-sm text-violet-300">
                            Promo Spesial
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-white">
                            Cashback 20%
                        </h3>

                        <p className="mt-2 text-slate-400">
                            Semua transaksi menggunakan QRIS.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

function FeatureCard({ icon, title, subtitle }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-[#111827]/70 p-5 backdrop-blur-lg">

            <div className="mb-3 text-2xl text-violet-400">
                {icon}
            </div>

            <h3 className="font-semibold text-white">
                {title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
                {subtitle}
            </p>

        </div>
    );
}