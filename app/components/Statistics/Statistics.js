import statistics from "@/app/data/statistics";
import StatisticCard from "./StatisticCard";

export default function Statistics() {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Dipercaya Oleh Gamer Indonesia
          </h2>

          <p className="mt-4 text-slate-400">
            Ribuan transaksi diproses setiap hari dengan aman,
            cepat, dan terpercaya.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">

          {statistics.map((item) => (
            <StatisticCard
              key={item.id}
              statistic={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}