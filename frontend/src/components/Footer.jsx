import { CarFront, Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS,
  AGENCY,
  AGENCY_ALT,
  EMAIL,
  PHONE_1,
  PHONE_1_FMT,
  PHONE_2,
  PHONE_2_FMT,
  TAGLINE,
} from "@/data";

export default function Footer() {
  return (
    <footer className="bg-royal-dark text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
              <CarFront className="h-5 w-5 text-gold-bright" />
            </span>
            <span className="font-serif text-lg font-bold text-white">Shree Sawriya Seth</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {AGENCY} — formerly {AGENCY_ALT}. {TAGLINE}. Rental cars, tour packages and safe
            journeys from Indore.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-bright">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Tour Packages", "#packages"],
              ["Our Fleet", "#fleet"],
              ["Why Choose Us", "#why-us"],
              ["Reviews", "#reviews"],
              ["Book Now", "#enquiry"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-gold-bright">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-bright">Reach Us · 24×7</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold-bright" />
              <a href={`tel:+91${PHONE_1}`} className="hover:text-gold-bright">{PHONE_1_FMT}</a>
              <span className="text-slate-500">|</span>
              <a href={`tel:+91${PHONE_2}`} className="hover:text-gold-bright">{PHONE_2_FMT}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-bright" />
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-gold-bright">{EMAIL}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
              <span>{ADDRESS}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {AGENCY}. All rights reserved.</p>
          <p>Safe · Comfortable · On-Time · Trusted in Indore · GST Registered</p>
        </div>
      </div>
    </footer>
  );
}
