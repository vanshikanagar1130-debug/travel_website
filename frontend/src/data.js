export const WA_NUMBER = "916262890096";
export const WA_LINK_DEFAULT =
  "https://wa.me/916262890096?text=Hello%2C%20I%20want%20to%20enquire%20about%20a%20tour%20package.";
export const waLink = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const AGENCY = "Shree Sawriya Seth Tour & Travels";
export const AGENCY_ALT = "Shree Shyam Tour and Travels";
export const TAGLINE = "Your Trusted Travel Partner for Holy Darshan";
export const OWNER = "Harsh Thakur";
export const EMAIL = "shreesawriyasethtoortravels@gmail.com";
export const PHONE_1 = "6262890096";
export const PHONE_2 = "9329245586";
export const PHONE_1_FMT = "+91 62628 90096";
export const PHONE_2_FMT = "+91 93292 45586";
export const ADDRESS = "Scheme No 51, Near Mari Mata Square, Indore, Madhya Pradesh";

export const CARS = [
  { id: "dzire", name: "Maruti Dzire", seats: "4 Seater", tag: "Comfortable" },
  { id: "ertiga", name: "Maruti Ertiga", seats: "6-7 Seater", tag: "Spacious" },
  { id: "innova", name: "Innova Crysta", seats: "6-7 Seater", tag: "Premium" },
];

export const fmt = (n) => `₹${n.toLocaleString("en-IN")}`;

export const PACKAGES = [
  {
    id: "omkareshwar",
    cardTestId: "package-card-omkareshwar",
    btnTestId: "package-whatsapp-btn-omkareshwar",
    title: "Omkareshwar & Mamleshwar Jyotirlinga Darshan",
    duration: "1 Day Tour",
    route: "Indore → Omkareshwar · Narmada River Banks",
    badge: "One of the 12 Jyotirlingas",
    image:
      "https://images.unsplash.com/photo-1650341278999-d1b5142cfe30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMHJpdmVyJTIwaW5kaWF8ZW58MHx8fHwxNzkwMzY3NTMyfDA&ixlib=rb-4.1.0&q=85",
    alt: "Sacred Omkareshwar temple on the Narmada river island",
    description:
      "Experience the divine journey on the sacred banks of the Narmada River. Darshan of Shri Omkareshwar Jyotirlinga on the Narmada island and the ancient Mamleshwar Temple on the southern bank.",
    sites: ["Omkareshwar Jyotirlinga", "Mamleshwar Temple", "Narmada River Ghats"],
    inclusions: [
      "Toll & Parking Included",
      "Experienced Driver",
      "Clean & Sanitized Cars",
      "Pickup & Drop from Indore",
    ],
    prices: { dzire: 3500, ertiga: 4000, innova: 5000 },
    popular: false,
  },
  {
    id: "ujjain",
    cardTestId: "package-card-ujjain",
    btnTestId: "package-whatsapp-btn-ujjain",
    title: "Ujjain Darshan — 5 Sacred Sites",
    duration: "1 Day Tour",
    route: "Indore → Ujjain (55 KM)",
    badge: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1650342518618-fdeaae0ef4f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxoaW5kdSUyMHRlbXBsZSUyMHJpdmVyJTIwaW5kaWF8ZW58MHx8fHwxNzkwMzY3NTMyfDA&ixlib=rb-4.1.0&q=85",
    alt: "Mahakaleshwar Jyotirlinga temple and sacred ghats of Ujjain",
    description:
      "A spiritual journey to Mahakaleshwar Jyotirlinga covering all 5 divine temples of Avantika Nagari in one unforgettable day — all inclusive with river views and temple visits.",
    sites: [
      "Mahakaleshwar Jyotirlinga",
      "Harsiddhi Mandir (Shakti Peeth)",
      "Kal Bhairav Mandir",
      "Sandipani Ashram",
      "Mangalnath Mandir",
    ],
    inclusions: [
      "Toll & Parking Included",
      "Experienced Driver",
      "Clean & Sanitized Cars",
      "Daily Departures from Indore",
    ],
    prices: { dzire: 3000, ertiga: 3500, innova: 4500 },
    popular: true,
  },
  {
    id: "sanwariya",
    cardTestId: "package-card-sanwariya-seth",
    btnTestId: "package-whatsapp-btn-sanwariya-seth",
    title: "Shri Sanwariya Seth Darshan Yatra",
    duration: "Full Day Yatra",
    route: "Indore → Mandaphiya, Chittorgarh (Rajasthan)",
    badge: "All Inclusive",
    image:
      "https://images.unsplash.com/photo-1538460120076-604b93a2ce88?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB0ZW1wbGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzkwMzY3NTQwfDA&ixlib=rb-4.1.0&q=85",
    alt: "Grand temple architecture of Shri Sanwariya Seth Mandaphiya",
    description:
      "आओ सांवरिया सेठ के दरबार — a memorable yatra filled with devotion and joy to the famous shrine of Lord Krishna at Mandaphiya. Toll tax and parking fully included.",
    sites: ["Shri Sanwariya Seth Mandir, Mandaphiya"],
    inclusions: [
      "Toll Tax & Parking सहित",
      "Safe & Reliable Journey",
      "Comfortable Group Travel",
      "Experienced Highway Driver",
    ],
    prices: { dzire: 8500, ertiga: null, innova: null },
    popular: false,
  },
];

export const FLEET = [
  {
    id: "dzire",
    cardTestId: "fleet-card-dzire",
    name: "Maruti Suzuki Dzire",
    category: "Comfortable AC Sedan",
    image:
      "https://images.unsplash.com/photo-1646960700481-c7be5224a7fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjYXIlMjBzZWRhbiUyMHN0dWRpbyUyMHdoaXRlfGVufDB8fHx8MTc5MDM2NzUzMnww&ixlib=rb-4.1.0&q=85",
    alt: "White Maruti Suzuki Dzire AC sedan",
    seats: "Upto 4 Passengers",
    luggage: "2 Large + 1 Small Bags",
    features: ["Chilled AC", "Pushback Seats", "Music System", "Best for Couples & Small Families"],
  },
  {
    id: "ertiga",
    cardTestId: "fleet-card-ertiga",
    name: "Maruti Suzuki Ertiga",
    category: "Spacious AC MPV",
    image:
      "https://images.unsplash.com/photo-1760713170685-b67abc3be5ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxzdXYlMjBjYXIlMjB3aGl0ZSUyMHN0dWRpb3xlbnwwfHx8fDE3OTAzNjc1NDB8MA&ixlib=rb-4.1.0&q=85",
    alt: "Spacious Maruti Suzuki Ertiga family MPV",
    seats: "Upto 6 Passengers",
    luggage: "3-4 Bags (Foldable Rear)",
    features: ["Rear AC Vents", "Spacious Legroom", "Smooth Highway Ride", "Ideal for Group Yatra"],
  },
  {
    id: "innova",
    cardTestId: "fleet-card-innova",
    name: "Toyota Innova Crysta",
    category: "Premium Luxury MPV",
    image:
      "https://images.unsplash.com/photo-1646644434370-a23a5eaa6d05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHw0fHxzdXYlMjBjYXIlMjB3aGl0ZSUyMHN0dWRpb3xlbnwwfHx8fDE3OTAzNjc1NDB8MA&ixlib=rb-4.1.0&q=85",
    alt: "Executive Toyota Innova Crysta luxury tourer",
    seats: "Upto 7 Passengers",
    luggage: "4-5 Large Suitcases",
    features: ["Captain Seats", "Ultra-Silent Cabin", "Superior Safety", "VIP & Senior Citizen Preferred"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajeshwar Verma",
    role: "Pilgrim from Ahmedabad",
    avatar:
      "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MHx8fHwxNzkwMzY3NTQ0fDA&ixlib=rb-4.1.0&q=85",
    quote:
      "Harsh ji arranged our early morning Bhasma Aarti trip to Ujjain flawlessly. Clean Innova Crysta, smooth highway drive, and a courteous driver who guided our parents carefully at Mahakaleshwar.",
  },
  {
    name: "Dr. Ananya Trivedi",
    role: "Family Travel, Delhi",
    avatar:
      "https://images.unsplash.com/photo-1749700332031-cf99864959ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MHx8fHwxNzkwMzY3NTQ0fDA&ixlib=rb-4.1.0&q=85",
    quote:
      "Took the Omkareshwar one-day trip in a Dzire. The car was spotless and the driver knew the Narmada ghat timings perfectly. Unbeatable pricing and very genuine service!",
  },
  {
    name: "Suresh & Sharda Patidar",
    role: "Senior Citizens, Indore",
    avatar:
      "https://images.unsplash.com/photo-1580471260026-2a8acbc7c7a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MHx8fHwxNzkwMzY3NTQ0fDA&ixlib=rb-4.1.0&q=85",
    quote:
      "Sanwariya Seth Darshan Yatra from Indore was comfortable beyond words. All tolls and parking were covered upfront as promised. Highly recommend Harsh Thakur's agency.",
  },
];

export const TRUST_BADGES = [
  { testId: "trust-badge-years-experience", label: "3+ Years Experience", sub: "Trusted Pilgrimage Service" },
  { testId: "trust-badge-24-7-support", label: "24/7 Support", sub: "Instant Booking, Daily Departures" },
  { testId: "trust-badge-verified-drivers", label: "Verified Drivers", sub: "Experienced & Courteous" },
  { testId: "trust-badge-best-price", label: "Best Price Guarantee", sub: "Zero Hidden Charges" },
];
