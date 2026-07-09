import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl">
      <div className="flex items-center gap-4">
        {/* <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        /> */}

        <div>
          <h3 className="font-bold text-white">
            {testimonial.name}
          </h3>

          <p className="text-sm text-slate-400">
            {testimonial.game}
          </p>
        </div>
      </div>

      <div className="mt-5 flex gap-1">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mt-5 leading-7 text-slate-400">
        "{testimonial.review}"
      </p>

      {testimonial.verified && (
        <div className="mt-6 flex items-center gap-2 text-green-400">
          <BadgeCheck size={18} />
          <span className="text-sm">
            Verified Purchase
          </span>
        </div>
      )}
    </div>
  );
}