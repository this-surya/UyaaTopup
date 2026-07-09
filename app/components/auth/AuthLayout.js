import Link from "next/link";

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <main className="min-h-screen bg-[#08111F] flex items-center justify-center px-6 py-12">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">

          <Link href="/">
            <h1 className="text-4xl font-extrabold text-white tracking-wide cursor-pointer">
              Game<span className="text-violet-500">TopUp</span>
            </h1>
          </Link>

          <h2 className="mt-6 text-3xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-2 text-slate-400">
            {subtitle}
          </p>

        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-700 bg-[#111827] p-8 shadow-2xl">

          {children}

        </div>

      </div>

    </main>
  );
}