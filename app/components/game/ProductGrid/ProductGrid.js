"use client";
import ProductCard from "./ProductCard";
import { useCheckout } from "@/app/context/CheckoutContext";



export default function ProductGrid({ products }) {
  const {
    selectedProduct,
    setSelectedProduct,
    setCheckout
  } = useCheckout();


  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl bg-[#111827] border border-slate-800 p-8">

          <span className="text-violet-400 text-sm font-semibold">
            STEP 2
          </span>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Pilih Nominal Top Up
          </h2>

          <div className="grid gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                active={Number(selectedProduct?.id) === Number(product.id)}
                onclick={() => setSelectedProduct(product)}
                onClick={() =>
                  setCheckout((prev) => ({
                    ...prev,
                    product,
                  }))
                }
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}