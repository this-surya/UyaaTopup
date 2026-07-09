export default function SummaryItem({
    label,
    value,
    bold = false,
  }) {
    return (
      <div className="flex items-center justify-between py-3 border-b border-slate-700">
  
        <span className="text-slate-400">
          {label}
        </span>
  
        <span
          className={`${
            bold
              ? "font-bold text-white"
              : "text-white"
          }`}
        >
          {value}
        </span>
  
      </div>
    );
  }