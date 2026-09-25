import { MessageCircle } from "lucide-react";
import { WA_LINK_DEFAULT } from "@/data";

export default function FloatingWhatsApp() {
  return (
    <a
      data-testid="floating-whatsapp-trigger"
      href={WA_LINK_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-royal px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Instant Reply · Book Now
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-transform hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7 text-white" />
      </span>
    </a>
  );
}
