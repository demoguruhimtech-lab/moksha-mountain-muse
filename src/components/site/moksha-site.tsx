import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Compass,
  Flame,
  Heart,
  Image as ImageIcon,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mountain,
  Phone,
  Sparkles,
  Star,
  Trees,
  Waves,
  Wifi,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  amenities,
  attractions,
  contactInfo,
  experiences,
  faqs,
  galleryImages,
  instagramMoments,
  locationOptions,
  mapEmbed,
  offers,
  rooms,
  siteMeta,
  stats,
  testimonials,
} from "@/lib/moksha-data";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms", to: "/rooms" },
  { label: "Gallery", to: "/gallery" },
  { label: "Experiences", to: "/experiences" },
  { label: "Restaurant", to: "/restaurant" },
  { label: "Offers", to: "/offers" },
  { label: "Contact", to: "/contact" },
] as const;

const heroSlides = [galleryImages[0], galleryImages[3], galleryImages[9], galleryImages[5]];
const galleryFilters = ["All", "Rooms", "Nature", "Food", "Bonfire", "Mountain"] as const;

const fadeUp = {
  initial: { opacity: 0, y: 40, filter: "blur(12px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
} as const;

const fadeLeft = {
  initial: { opacity: 0, x: -48, filter: "blur(12px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
} as const;

const fadeRight = {
  initial: { opacity: 0, x: 48, filter: "blur(12px)" },
  whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
} as const;

function formatRouteLabel(pathname: string) {
  if (pathname === "/") return "Luxury Mountain Retreat";
  return pathname
    .replace(/^\//, "")
    .split("/")
    .map((part) => part.replace(/-/g, " "))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" • ");
}

function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={contactInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-[var(--shadow-luxury)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-6 transition-transform duration-500 group-hover:scale-110" />
      </a>
      <a
        href={contactInfo.phoneHref}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-border/70 bg-card/85 text-foreground shadow-[var(--shadow-luxury)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
        aria-label="Call Moksha Cottages"
      >
        <Phone className="size-6 transition-transform duration-500 group-hover:scale-110" />
      </a>
    </div>
  );
}

function PageTransition({ children, routeKey }: { children: ReactNode; routeKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, scale: 0.985, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.995, filter: "blur(10px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-6",
          scrolled
            ? "border-border bg-panel/85 shadow-[var(--shadow-luxury)] backdrop-blur-2xl"
            : "border-border/60 bg-card/50 backdrop-blur-xl",
        )}
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border border-border bg-primary/10 text-primary shadow-[var(--shadow-glow)]">
            <Mountain className="size-5" />
          </div>
          <div>
            <p className="font-heading text-xl leading-none text-foreground">Moksha</p>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">Cottages</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "nav-link text-sm",
                pathname === item.to ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLocationsOpen((value) => !value)}
              className="nav-link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Locations <ChevronDown className={cn("size-4 transition-transform", locationsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {locationsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-10 right-0 min-w-72 rounded-3xl border border-border bg-panel/95 p-3 shadow-[var(--shadow-luxury)] backdrop-blur-2xl"
                >
                  {locationOptions.map((location) => (
                    <Link
                      key={location.route}
                      to={location.route}
                      className="block rounded-2xl px-4 py-3 transition-colors hover:bg-card"
                      onClick={() => setLocationsOpen(false)}
                    >
                      <p className="font-heading text-lg text-foreground">{location.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{location.blurb}</p>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {formatRouteLabel(pathname)}
          </span>
          <Button asChild variant="hero" size="lg">
            <Link to="/book-now">Book Now</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-border bg-panel/95 p-5 shadow-[var(--shadow-luxury)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {[...navLinks, ...locationOptions.map((item) => ({ label: item.name, to: item.route }))].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-base text-foreground transition-colors hover:bg-card"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Button asChild variant="hero" size="xl" className="mt-5 w-full">
              <Link to="/book-now" onClick={() => setOpen(false)}>
                Book Your Stay
              </Link>
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[var(--gradient-divider)] opacity-70" />
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="eyebrow">Moksha Cottages</p>
          <h2 className="mt-4 max-w-sm font-heading text-4xl text-foreground md:text-5xl">
            A luxury mountain retreat shaped by cedar, mist, and stillness.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Premium cottages, cinematic views, and warm hospitality in the heart of the Parvati Valley.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="social-chip" aria-label="WhatsApp">
              <MessageCircle className="size-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-chip" aria-label="Instagram">
              <Instagram className="size-4" />
            </a>
            <a href={`mailto:${contactInfo.email}`} className="social-chip" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <div className="mt-5 space-y-3">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-title">Locations</p>
          <div className="mt-5 space-y-3">
            {locationOptions.map((location) => (
              <Link key={location.route} to={location.route} className="footer-link">
                {location.name}
              </Link>
            ))}
            <Link to="/nearby-attractions" className="footer-link">
              Nearby Attractions
            </Link>
          </div>
        </div>

        <div>
          <p className="footer-title">Instagram Moments</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {instagramMoments.map((image) => (
              <div key={image.src} className="group relative overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-shell mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 Moksha Cottages. Crafted for elevated mountain stays.</p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
          <span>{contactInfo.address}</span>
        </div>
      </div>
    </footer>
  );
}

export function MokshaLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <PageTransition routeKey={pathname}>
        <main>{children}</main>
      </PageTransition>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function LuxuryHero({ title, subtitle, image, primaryCta, secondaryCta }: { title: string; subtitle: string; image: string; primaryCta: { label: string; to: string }; secondaryCta?: { label: string; to: string } }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const activeSlide = heroSlides[active % heroSlides.length];

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 4800);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-32">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeSlide.src}
            src={activeSlide.src}
            alt={activeSlide.alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.03, filter: "blur(12px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="hero-fog hero-fog-one" />
        <div className="hero-fog hero-fog-two" />
        <div className="hero-grid" />
      </div>

      <div className="section-shell relative z-10 grid w-full gap-10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-20">
        <motion.div {...fadeUp} className="max-w-4xl">
          <p className="eyebrow text-primary">Luxury mountain retreat</p>
          <h1 className="mt-5 max-w-4xl font-heading text-6xl leading-[0.95] text-balance text-foreground sm:text-7xl lg:text-[clamp(4.5rem,7vw,6.2rem)]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/90 sm:text-xl">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to={primaryCta.to}>
                {primaryCta.label} <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryCta ? (
              <Button asChild variant="glass" size="xl">
                <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm text-secondary-foreground/80">
            <span className="scroll-pill">Scroll to explore</span>
            <div className="h-px w-20 bg-gradient-to-r from-primary to-transparent" />
          </div>
        </motion.div>

        <motion.div {...fadeRight} className="justify-self-end lg:max-w-md">
          <BookingWidget />
        </motion.div>
      </div>
    </section>
  );
}

function BookingWidget() {
  return (
    <div className="glass-card card-luxury p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-primary">Reserve your escape</p>
          <h2 className="mt-3 font-heading text-3xl text-foreground">Plan a premium stay</h2>
        </div>
        <div className="rounded-full border border-primary/30 bg-primary/10 p-3 text-primary">
          <CalendarDays className="size-5" />
        </div>
      </div>
      <div className="mt-6 grid gap-3">
        {[
          { label: "Check In", value: "Select date" },
          { label: "Check Out", value: "Select date" },
          { label: "Guests", value: "2 Adults" },
          { label: "Rooms", value: "1 Suite" },
        ].map((field) => (
          <div key={field.label} className="luxury-field">
            <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{field.label}</span>
            <span className="text-sm text-foreground">{field.value}</span>
          </div>
        ))}
      </div>
      <Button asChild variant="hero" size="xl" className="mt-6 w-full">
        <Link to="/book-now">Check Availability</Link>
      </Button>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="section-shell section-gap grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <motion.div {...fadeLeft} className="space-y-6">
        <p className="eyebrow">About Moksha Cottages</p>
        <h2 className="section-title max-w-xl">Crafted like a boutique retreat, rooted in the stillness of the mountains.</h2>
        <p className="section-copy">
          Moksha Cottages blends warm timber architecture, panoramic valley views, and intimate hospitality into an experience that feels secluded, cinematic, and quietly luxurious.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((item, index) => (
            <StatCard key={item.label} value={item.value} label={item.label} delay={index * 0.1} />
          ))}
        </div>
      </motion.div>
      <motion.div {...fadeRight} className="grid gap-4 sm:grid-cols-2">
        <ImageCard image={galleryImages[7].src} alt={galleryImages[7].alt} tall />
        <div className="grid gap-4">
          <ImageCard image={galleryImages[0].src} alt={galleryImages[0].alt} />
          <ImageCard image={galleryImages[4].src} alt={galleryImages[4].alt} />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-[1.75rem] p-5"
    >
      <div className="font-heading text-5xl text-foreground">{value}</div>
      <div className="mt-2 text-sm uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
    </motion.div>
  );
}

function ImageCard({ image, alt, tall = false }: { image: string; alt: string; tall?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={cn("group relative overflow-hidden rounded-[2rem] border border-border bg-card", tall ? "min-h-[26rem]" : "min-h-[12.5rem]")}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-[var(--gradient-image)] opacity-70" />
    </motion.div>
  );
}

function RoomShowcase() {
  const featuredRooms = rooms.slice(0, 3);
  return (
    <section className="section-gap overflow-hidden">
      <div className="section-shell">
        <motion.div {...fadeUp} className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Luxury room showcase</p>
            <h2 className="section-title max-w-2xl">Distinctive cottage stays with cinematic textures and premium comfort.</h2>
          </div>
          <Button asChild variant="glass" size="lg">
            <Link to="/rooms">Explore All Rooms</Link>
          </Button>
        </motion.div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr_0.9fr]">
          {featuredRooms.map((room, index) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className={cn("room-card", index === 0 && "xl:row-span-2")}
            >
              <div className={cn("overflow-hidden rounded-[1.6rem]", index === 0 ? "aspect-[4/5]" : "aspect-[4/3]") }>
                <img
                  src={room.images[0]}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-heading text-3xl text-foreground">{room.name}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{room.summary}</p>
                </div>
                <span className="price-badge">{room.price}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {room.features.map((feature) => (
                  <span key={feature} className="chip">{feature}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesStrip() {
  const amenityIcons = [Mountain, Waves, Flame, Wifi, Sparkles, Car, BedDouble, Trees];
  return (
    <section className="section-shell section-gap">
      <motion.div {...fadeUp} className="glass-panel overflow-hidden rounded-[2rem] border border-border py-5">
        <div className="marquee-track">
          {[...amenities, ...amenities].map((item, index) => {
            const Icon = amenityIcons[index % amenityIcons.length] ?? Sparkles;
            return (
              <div key={`${item}-${index}`} className="marquee-item">
                <Icon className="size-4 text-primary" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section className="section-shell section-gap grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
      <motion.div {...fadeLeft}>
        <p className="eyebrow">Signature experiences</p>
        <h2 className="section-title max-w-lg">Adventures and rituals that turn a stay into a memory.</h2>
        <p className="section-copy max-w-md">
          From riverside mornings to bonfire nights, Moksha is designed for guests who want both wild scenery and refined comfort.
        </p>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
            className="glass-card group overflow-hidden rounded-[1.75rem]"
          >
            <div className="overflow-hidden rounded-[1.35rem]">
              <img
                src={experience.image}
                alt={experience.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-1 pt-5">
              <h3 className="font-heading text-2xl text-foreground">{experience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function AttractionsGrid() {
  return (
    <section className="section-gap bg-secondary/20 py-24">
      <div className="section-shell">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="eyebrow">Nearby attractions</p>
          <h2 className="section-title">Stay close to the iconic places that define Kasol and Chalal.</h2>
        </motion.div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {attractions.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="attraction-card"
            >
              <div className="flex items-center justify-between">
                <Compass className="size-5 text-primary" />
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-6 font-heading text-3xl text-foreground">{item.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MasonryGallery() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((image) => image.category === filter)),
    [filter],
  );
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-shell section-gap">
      <motion.div {...fadeUp} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2 className="section-title max-w-2xl">A textured visual story of cedar rooms, glowing nights, and mountain air.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn("filter-pill", filter === item && "filter-pill-active")}
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
        {filtered.map((image, index) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.04 }}
            type="button"
            onClick={() => setSelected(image.src)}
            className="group gallery-tile"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full rounded-[1.8rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="gallery-overlay">
              <span className="chip">{image.category}</span>
              <span className="rounded-full border border-border bg-panel/70 p-2 text-foreground backdrop-blur-xl">
                <ImageIcon className="size-4" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.button
            type="button"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            aria-label="Close lightbox"
          >
            <motion.img
              src={selected}
              alt="Expanded Moksha Cottages gallery image"
              className="max-h-[86vh] max-w-[min(92vw,1200px)] rounded-[2rem] border border-white/10 object-contain shadow-[var(--shadow-luxury)]"
              initial={{ scale: 0.95, opacity: 0, filter: "blur(14px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.97, opacity: 0 }}
            />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-gap bg-secondary/15 py-24">
      <div className="section-shell">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="eyebrow">Guest impressions</p>
          <h2 className="section-title">Designed to feel deeply premium from first glance to final checkout.</h2>
        </motion.div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="glass-card rounded-[1.8rem] p-7"
            >
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground">“{item.quote}”</p>
              <div className="mt-7 border-t border-border pt-5">
                <p className="font-heading text-2xl text-foreground">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-muted-foreground">{item.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCards() {
  return (
    <section className="section-shell section-gap">
      <motion.div {...fadeUp} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Offers & packages</p>
          <h2 className="section-title max-w-2xl">Curated packages for couples, longer stays, and slow mountain escapes.</h2>
        </div>
        <Heart className="size-9 text-primary" />
      </motion.div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="offer-card"
          >
            <span className="chip">Signature Offer</span>
            <h3 className="mt-5 font-heading text-3xl text-foreground">{offer.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{offer.details}</p>
            <Button asChild variant="glass" size="lg" className="mt-8 w-full">
              <Link to="/book-now">Enquire Now</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-shell section-gap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <motion.div {...fadeLeft}>
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title max-w-lg">Everything guests usually ask before they reserve a mountain retreat.</h2>
      </motion.div>
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = open === index;
          return (
            <motion.button
              key={item.question}
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="faq-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-left font-heading text-2xl text-foreground">{item.question}</span>
                <ChevronDown className={cn("size-5 text-primary transition-transform duration-300", isOpen && "rotate-180")} />
              </div>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden pt-4 text-left text-sm leading-relaxed text-muted-foreground"
                  >
                    {item.answer}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <LuxuryHero
        title="A Cinematic Escape Above the Pines"
        subtitle="Discover Moksha Cottages — a premium mountain hideaway in Chalal designed for luxury stays, warm cedar interiors, and immersive Himalayan views."
        image={galleryImages[0].src}
        primaryCta={{ label: "Book Now", to: "/book-now" }}
        secondaryCta={{ label: "Explore Rooms", to: "/rooms" }}
      />
      <IntroSection />
      <RoomShowcase />
      <AmenitiesStrip />
      <ExperienceGrid />
      <AttractionsGrid />
      <MasonryGallery />
      <TestimonialsSection />
      <OfferCards />
      <FaqSection />
    </>
  );
}

function SubpageHero({ eyebrow, title, copy, image, compact = false }: { eyebrow: string; title: string; copy: string; image: string; compact?: boolean }) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, compact ? 40 : 120]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden pt-32", compact ? "min-h-[70vh]" : "min-h-[82vh]") }>
      <motion.img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" style={{ y }} />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="section-shell relative z-10 flex min-h-[inherit] items-end pb-16 md:pb-24">
        <motion.div {...fadeUp} className="max-w-4xl">
          <p className="eyebrow text-primary">{eyebrow}</p>
          <h1 className="mt-5 font-heading text-6xl leading-[0.95] text-foreground sm:text-7xl lg:text-[5.7rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/90 md:text-xl">{copy}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const timeline = [
    "Moksha began with a simple idea: build a mountain stay that feels handcrafted, warm, and quietly elevated.",
    "Every space evolved around timber textures, panoramic openings, and intimate guest rituals.",
    "Today, Moksha is shaped as a boutique retreat where nature feels immersive and comfort feels deliberate.",
  ];
  return (
    <>
      <SubpageHero
        eyebrow="Our story"
        title="Where Mountain Stillness Meets Boutique Luxury"
        copy="Moksha Cottages was imagined as a refined retreat for guests who seek beauty in details — soft light on wood, drifting clouds above the valley, and calm that lingers long after the stay ends."
        image={galleryImages[5].src}
      />
      <section className="section-shell section-gap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <motion.div {...fadeLeft} className="space-y-6">
          <p className="eyebrow">Storytelling</p>
          <h2 className="section-title">A premium mountain retreat inspired by slow travel, craft, and atmosphere.</h2>
          <p className="section-copy">
            Our mission is to create stays that feel immersive yet polished — spaces where guests wake to pine views, dine under changing skies, and experience the Parvati Valley in a more elevated way.
          </p>
        </motion.div>
        <motion.div {...fadeRight} className="space-y-5">
          {timeline.map((item, index) => (
            <div key={item} className="timeline-item">
              <span className="timeline-index">0{index + 1}</span>
              <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="section-shell section-gap grid gap-5 md:grid-cols-3">
        <ImageCard image={galleryImages[0].src} alt={galleryImages[0].alt} tall />
        <ImageCard image={galleryImages[1].src} alt={galleryImages[1].alt} />
        <ImageCard image={galleryImages[9].src} alt={galleryImages[9].alt} tall />
      </section>
    </>
  );
}

export function RoomsPage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const room = rooms[activeRoom];
  const images = room.images;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => setActiveImage(0), [activeRoom]);

  return (
    <>
      <SubpageHero
        eyebrow="Suites & cottages"
        title="Stay Inside Warm Cedar, Glass, and Mountain Light"
        copy="Choose from intimate rooms to larger cottages — each one styled for scenic privacy, polished comfort, and immersive views."
        image={room.images[0]}
      />
      <section className="section-shell section-gap grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <motion.div {...fadeLeft} className="space-y-4">
          {rooms.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActiveRoom(index)}
              className={cn("room-selector", activeRoom === index && "room-selector-active")}
            >
              <div>
                <p className="font-heading text-3xl text-foreground">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
              </div>
              <span className="price-badge">{item.price}</span>
            </button>
          ))}
        </motion.div>
        <motion.div {...fadeRight} className="space-y-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
            <img src={images[activeImage]} alt={room.name} className="aspect-[16/10] w-full object-cover" />
            <div className="absolute right-5 bottom-5 flex gap-3">
              <button type="button" className="icon-glass" onClick={() => setActiveImage((value) => (value - 1 + images.length) % images.length)} aria-label="Previous room image">
                <ChevronLeft className="size-5" />
              </button>
              <button type="button" className="icon-glass" onClick={() => setActiveImage((value) => (value + 1) % images.length)} aria-label="Next room image">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <button key={image} type="button" onClick={() => setActiveImage(index)} className={cn("thumb-card", activeImage === index && "thumb-card-active")}>
                <img src={image} alt={`${room.name} view ${index + 1}`} className="aspect-[4/3] w-full rounded-[1.2rem] object-cover" />
              </button>
            ))}
          </div>
          <div className="glass-card rounded-[2rem] p-6">
            <div className="flex flex-wrap gap-2">
              {room.features.map((feature) => (
                <span key={feature} className="chip">{feature}</span>
              ))}
            </div>
            <Button asChild variant="hero" size="xl" className="mt-6 w-full">
              <Link to="/book-now">Book {room.name}</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export function KasolPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Kasol property"
        title="A Valley Stay Framed by Pines, Cafés, and the Parvati River"
        copy="Our Kasol-side experience places you close to Chalal Trek, local culture, and some of the most recognizable mountain views in the region."
        image={galleryImages[5].src}
      />
      <section className="section-shell section-gap grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeLeft} className="glass-card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow">Why guests love it</p>
          <h2 className="mt-4 font-heading text-4xl text-foreground">Kasol with a premium, slower rhythm.</h2>
          <div className="mt-6 grid gap-4">
            {attractions.map((item) => (
              <div key={item.name} className="luxury-list-item">
                <MapPin className="size-4 text-primary" />
                <div>
                  <p className="text-base text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="hero" size="xl" className="mt-8">
            <Link to="/book-now">Reserve Kasol Stay</Link>
          </Button>
        </motion.div>
        <motion.div {...fadeRight} className="overflow-hidden rounded-[2rem] border border-border">
          <iframe
            src={mapEmbed}
            title="Map to Moksha Cottages"
            loading="lazy"
            className="h-[32rem] w-full grayscale-[0.25]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </>
  );
}

export function JibhiPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Jibhi property"
        title="Riverside Mood, Waterfall Energy, and Private Timber Stays"
        copy="The Jibhi experience is imagined as a more secluded mountain retreat with river-adjacent calm, wooden rooms, and a deeply immersive nature rhythm."
        image={galleryImages[9].src}
      />
      <section className="section-shell section-gap grid gap-5 md:grid-cols-3">
        {[galleryImages[9], galleryImages[0], galleryImages[7]].map((image, index) => (
          <motion.div key={image.src} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.12 }}>
            <ImageCard image={image.src} alt={image.alt} tall={index !== 1} />
          </motion.div>
        ))}
      </section>
      <section className="section-shell section-gap grid gap-5 md:grid-cols-3">
        {[
          "Luxury river hero experience",
          "Waterfall and nature sections",
          "Private entrance and timber privacy",
        ].map((item) => (
          <div key={item} className="glass-card rounded-[1.8rem] p-6">
            <p className="font-heading text-3xl text-foreground">{item}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export function GalleryPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Photo journal"
        title="A Gallery of Warm Interiors and Himalayan Atmosphere"
        copy="Browse the visual character of Moksha Cottages across rooms, food, mountain views, and after-dark ambience."
        image={galleryImages[3].src}
        compact
      />
      <MasonryGallery />
    </>
  );
}

export function ExperiencesPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Experiences"
        title="Bonfires, Trails, Photography, and Slow Mountain Rituals"
        copy="Every stay can unfold through curated moments — from nature walks and riverside pauses to adventure and intimate evenings under the stars."
        image={galleryImages[3].src}
      />
      <ExperienceGrid />
    </>
  );
}

export function RestaurantPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Restaurant"
        title="Comfort Food, Warm Plates, and Views That Stretch Into Sunset"
        copy="The Moksha dining experience pairs cozy mountain meals with sweeping cottage and valley views, perfect for slow breakfasts and golden-hour dinners."
        image={galleryImages[4].src}
      />
      <section className="section-shell section-gap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <motion.div {...fadeLeft} className="space-y-6">
          <p className="eyebrow">Signature dining</p>
          <h2 className="section-title">A relaxed café rhythm with intimate service and scenic tables.</h2>
          <p className="section-copy">
            Expect comfort-driven dishes, warm drinks, and a dining atmosphere that feels woven into the mountain setting rather than separated from it.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Breakfast with valley views",
              "Comfort meals after treks",
              "Private dining mood on request",
              "Golden-hour seating",
            ].map((item) => (
              <div key={item} className="luxury-list-item">
                <Sparkles className="size-4 text-primary" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeRight}>
          <ImageCard image={galleryImages[4].src} alt={galleryImages[4].alt} tall />
        </motion.div>
      </section>
    </>
  );
}

export function NearbyAttractionsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Nearby attractions"
        title="Iconic Stops Around Chalal, Kasol, and the Parvati Valley"
        copy="Your retreat is surrounded by memorable sights, treks, riverside spaces, and culture-rich mountain experiences."
        image={galleryImages[9].src}
        compact
      />
      <AttractionsGrid />
    </>
  );
}

export function OffersPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Luxury offers"
        title="Curated Packages for Longer, Slower, More Beautiful Stays"
        copy="Enjoy thoughtfully assembled offers for couples, families, and weekday mountain escapes with a premium hospitality lens."
        image={galleryImages[4].src}
        compact
      />
      <OfferCards />
    </>
  );
}

export function TestimonialsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Testimonials"
        title="What Guests Remember Most About Moksha"
        copy="Read how visitors describe the design, atmosphere, views, and quiet premium feeling of their stay."
        image={galleryImages[3].src}
        compact
      />
      <TestimonialsSection />
    </>
  );
}

export function FaqPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Frequently asked questions"
        title="Everything You Need Before You Book"
        copy="Direct answers to the most common stay, travel, and booking questions."
        image={galleryImages[0].src}
        compact
      />
      <FaqSection />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Contact"
        title="Plan Your Escape to Moksha Cottages"
        copy="Reach out for reservations, availability, directions, or tailored stay requests. We’re happy to help you plan the perfect mountain retreat."
        image={galleryImages[5].src}
      />
      <section className="section-shell section-gap grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...fadeLeft} className="glass-card rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow">Reach us directly</p>
          <div className="mt-6 space-y-4">
            <a href={contactInfo.phoneHref} className="contact-row">
              <Phone className="size-5 text-primary" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Phone</p>
                <p className="text-lg text-foreground">{contactInfo.phone}</p>
              </div>
            </a>
            <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="contact-row">
              <MessageCircle className="size-5 text-primary" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">WhatsApp</p>
                <p className="text-lg text-foreground">Start a direct booking chat</p>
              </div>
            </a>
            <div className="contact-row">
              <MapPin className="size-5 text-primary" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Address</p>
                <p className="text-lg text-foreground">{contactInfo.address}</p>
              </div>
            </div>
          </div>

          <form className="mt-8 grid gap-4">
            <input className="luxury-input" placeholder="Your name" aria-label="Your name" />
            <input className="luxury-input" placeholder="Email address" aria-label="Email address" />
            <textarea className="luxury-input min-h-36 resize-none" placeholder="Tell us about your stay" aria-label="Tell us about your stay" />
            <Button type="button" variant="hero" size="xl">Send Enquiry</Button>
          </form>
        </motion.div>

        <motion.div {...fadeRight} className="glass-card rounded-[2rem] p-3 md:p-4">
          <iframe
            src={mapEmbed}
            title="Moksha Cottages map"
            loading="lazy"
            className="h-[42rem] w-full rounded-[1.4rem] border border-border/50"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>
    </>
  );
}

export function BookNowPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Book now"
        title="Reserve a Luxury Mountain Stay"
        copy="Begin your Moksha escape with a polished booking experience designed around comfort, clarity, and direct connection."
        image={galleryImages[7].src}
      />
      <section className="section-shell section-gap grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
        <motion.form {...fadeLeft} className="glass-card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Check In",
              "Check Out",
              "Adults",
              "Children",
              "Rooms",
              "Guest Name",
            ].map((item) => (
              <input key={item} className="luxury-input" placeholder={item} aria-label={item} />
            ))}
          </div>
          <textarea className="luxury-input mt-4 min-h-40 resize-none" placeholder="Special request" aria-label="Special request" />
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button type="button" variant="hero" size="xl" className="flex-1">Request Booking</Button>
            <Button asChild variant="glass" size="xl" className="flex-1">
              <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer">WhatsApp Booking</a>
            </Button>
          </div>
        </motion.form>
        <motion.div {...fadeRight} className="space-y-5">
          <div className="glass-card rounded-[2rem] p-6">
            <p className="eyebrow">Need a direct response?</p>
            <h2 className="mt-3 font-heading text-4xl text-foreground">Call or message us instantly.</h2>
            <div className="mt-6 grid gap-4">
              <a href={contactInfo.phoneHref} className="contact-row">
                <Phone className="size-5 text-primary" />
                <span className="text-lg text-foreground">Call Now</span>
              </a>
              <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="contact-row">
                <MessageCircle className="size-5 text-primary" />
                <span className="text-lg text-foreground">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
          <ImageCard image={galleryImages[0].src} alt={galleryImages[0].alt} tall />
        </motion.div>
      </section>
    </>
  );
}

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: "Moksha Cottages",
          description: siteMeta.description,
          telephone: contactInfo.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Chalal",
            addressRegion: "Himachal Pradesh",
            postalCode: "175105",
            addressCountry: "IN",
          },
        }),
      }}
    />
  );
}
