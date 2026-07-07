export default function CategoryCard({ category }) {
    const Icon = category.icon;
  
    return (
      <div
        className="
          group
          cursor-pointer
          rounded-3xl
          border
          border-slate-800
          bg-[#111827]
          p-8
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
            ${category.color}
          `}
        >
          <Icon className="text-white" size={30} />
        </div>
  
        <h3 className="mt-6 text-center text-lg font-semibold text-white">
          {category.name}
        </h3>
      </div>
    );
  }