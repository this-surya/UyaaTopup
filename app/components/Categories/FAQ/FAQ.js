import faq from "@/app/data/faq";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section className="bg-[#08111F] py-24">

      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="font-semibold text-violet-400">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-400">
            Temukan jawaban dari pertanyaan yang sering diajukan.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faq.map((item) => (
            <Accordion
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}