"use client";

import { useCheckout } from "@/app/context/CheckoutContext";
export default function InputField({ field }) {
  const { checkout, setCheckout } = useCheckout();
    return (
      <div>
  
        <label className="mb-2 block text-sm font-medium text-slate-300">
          {field.label}
        </label>
  
        <input
          type="text"
          placeholder={field.placeholder}
           onChange={(e) =>
          setCheckout((prev) => ({
            ...prev,
            user: {
              ...prev.user,
              [field.id]: e.target.value,
            },
          }))
        }
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-[#08111F]
            px-4
            py-3
            text-white
            outline-none
            transition
            focus:border-violet-500
          "
        />
  
      </div>
    );
  }