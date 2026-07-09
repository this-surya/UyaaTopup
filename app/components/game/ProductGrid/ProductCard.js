"use client";
import { CheckCircle2 } from "lucide-react";
import { useCheckout } from "@/app/context/CheckoutContext";

export default function ProductCard({ product, active, onclick }) {
   const {
        selectedProduct,
        setSelectedProduct,
    } = useCheckout();
    return (
      <button
        onClick={onclick}
        className={`
        w-full
        rounded-2xl
        border
        border-slate-700
        bg-[#08111F]
        p-5
        text-left
        transition-all
        duration-200
        hover:border-violet-500
        hover:bg-violet-500/10
        
         ${
          active
            ? "border-violet-500 bg-violet-500/10"
            : "border-slate-700 bg-[#08111F] hover:border-violet-400"
        }`}
        
        
      >
        <div className="flex items-center justify-between gap-4">

        <div>
        <h3 className="text-lg font-semibold text-white">
          {product.name}
        </h3>
  
        <p className="mt-2 text-emerald-400 font-bold">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
        </div>
         {active && (
        <CheckCircle2
          className="text-violet-400"
          size={24}
        />
        
      )}
      </div>
      </button>
    );
  }