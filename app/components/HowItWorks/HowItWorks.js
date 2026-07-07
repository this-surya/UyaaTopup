import steps from "@/app/data/steps";
import StepCard from "./StepCard";

export default function HowItWorks() {
    return (
        <section className="bg-[#08111F] py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <span className="font-semibold text-violet-400">
                        HOW IT WORKS
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-white">
                        Top Up Dalam 5 Langkah Mudah
                    </h2>

                    <p className="mt-5 text-slate-400">
                        Proses cepat, aman, dan otomatis tanpa ribet.
                    </p>

                </div>

                <div className="relative mt-20">

                    {/* Garis penghubung desktop */}
                    <div className="absolute left-0 right-0 top-16 hidden h-1 bg-slate-700 lg:block" />

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

                        {steps.map((step) => (
                            <StepCard
                                key={step.id}
                                step={step}
                            />
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}