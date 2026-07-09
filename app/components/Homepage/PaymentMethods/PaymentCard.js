import Image from "next/image";

export default function PaymentCard({ payment }) {
  return (
    <div
      className="
        group
        flex
        h-32
        cursor-pointer
        items-center
        justify-center
        rounded-3xl
        border
        border-slate-800
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-violet-500
        hover:shadow-lg
      "
    >
      <img
        src={payment.image}
        alt={payment.name}
        width={110}
        height={50}
        className="object-contain transition duration-300 group-hover:scale-110"
      />
    </div>
  );
}