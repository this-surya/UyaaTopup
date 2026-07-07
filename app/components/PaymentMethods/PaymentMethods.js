import payments from "@/app/data/payments";
import PaymentCard from "./PaymentCard";

export default function PaymentMethods() {

  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            PAYMENT METHODS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Metode Pembayaran
          </h2>

          <p className="mt-4 text-slate-400">
            Mendukung berbagai metode pembayaran populer di Indonesia.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {payments.map((payment) => (
            <PaymentCard
              key={payment.id}
              payment={payment}
            />
          ))}

        </div>

      </div>
    </section>
  );
}