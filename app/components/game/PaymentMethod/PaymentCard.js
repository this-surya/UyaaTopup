import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function PaymentCard({
  payment,
  active,
  onclick,
}) {
  return (
    <button
      onClick={onclick}
      className={`
        relative
        flex
        items-center
        justify-between
        rounded-2xl
        border
        p-5
        transition-all
        duration-200

        ${
          active
            ? "border-violet-500 bg-violet-500/10"
            : "border-slate-700 bg-[#08111F] hover:border-violet-400"
        }
      `}
    >

      <div className="flex items-center gap-4">

        <img
          src={payment.image}
          alt={payment.name}
          width={40}
          height={40}
        />

        <div>

          <h4 className="font-semibold text-white">
            {payment.name}
          </h4>

          <p className="text-sm text-slate-400">
            Admin Rp {payment.fee.toLocaleString("id-ID")}
          </p>

        </div>

      </div>

      {active && (
        <CheckCircle2
          className="text-violet-400"
          size={24}
        />
      )}

    </button>
  );
}