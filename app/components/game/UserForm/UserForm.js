import InputField from "./InputField";
export default function UserForm({ game, fields }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-800 bg-[#111827] p-8">

          <span className="text-sm font-semibold text-violet-400">
            STEP 1
          </span>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Masukkan Data Akun
          </h2>

          <p className="mt-3 text-slate-400">
            Pastikan data akun sesuai dengan akun {game.name}.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {fields.map((field) => (
              <InputField
                key={field.id}
                field={field}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}