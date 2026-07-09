"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#111827]">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >
        <h3 className="font-semibold text-white">
          {item.question}
        </h3>

        {open ? (
          <Minus className="text-violet-400" />
        ) : (
          <Plus className="text-violet-400" />
        )}
      </button>

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <p className="px-6 pb-6 text-slate-400 leading-7">
          {item.answer}
        </p>
      </div>
    </div>
  );
}