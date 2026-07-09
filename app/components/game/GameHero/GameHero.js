import Image from "next/image";
import { Star } from "lucide-react";
import BackButton from "../../common/Footer/BackButton/BackButton";

export default function GameHero({ game }) {
  return (
    <section className="relative">

    <BackButton/>

      {/* Banner */}

      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage: `url(${game.banner})`,
        }}
      />

      <div className="mx-auto max-w-7xl px-6">

        <div className="-mt-20 flex flex-col gap-6 rounded-3xl border border-slate-800 bg-[#111827] p-8 shadow-xl md:flex-row">

          <Image
            src={game.image}
            alt={game.name}
            width={150}
            height={150}
            className="rounded-2xl"
          />

          <div className="flex-1">

            <h1 className="text-4xl font-bold text-white">
              {game.name}
            </h1>

            <p className="mt-2 text-slate-400">
              {game.publisher}
            </p>

            <div className="mt-5 flex flex-wrap gap-6">

              <div className="flex items-center gap-2">

                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="text-white">
                  {game.rating}
                </span>

              </div>

              <span className="text-slate-400">
                {game.sold} Orders
              </span>

              <span className="rounded-full bg-violet-600/20 px-3 py-1 text-sm text-violet-400">
                {game.category}
              </span>

            </div>

            <p className="mt-6 leading-7 text-slate-400">
              {game.description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}