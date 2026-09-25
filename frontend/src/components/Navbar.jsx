import { useState } from "react";
import { CarFront, Menu, MessageCircle, Phone, X } from "lucide-react";
import { PHONE_1, PHONE_1_FMT, WA_LINK_DEFAULT } from "@/data";

const LINKS = [
  ["Packages", "#packages"],
  ["Fleet", "#fleet"],
  ["Why Us", "#why-us"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-royal/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" data-testid="header-brand-logo" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal shadow-md">
            <CarFront className="h-5 w-5 text-gold-bright" />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold text-royal sm:text-lg">Shree Sawriya Seth</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
              Tour &amp; Travels · Indore
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            data-testid="header-phone-link"
            href={`tel:+91${PHONE_1}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {PHONE_1_FMT}
          </a>
          <a
            data-testid="header-whatsapp-button"
            href={WA_LINK_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-royal lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-royal/10 bg-white px-4 py-4 lg:hidden" data-testid="mobile-menu">
          <nav className="flex flex-col gap-3">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {label}
              </a>
            ))}
            <a
              href={WA_LINK_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
