import { Clock, Mail, MapPin, MessageCircle, Phone, User } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  OWNER,
  PHONE_1,
  PHONE_1_FMT,
  PHONE_2,
  PHONE_2_FMT,
  WA_LINK_DEFAULT,
} from "@/data";

const CARDS = [
  {
    icon: User,
    title: "Owner",
    lines: [OWNER, "Proprietor — personally manages every booking"],
  },
  {
    icon: MapPin,
    title: "Our Address",
    lines: [ADDRESS, "Doorstep pickup anywhere in Indore"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Open 24 × 7 · Daily Departures", "Advance booking recommended"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-royal sm:text-3xl lg:text-4xl">
            Book Your Spiritual Journey Now
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              data-testid={`contact-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-3xl border border-royal/10 bg-white p-7 text-center shadow-sm"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-royal/5 ring-1 ring-royal/10">
                <c.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-royal">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="mt-1.5 text-sm text-slate-600">
                  {l}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-royal p-8 shadow-xl sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl font-semibold text-white">Call / WhatsApp — Instant Booking</h3>
              <a
                data-testid="contact-email-link"
                href={`mailto:${EMAIL}`}
                className="mt-2 flex items-center justify-center gap-2 text-sm text-slate-300 transition-colors hover:text-gold-bright lg:justify-start"
              >
                <Mail className="h-4 w-4 text-gold-bright" /> {EMAIL}
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                data-testid="contact-phone-1"
                href={`tel:+91${PHONE_1}`}
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-gold-bright"
              >
                <Phone className="h-4 w-4" /> {PHONE_1_FMT}
              </a>
              <a
                data-testid="contact-phone-2"
                href={`tel:+91${PHONE_2}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-gold-bright hover:text-gold-bright"
              >
                <Phone className="h-4 w-4" /> {PHONE_2_FMT}
              </a>
              <a
                data-testid="contact-whatsapp-button"
                href={WA_LINK_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1eb85a]"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
