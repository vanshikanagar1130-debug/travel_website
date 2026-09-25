import { useState } from "react";
import { CarFront, LogOut, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { PHONE_1, PHONE_1_FMT, WA_LINK_DEFAULT } from "@/data";

const LINKS = [
  ["Packages", "#packages"],
  ["Fleet", "#fleet"],
  ["Why Us", "#why-us"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.07.72-2.44 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A12 12 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28v-3.1H1.29a12 12 0 0 0 0 10.76l3.98-3.1z"
    />
    <path
      fill="#EA4335"
      d="M12 4.76c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.29 6.62l3.98 3.1C6.22 6.87 8.87 4.76 12 4.76z"
    />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, login, logout } = useAuth();

  const authBlock = user ? (
    <div className="flex items-center gap-2" data-testid="header-user-chip">
      {user.picture ? (
        <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full ring-2 ring-gold/40" />
      ) : (
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-royal text-xs font-bold text-white">
          {user.name?.charAt(0)?.toUpperCase()}
        </span>
      )}
      <span className="max-w-[110px] truncate text-sm font-semibold text-royal">
        {user.name?.split(" ")[0]}
      </span>
      <button
        data-testid="header-logout-button"
        onClick={logout}
        aria-label="Sign out"
        className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
      >
        <LogOut className="h-4 w-4" />
      </button>
    </div>
  ) : (
    <button
      data-testid="header-signin-button"
      onClick={login}
      className="flex items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-2 text-sm font-semibold text-royal shadow-sm transition-all hover:border-gold hover:shadow-md"
    >
      <GoogleIcon /> Sign in
    </button>
  );

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
          {authBlock}
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
            <div className="mt-1 border-t border-royal/10 pt-3">{authBlock}</div>
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
