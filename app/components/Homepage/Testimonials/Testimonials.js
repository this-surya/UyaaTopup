import testimonials from "@/app/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            TESTIMONIALS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Apa Kata Customer Kami?
          </h2>

          <p className="mt-4 text-slate-400">
            Ribuan gamer telah mempercayakan top up mereka kepada kami.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}

        </div>

      </div>
    </section>
  );
}