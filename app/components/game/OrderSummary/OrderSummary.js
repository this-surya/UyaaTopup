"use client";

import SummaryItem from "./SummaryItem";
import { useCheckout } from "@/app/context/CheckoutContext";
import { isCheckoutValid } from "@/app/utils/CheckoutValidation";



export default function OrderSummary({ game, fields }) {

    const {
        selectedProduct,
        selectedPayment,
        checkout
    } = useCheckout();

    const isValid = isCheckoutValid(checkout, fields);

    const subtotal = selectedProduct?.price || 0;

    const admin = selectedPayment?.fee || 0;

    const total = subtotal + admin;

    return (
        <section className="py-10">

            <div className="mx-auto max-w-7xl px-6">

                <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

                    <span className="text-sm font-semibold text-violet-400">
                        STEP 4
                    </span>

                    <h2 className="mt-2 text-3xl font-bold text-white">
                        Ringkasan Pesanan
                    </h2>

                    <div className="mt-8">

                        <SummaryItem
                            label="Game"
                            value={game.name}
                        />

                        <SummaryItem
                            label="Produk"
                            value={selectedProduct?.name || "-"}
                        />

                        <SummaryItem
                            label="Pembayaran"
                            value={selectedPayment?.name || "-"}
                        />

                        <SummaryItem
                            label="Subtotal"
                            value={`Rp ${subtotal.toLocaleString("id-ID")}`}
                        />

                        <SummaryItem
                            label="Admin"
                            value={`Rp ${admin.toLocaleString("id-ID")}`}
                        />

                        <SummaryItem
                            label="Total"
                            value={`Rp ${total.toLocaleString("id-ID")}`}
                            bold
                        />

                    </div>

                    <button
                        className={`
            mt-8
            w-full
            rounded-xl
            bg-violet-600
            py-4
            font-semibold
            text-white
            transition
            hover:bg-violet-700
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${
                isValid
        ? "bg-violet-600 hover:bg-violet-700 text-white"
        : "bg-slate-700 text-slate-400 cursor-not-allowed"
            }`}
                        disabled={!isValid}
                    >
                        Checkout
                    </button>

                </div>

            </div>

        </section>
    );
}