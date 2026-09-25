import { motion } from "framer-motion";
import { Award, BadgePercent, CarFront, Clock, MapPin, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "3+ Years of Trusted Service",
    text: "Serving pilgrims and families across Madhya Pradesh & Rajasthan with safe, reliable and comfortable travel since day one.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & Experienced Drivers",
    text: "Courteous chauffeurs who know every temple route, ghat timing and darshan queue by heart.",
  },
  {
    icon: CarFront,
    title: "Clean & Sanitized Cars",
    text: "Every car is deep-cleaned and sanitized before your yatra — spotless interiors, chilled AC, fresh feel.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    text: "Early morning Bhasma Aarti or evening Sawari — we arrive before time so you never miss a darshan.",
  },
  {
    icon: BadgePercent,
    title: "Best Price Guarantee",
    text: "Fixed transparent package pricing. Toll, parking and driver charges included — zero hidden costs.",
  },
  {
    icon: MapPin,
    title: "Local Indore Expertise",
    text: "Based at Scheme No 51, Indore — doorstep pickup & drop anywhere in the city, daily departures.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-royal-dark py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold-bright">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            The Shree Sawriya Seth Promise
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15">
                <r.icon className="h-5 w-5 text-gold-bright" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
