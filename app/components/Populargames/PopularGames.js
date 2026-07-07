import games from "@/app/data/games";
import GameCard from "./GameCard";

export default function PopularGames() {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <span className="text-violet-400">
              🔥 POPULAR GAMES
            </span>

            <h2 className="mt-3 text-5xl font-bold text-white">
              Top Up Game Favoritmu
            </h2>

            <p className="mt-3 text-slate-400">
              Pilih game favoritmu dan lakukan top up dengan cepat,
              aman, dan harga terbaik.
            </p>
          </div>

          <button className="hidden rounded-xl border border-violet-500 px-6 py-3 text-white transition hover:bg-violet-600 lg:block">
            Lihat Semua
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
            />
          ))}
        </div>
      </div>
    </section>
  );
}