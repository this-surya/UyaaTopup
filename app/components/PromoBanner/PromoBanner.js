export default function PromoBanner() {
    return (
      <section className="bg-[#08111F] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-500/20
              bg-gradient-to-r
              from-violet-700
              via-fuchsia-600
              to-indigo-700
              p-12
              shadow-2xl
            "
          >
            {/* Glow */}
            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
  
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-white">
                🔥 LIMITED TIME OFFER
              </span>
  
              <h2 className="mt-6 text-4xl font-extrabold text-white md:text-6xl">
                Diskon Hingga 30%
              </h2>
  
              <p className="mt-5 max-w-2xl text-lg text-violet-100">
                Nikmati promo spesial untuk top up Mobile Legends,
                Free Fire, PUBG Mobile, Valorant, dan game favorit lainnya.
              </p>
  
              <div className="mt-8 rounded-2xl border border-dashed border-white/40 bg-black/20 px-8 py-5">
                <p className="text-sm text-violet-200">
                  Gunakan Kode Promo
                </p>
  
                <h3 className="mt-2 text-3xl font-bold tracking-[0.3em] text-white">
                  TOPUP30
                </h3>
              </div>
  
              <button
                className="
                  mt-10
                  rounded-xl
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-violet-700
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-xl
                "
              >
                Claim Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }