import {
  bathroom,
  breakfastView,
  cottagesNight,
  exteriorDay,
  foodSunset,
  mountainClouds,
  roomMaster,
  roomWarm,
  roomWindow,
  viewSign,
} from "@/assets/moksha-images";

export const contactInfo = {
  phone: "08920636125",
  phoneHref: "tel:08920636125",
  whatsappHref: "https://wa.me/918920636125",
  address: "Chalal, Himachal Pradesh 175105",
  email: "stay@mokshacottages.com",
};

export const locationOptions = [
  {
    name: "Kasol",
    route: "/kasol",
    blurb: "A dramatic pine-lined valley stay close to Chalal Trek and the Parvati River.",
  },
  {
    name: "Jibhi",
    route: "/jibhi",
    blurb: "An immersive riverside retreat wrapped in cedar, waterfalls, and slow mornings.",
  },
] as const;

export const stats = [
  { label: "Years of hosting", value: "08" },
  { label: "Signature cottages", value: "24" },
  { label: "Happy guests", value: "4.8k" },
  { label: "Guest rating", value: "4.9" },
] as const;

export const amenities = [
  "Mountain View",
  "River View",
  "Bonfire Evenings",
  "Free Wi‑Fi",
  "Restaurant",
  "Parking",
  "Private Balcony",
  "Guided Experiences",
] as const;

export const rooms = [
  {
    name: "Standard Room",
    slug: "standard-room",
    route: "/rooms",
    price: "From ₹4,500 / night",
    summary: "A quiet cedar-lined retreat with warm lighting, crisp bedding, and forest views.",
    features: ["King Bed", "Forest Outlook", "Modern Bathroom", "Heated Water"],
    images: [roomWindow, roomWarm, bathroom],
  },
  {
    name: "Wooden Cottage",
    slug: "wooden-cottage",
    route: "/rooms",
    price: "From ₹6,500 / night",
    summary: "A handcrafted cottage experience framed by mountain air and private outdoor seating.",
    features: ["Private Deck", "Premium Interiors", "Wide Windows", "Bonfire Access"],
    images: [exteriorDay, roomMaster, roomWindow],
  },
  {
    name: "Luxury Cottage",
    slug: "luxury-cottage",
    route: "/rooms",
    price: "From ₹8,500 / night",
    summary: "An elevated stay with designer wood interiors, generous space, and sunset-ready vistas.",
    features: ["Luxury Bedding", "Panoramic View", "Curated Lighting", "Fine Bath Amenities"],
    images: [roomMaster, roomWarm, exteriorDay],
  },
  {
    name: "Duplex Cottage",
    slug: "duplex-cottage",
    route: "/rooms",
    price: "From ₹11,000 / night",
    summary: "A larger family-friendly mountain stay designed for layered comfort and cinematic mornings.",
    features: ["Family Layout", "Lounge Nook", "Large Windows", "Scenic Privacy"],
    images: [viewSign, roomMaster, breakfastView],
  },
  {
    name: "Rock Cottage",
    slug: "rock-cottage",
    route: "/rooms",
    price: "From ₹12,500 / night",
    summary: "A moodier, more secluded escape that brings together raw mountain character and soft luxury.",
    features: ["Signature Setting", "Premium Finishes", "Stone + Wood Palette", "Night Ambience"],
    images: [cottagesNight, mountainClouds, roomWarm],
  },
] as const;

export const experiences = [
  {
    title: "Bonfire Nights",
    description: "Slow conversations, glowing embers, and a valley sky filled with stars.",
    image: cottagesNight,
  },
  {
    title: "Nature Walks",
    description: "Guided walks through pine forests, riverside trails, and hidden village paths.",
    image: mountainClouds,
  },
  {
    title: "Chalal Trek",
    description: "A signature local trek with atmospheric bridges, cafés, and mountain air.",
    image: exteriorDay,
  },
  {
    title: "Photography Escapes",
    description: "Golden-hour frames, dramatic peaks, and beautifully textured wooden architecture.",
    image: viewSign,
  },
  {
    title: "Riverside Calm",
    description: "Fresh mornings and the steady rhythm of water near the valley floor.",
    image: breakfastView,
  },
  {
    title: "Cafe Dining",
    description: "Comfort food, warm drinks, and intimate mountain meals with a view.",
    image: foodSunset,
  },
] as const;

export const attractions = [
  {
    name: "Shani Mandir",
    details: "A peaceful spiritual stop set against dramatic Himalayan backdrops.",
    route: "/nearby-attractions",
  },
  {
    name: "Chalal Trek",
    details: "A scenic forest trail that begins right near the pulse of Kasol.",
    route: "/nearby-attractions",
  },
  {
    name: "Kasol Market",
    details: "Artisanal finds, cafés, and the relaxed energy of the Parvati Valley.",
    route: "/nearby-attractions",
  },
  {
    name: "Parvati River",
    details: "The soundscape and soul of the destination — cool, cinematic, unforgettable.",
    route: "/nearby-attractions",
  },
] as const;

export const offers = [
  {
    title: "Stay Longer, Drift Deeper",
    details: "Enjoy special savings on 3-night and 5-night retreats with breakfast included.",
  },
  {
    title: "Sunrise & Supper Escape",
    details: "Couples package with candlelit dinner, bonfire seating, and late checkout.",
  },
  {
    title: "Work From Mountains",
    details: "Weekday extended-stay rates with high-speed Wi‑Fi and café access.",
  },
] as const;

export const testimonials = [
  {
    name: "Aarav & Meher",
    title: "Weekend Guests",
    quote:
      "The cottages felt warm, cinematic, and deeply calming. Every corner looked curated for a luxury retreat.",
  },
  {
    name: "Ritika S.",
    title: "Google Review",
    quote:
      "Waking up to the mountain view and finishing the day by the bonfire made this one of the most memorable stays in Himachal.",
  },
  {
    name: "Kabir Malhotra",
    title: "Family Stay",
    quote:
      "The mix of wood interiors, premium comfort, and raw nature gives Moksha a boutique resort feeling that is rare in the valley.",
  },
] as const;

export const faqs = [
  {
    question: "Do you offer direct WhatsApp booking?",
    answer: "Yes. Guests can confirm availability and coordinate check-in details directly over WhatsApp.",
  },
  {
    question: "Is parking available on-site?",
    answer: "Yes, parking is available for guests arriving by car, subject to seasonal accessibility conditions.",
  },
  {
    question: "Are the cottages family-friendly?",
    answer: "Yes. We welcome couples, families, and small groups across our room categories.",
  },
  {
    question: "What is the best time to visit?",
    answer: "Spring, summer, and autumn offer lush scenic views, while winter brings a more moody alpine atmosphere.",
  },
] as const;

export const galleryImages = [
  { src: exteriorDay, alt: "A row of wooden Moksha Cottages with mountains behind", category: "Nature" },
  { src: roomWindow, alt: "Luxury wooden room with large windows and premium bedding", category: "Rooms" },
  { src: roomWarm, alt: "Warm wood-lined cottage bedroom with ambient lighting", category: "Rooms" },
  { src: cottagesNight, alt: "Moksha cottages illuminated at night with glowing rooflines", category: "Bonfire" },
  { src: foodSunset, alt: "Signature meal served with blurred cottage view at sunset", category: "Food" },
  { src: viewSign, alt: "Balcony view of Moksha sign and mountain valley", category: "Mountain" },
  { src: breakfastView, alt: "Breakfast plate held in front of forested mountain view", category: "Food" },
  { src: roomMaster, alt: "Premium master bedroom inside Moksha Cottage", category: "Rooms" },
  { src: bathroom, alt: "Modern bathroom inside Moksha Cottage", category: "Rooms" },
  { src: mountainClouds, alt: "Dramatic mountain and pine forest view near Moksha Cottages", category: "Nature" },
] as const;

export const instagramMoments = [galleryImages[0], galleryImages[4], galleryImages[5], galleryImages[9]];

export const siteMeta = {
  title: "Moksha Cottages — Luxury Mountain Retreat in Himachal",
  description:
    "Experience Moksha Cottages, a luxury mountain retreat in Chalal with premium wooden cottages, cinematic valley views, fine dining, and unforgettable nature stays.",
};

export const mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870125.3699994229!2d76.50466665498182!3d31.581043446118514!2m3!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045d8b64d55dc9%3A0xe8ee6373f865f032!2sMoksha%20cottages!5e0!3m2!1sen!2sin!4v1782817309503!5m2!1sen!2sin";
