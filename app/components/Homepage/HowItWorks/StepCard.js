export default function StepCard({ step }) {

    const Icon = step.icon;

    return (
        <div className="relative flex flex-col items-center text-center">

            {/* Number */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-1 text-sm font-bold text-white">
                {step.id}
            </div>

            {/* Card */}
            <div
                className="
                    group
                    mt-6
                    w-full
                    rounded-3xl
                    border
                    border-slate-800
                    bg-[#111827]
                    p-8
                    transition-all
                    duration-300
                    hover:border-violet-500
                    hover:-translate-y-2
                "
            >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600">
                    <Icon size={36} className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                    {step.description}
                </p>
            </div>

        </div>
    );
}