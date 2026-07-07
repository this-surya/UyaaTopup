import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaTiktok,
    FaDiscord
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050B16]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              NexaTopup
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Platform top up game digital yang cepat,
              aman, dan terpercaya dengan berbagai
              metode pembayaran.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/games">Games</Link></li>
              <li><Link href="/">Promo</Link></li>
              <li><Link href="/">FAQ</Link></li>

            </ul>

          </div>

          {/* Support */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="flex items-center gap-3">
                <Phone size={18}/>
                WhatsApp
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18}/>
                support@nexatopup.com
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle size={18}/>
                Live Chat
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-6 font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <FaInstagram  size={22} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-slate-800 p-3 transition hover:bg-violet-600"
              >
                <FaYoutube size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 NexaTopup. All rights reserved.
          </p>

          <p>
            Built with ❤️ using Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}