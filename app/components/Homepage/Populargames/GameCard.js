import { Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function GameCard({ game }) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-slate-800
      bg-[#111827]
      transition-all
      duration-300
      hover:-translate-y-3
      hover:border-violet-500
      hover:shadow-[0_0_30px_rgba(139,92,246,.35)]
    "
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={game.image}
          alt={game.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        {/* <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">
          {game.badge}
        </span> */}

        <h3 className="mt-4 text-xl font-bold text-white">{game.name}</h3>

        <p className="mt-1 text-sm text-slate-400">{game.category}</p>

        <div className="mt-4 flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-white">{game.rating}</span>
        </div>

        <button
          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-600
          py-3
          font-semibold
          text-white
          transition
          hover:scale-105
        "
        >
          Top Up

          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}