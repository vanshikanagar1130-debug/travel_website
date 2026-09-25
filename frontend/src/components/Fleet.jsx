import { motion } from "framer-motion";
import { Armchair, Briefcase, CheckCircle2, MessageCircle } from "lucide-react";
import { FLEET, waLink } from "@/data";

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Fleet</p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-royal sm:text-3xl lg:text-4xl">
            Clean, Sanitized &amp; Comfortable Cars
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            Every vehicle is deep-cleaned before each yatra and driven by an experienced, verified chauffeur.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FLEET.map((car, i) => (
            <motion.article
              key={car.id}
              data-testid={car.cardTestId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-royal/10 bg-cream shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={car.image}
                  alt={car.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gold">{car.category}</span>
                <h3 className="mt-1 font-serif text-xl font-semibold text-royal">{car.name}</h3>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3 ring-1 ring-royal/10">
                    <Armchair className="h-4 w-4 text-gold" />
                    <p className="mt-1.5 text-xs font-semibold text-royal">{car.seats}</p>
                  </div>
                  <div className="rounded-xl bg-white p-3 ring-1 ring-royal/10">
                    <Briefcase className="h-4 w-4 text-gold" />
                    <p className="mt-1.5 text-xs font-semibold text-royal">{car.luggage}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" /> {f}
                    </li>
                  ))}
                </ul>

                <a
                  data-testid={`fleet-reserve-${car.id}`}
                  href={waLink(`Hello, I want to reserve a ${car.name} for a tour package. Please share availability.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full border-2 border-royal px-6 py-2.5 text-sm font-bold text-royal transition-colors hover:bg-royal hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Reserve This Car
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
