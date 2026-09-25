import { motion } from "framer-motion";
import { BadgePercent, Clock, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { TRUST_BADGES, WA_LINK_DEFAULT } from "@/data";

const BADGE_ICONS = [Clock, PhoneCall, ShieldCheck, BadgePercent];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-royal-dark pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557062975-96113e46608b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzkwMzY3NTQwfDA&ixlib=rb-4.1.0&q=85"
          alt="Majestic Indian temple architecture"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-dark/70 via-royal/80 to-royal-dark" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Indore&rsquo;s Trusted Pilgrimage Travel Partner
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sacred Darshan Journeys,{" "}
            <span className="text-gold-bright">Driven with Devotion</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Shree Sawriya Seth Tour &amp; Travels brings you comfortable one-day yatras to
            Omkareshwar, Ujjain Mahakal and Shri Sanwariya Seth — with verified drivers, sanitized
            AC cars and all tolls included. Your journey, our responsibility.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              data-testid="hero-explore-packages-button"
              href="#packages"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-gold/30 transition-all hover:bg-gold-bright hover:shadow-gold/50"
            >
              Explore Packages
            </a>
            <a
              data-testid="hero-book-whatsapp-button"
              href={WA_LINK_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[#25D366] hover:bg-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = BADGE_ICONS[i];
            return (
              <motion.div
                key={badge.testId}
                data-testid={badge.testId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5"
              >
                <Icon className="h-6 w-6 text-gold-bright" />
                <p className="mt-3 text-sm font-bold text-white sm:text-base">{badge.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{badge.sub}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
