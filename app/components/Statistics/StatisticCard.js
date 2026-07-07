export default function StatisticCard({ statistic }) {
    const Icon = statistic.icon;
  
    return (
      <div
        className="
          group
          rounded-3xl
          border
          border-slate-800
          bg-[#111827]
          p-8
          text-center
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-500
          hover:shadow-xl
        "
      >
        <div
          className={`
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-r
            ${statistic.color}
          `}
        >
          <Icon className="text-white" size={30} />
        </div>
  
        <h3 className="mt-6 text-4xl font-bold text-white">
          {statistic.value}
        </h3>
  
        <p className="mt-2 text-slate-400">
          {statistic.label}
        </p>
      </div>
    );
  }