import { useMemo, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Calendar, MessageCircle, Send, Sparkles } from "lucide-react";
import { CARS, PACKAGES, fmt, waLink } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = { name: "", phone: "", package: "ujjain", car: "dzire", travel_date: "", passengers: 2, message: "" };

export default function EnquiryForm() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);

  const estimate = useMemo(() => {
    const pkg = PACKAGES.find((p) => p.id === form.package);
    return pkg ? pkg.prices[form.car] : null;
  }, [form.package, form.car]);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const waMessage = () => {
    const pkg = PACKAGES.find((p) => p.id === form.package);
    const car = CARS.find((c) => c.id === form.car);
    return `Hello, I am ${form.name || "a traveller"}. I want to enquire about the "${pkg.title}" package (${car.name}${estimate ? ` - ${fmt(estimate)}` : ""})${form.travel_date ? ` on ${form.travel_date}` : ""} for ${form.passengers} passenger(s).${form.message ? ` Note: ${form.message}` : ""}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please enter your name and phone number.");
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/enquiries`, {
        ...form,
        passengers: Number(form.passengers),
        package: PACKAGES.find((p) => p.id === form.package).title,
        car: CARS.find((c) => c.id === form.car).name,
      });
      toast.success("Enquiry received! We will call you back shortly.");
      setForm(initial);
    } catch {
      toast.error("Could not submit right now — please use WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-royal/15 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  return (
    <section id="enquiry" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-gold">Quick Booking</p>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-royal sm:text-3xl lg:text-4xl">
            Plan Your Yatra in 30 Seconds
          </h2>
          <div className="mx-auto mt-4 gold-divider" />
        </div>

        <form
          onSubmit={submit}
          data-testid="enquiry-form"
          className="mt-10 rounded-3xl border border-royal/10 bg-white p-6 shadow-lg sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Your Name *
              </label>
              <input
                data-testid="enquiry-form-name-input"
                value={form.name}
                onChange={set("name")}
                placeholder="e.g. Ramesh Sharma"
                className={inputCls}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Phone Number *
              </label>
              <input
                data-testid="enquiry-form-phone-input"
                value={form.phone}
                onChange={set("phone")}
                placeholder="10-digit mobile number"
                className={inputCls}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Select Package
              </label>
              <select
                data-testid="enquiry-form-destination-select"
                value={form.package}
                onChange={set("package")}
                className={inputCls}
              >
                {PACKAGES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Select Car
              </label>
              <select
                data-testid="enquiry-form-car-select"
                value={form.car}
                onChange={set("car")}
                className={inputCls}
              >
                {CARS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} · {c.seats}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Travel Date
              </label>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  data-testid="enquiry-form-date-input"
                  type="date"
                  value={form.travel_date}
                  onChange={set("travel_date")}
                  className={`${inputCls} pl-10`}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Passengers
              </label>
              <input
                data-testid="enquiry-form-passengers-input"
                type="number"
                min="1"
                max="7"
                value={form.passengers}
                onChange={set("passengers")}
                className={inputCls}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Message (optional)
              </label>
              <textarea
                data-testid="enquiry-form-message-input"
                rows="3"
                value={form.message}
                onChange={set("message")}
                placeholder="Pickup location, special requirements, Bhasma Aarti booking help..."
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-royal/5 px-5 py-4 ring-1 ring-royal/10">
            <Sparkles className="h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm text-slate-600">
              Estimated package price:{" "}
              <span data-testid="enquiry-price-estimate" className="font-serif text-xl font-bold text-royal">
                {estimate ? fmt(estimate) : "On Request"}
              </span>{" "}
              <span className="text-xs text-slate-400">(toll, parking &amp; driver included)</span>
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              data-testid="enquiry-form-submit-button"
              type="submit"
              disabled={sending}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-royal px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-royal-light disabled:opacity-60"
            >
              <Send className="h-4 w-4" /> {sending ? "Sending..." : "Submit Enquiry"}
            </button>
            <a
              data-testid="enquiry-form-whatsapp-button"
              href={waLink(waMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#1eb85a]"
            >
              <MessageCircle className="h-4 w-4" /> Send on WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
