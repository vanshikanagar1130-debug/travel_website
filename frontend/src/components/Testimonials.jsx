import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Pilgrim Reviews
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-royal sm:text-3xl lg:text-4xl">
            Journeys Our Yatris Cherish
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              data-testid={`testimonial-card-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-3xl border border-royal/10 bg-cream p-7 shadow-sm"
            >
              <Quote className="h-7 w-7 text-gold/40" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-gold-bright text-gold-bright" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-royal/10 pt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-gold/30"
                />
                <div>
                  <p className="text-sm font-bold text-royal">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
