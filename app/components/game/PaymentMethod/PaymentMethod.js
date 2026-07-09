"use client";

import { useState } from "react";
import PaymentCard from "./PaymentCard";
import { useCheckout } from "@/app/context/CheckoutContext";



export default function PaymentMethod({ payments }) {

  const categories = [...new Set(payments.map((item) => item.category))];
  const {
    selectedPayment,
    setSelectedPayment,
    setCheckout,
  } = useCheckout();
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

          <span className="text-sm font-semibold text-violet-400">
            STEP 3
          </span>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Pilih Metode Pembayaran
          </h2>

          {categories.map((category) => (
            <div key={category} className="mt-10">

              <h3 className="mb-5 text-lg font-semibold text-white">
                {category}
              </h3>

              <div className="grid gap-4 md:grid-cols-2">

                {payments
                  .filter((item) => item.category === category)
                  .map((payment) => (
                    <PaymentCard
                      key={payment.id}
                      payment={payment}
                      active={selectedPayment?.id === payment.id}
                      onclick={() => setSelectedPayment(payment)}
                      onClick={() =>
                        setCheckout((prev) => ({
                          ...prev,
                          payment,
                        }))
                      }
                    />
                  ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}