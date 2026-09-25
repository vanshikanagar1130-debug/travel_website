import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin, MessageCircle } from "lucide-react";
import { CARS, PACKAGES, fmt, waLink } from "@/data";

const SectionHeading = ({ eyebrow, title, sub }) => (
  <div className="mx-auto max-w-2xl text-center">
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-royal sm:text-3xl lg:text-4xl">
      {title}
    </h2>
    <div className="mx-auto mt-4 gold-divider" />
    {sub && <p className="mt-4 text-sm text-slate-500 sm:text-base">{sub}</p>}
  </div>
);

function PackageCard({ pkg, index }) {
  const [car, setCar] = useState("dzire");
  const price = pkg.prices[car];
  const carName = CARS.find((c) => c.id === car).name;
  const msg = price
    ? `Hello, I want to book the "${pkg.title}" package (${carName} - ${fmt(price)}). Please share details.`
    : `Hello, I want to enquire about the "${pkg.title}" package (${carName}). Please share price and details.`;

  return (
    <motion.article
      data-testid={pkg.cardTestId}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className={`relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-shadow hover:shadow-xl ${
        pkg.popular ? "border-gold/50 ring-2 ring-gold/30" : "border-royal/10"
      }`}
    >
      {pkg.popular && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
          Most Popular
        </span>
      )}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/70 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-royal">
          {pkg.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-royal sm:text-2xl">{pkg.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-gold" /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-gold" /> {pkg.route}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{pkg.description}</p>

        <ul className="mt-4 space-y-1.5">
          {pkg.sites.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {s}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {pkg.inclusions.map((inc) => (
            <span
              key={inc}
              className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-royal/10"
            >
              {inc}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-royal/10 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Select your car
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {CARS.map((c) => (
              <button
                key={c.id}
                data-testid={`${pkg.id}-car-${c.id}`}
                onClick={() => setCar(c.id)}
                className={`rounded-xl border px-2 py-2 text-center transition-colors ${
                  car === c.id
                    ? "border-gold bg-gold/10 text-royal"
                    : "border-royal/15 text-slate-500 hover:border-gold/40"
                }`}
              >
                <span className="block text-xs font-bold">{c.name}</span>
                <span className="block text-[10px]">{c.seats}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-slate-400">Package price</p>
              <p data-testid={`${pkg.id}-price`} className="font-serif text-3xl font-bold text-royal">
                {price ? fmt(price) : "On Request"}
              </p>
            </div>
            <p className="pb-1 text-[11px] text-slate-400">All inclusive</p>
          </div>

          <a
            data-testid={pkg.btnTestId}
            href={waLink(msg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1eb85a] hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" /> Book Now via WhatsApp
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Holy Darshan Packages"
          title="Sacred Journeys from Indore"
          sub="One-day pilgrimage packages with pickup & drop, tolls and parking included. Choose your car, see the exact price, book instantly."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          All packages include river views &amp; temple visits · Advance booking recommended · GST Registered
        </p>
      </div>
    </section>
  );
}
