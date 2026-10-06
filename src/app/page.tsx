"use client";

import * as React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Menu,
  ChevronRight,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Microscope,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Navigation,
  ParkingCircle,
  FileText,
  ClipboardList,
  Scissors,
  Award,
  GraduationCap,
  Building2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  SPECIALTIES,
  PROFILE_TABS,
  FACILITY_FEATURES,
  TRUST_BADGES,
  type Specialty,
} from "@/lib/site-data";

/* --------------------------------- utils ---------------------------------- */

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Specialties", id: "specialties" },
  { label: "YourBreast", id: "yourbreast" },
  { label: "Facility", id: "facility" },
  { label: "Contact", id: "location" },
];

/* ------------------------------- StickyHeader ----------------------------- */

function StickyHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-line shadow-[0_1px_0_rgba(15,42,77,0.04)]"
          : "bg-white border-b border-line/60"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 text-left"
            aria-label="Dr. Aimee Jenkin — home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medic-blue text-white">
              <span className="text-base font-semibold leading-none">AJ</span>
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-semibold text-navy tracking-tight-display">
                Dr. Aimee Jenkin
              </div>
              <div className="text-[11px] text-slate-muted">
                Plastic &amp; Reconstructive Surgeon
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-text transition-colors hover:bg-surface hover:text-medic-blue"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA + mobile trigger */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollToId("book")}
              size="sm"
              className="hidden rounded-md bg-medic-blue px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-medic-blue-dark md:inline-flex"
            >
              Book appointment
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-md text-navy hover:bg-surface md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] max-w-sm border-line bg-white p-0"
              >
                <SheetHeader className="border-b border-line px-6 pb-5 pt-6">
                  <SheetTitle className="text-left">
                    <div className="text-lg font-semibold text-navy">
                      Dr. Aimee Jenkin
                    </div>
                    <div className="mt-0.5 text-xs text-slate-muted">
                      Plastic &amp; Reconstructive Surgeon
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col px-3 py-3" aria-label="Mobile">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <button
                        onClick={() => scrollToId(item.id)}
                        className="flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium text-slate-text transition-colors hover:bg-surface hover:text-medic-blue"
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 text-slate-soft" />
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto border-t border-line px-6 py-5">
                  <div className="space-y-2 text-xs text-slate-muted">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-medic-blue" />
                      FC Plast Surg (SA) · HPCSA
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-medic-blue" />
                      Alchimia Clinic · 39 Kloof Street, Gardens
                    </div>
                  </div>
                  <SheetClose asChild>
                    <Button
                      onClick={() => scrollToId("book")}
                      className="mt-4 w-full rounded-md bg-medic-blue py-4 text-sm font-medium text-white hover:bg-medic-blue-dark"
                    >
                      Book appointment
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function HeroSection() {
  return (
    <section id="home" className="bg-white pt-24 pb-12 sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left */}
          <div>
            {/* Portrait — mobile & tablet (desktop shows the side panel) */}
            <img
              src="/images/dr-aimee-jenkin.jpg"
              alt="Dr. Aimee Jenkin — Plastic & Reconstructive Surgeon"
              className="mb-8 h-48 w-48 rounded-2xl border border-line object-cover object-top shadow-card lg:hidden"
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-slate-text">
              <span className="h-1.5 w-1.5 rounded-full bg-medic-blue" />
              Accepting new patients · Cape Town
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight-display text-navy sm:text-5xl lg:text-[3.25rem] text-balance">
              Specialist plastic &amp; reconstructive surgery, delivered with precision and care.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-muted sm:text-lg text-pretty">
              Dr. Aimee Jenkin practices at Alchimia Clinic on Kloof Street,
              Gardens, and consults at the Cape Town Medi-Spa — combining
              microsurgical expertise with a measured, personal approach to
              cosmetic, reconstructive and accessible breast surgery.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                onClick={() => scrollToId("book")}
                size="lg"
                className="rounded-md bg-medic-blue px-6 py-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-medic-blue-dark"
              >
                Book a consultation
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToId("specialties")}
                size="lg"
                variant="outline"
                className="rounded-md border-line bg-white px-6 py-5 text-sm font-medium text-navy hover:bg-surface"
              >
                View specialties
              </Button>
            </div>

            {/* Trust row */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-slate-text"
                >
                  <badge.icon className="h-4 w-4 text-medic-blue" />
                  <span className="font-medium">{badge.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — portrait panel with practice card overlay */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface">
              {/* Real portrait — Dr. Aimee Jenkin (alchimiaclinic.co.za) */}
              <div className="relative aspect-[4/5] w-full">
                <img
                  src="/images/dr-aimee-jenkin.jpg"
                  alt="Dr. Aimee Jenkin — Plastic & Reconstructive Surgeon"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/60"
                />
                <div className="relative flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <Badge className="rounded-full bg-white/80 text-medic-blue backdrop-blur hover:bg-white">
                      <ShieldCheck className="mr-1 h-3 w-3" />
                      HPCSA Registered
                    </Badge>
                    <span className="text-xs font-medium text-slate-muted">
                      Est. practice 2012
                    </span>
                  </div>

                  <div className="mt-auto">
                    <div className="rounded-xl border border-line bg-white p-5 shadow-card">
                      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-medic-blue">
                        <Stethoscope className="h-3.5 w-3.5" />
                        Practice
                      </div>
                      <div className="mt-2 text-lg font-semibold text-navy">
                        Alchimia Clinic
                      </div>
                      <div className="mt-1 text-sm text-slate-muted">
                        39 Kloof Street, Gardens, Cape Town
                      </div>
                      <div className="mt-1.5 text-xs font-medium text-medic-blue">
                        Consulting also at Cape Town Medi-Spa, 99 Kloof St
                      </div>
                      <Separator className="my-4 bg-line" />
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-xs text-slate-muted">Theatres</div>
                          <div className="font-semibold text-navy">2 modern OTs</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-muted">Backup power</div>
                          <div className="font-semibold text-navy">100 kVA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SectionLabel ------------------------------ */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-medic-blue">
      {children}
    </div>
  );
}

/* ------------------------------ ProfileTabs ------------------------------- */

function ProfileTabs() {
  const [active, setActive] = React.useState(PROFILE_TABS[0].id);
  const current = PROFILE_TABS.find((t) => t.id === active) ?? PROFILE_TABS[0];

  return (
    <section id="about" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight-display text-navy sm:text-4xl text-balance">
            Meet Dr. Jenkin
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-muted text-pretty">
            Trained in the public academic tradition and now practicing at
            Alchimia Clinic in Gardens with consulting rooms at the Cape Town
            Medi-Spa, Dr. Jenkin brings microsurgical precision to every
            procedure — from cosmetic refinement to complex reconstructive
            surgery.
          </p>
        </div>

        <Tabs
          value={active}
          onValueChange={setActive}
          className="mt-10"
        >
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 rounded-lg border border-line bg-white p-1">
            {PROFILE_TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex h-auto items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-slate-muted data-[state=active]:bg-medic-blue data-[state=active]:text-white"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
            <div className="min-h-[380px]">
              {PROFILE_TABS.map((tab) => (
                <TabsContent
                  key={tab.id}
                  value={tab.id}
                  className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:duration-300"
                >
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight-display text-navy text-balance">
                    {tab.headline}
                  </h3>
                  <div className="mt-5 space-y-4">
                    {tab.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-slate-text text-pretty"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-6 sm:grid-cols-4">
                    {tab.highlights.map((hl) => (
                      <div key={hl.label} className="rounded-lg border border-line bg-white p-3.5">
                        <hl.icon className="h-4 w-4 text-medic-blue" />
                        <div className="mt-2 text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                          {hl.label}
                        </div>
                        <div className="mt-0.5 text-sm font-semibold leading-tight text-navy">
                          {hl.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>

            {/* Credentials sidebar */}
            <aside className="rounded-xl border border-line bg-white p-5 lg:sticky lg:top-24 lg:self-start">
              <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
                Credentials
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                  <div>
                    <div className="font-medium text-navy">MBBCh</div>
                    <div className="text-xs text-slate-muted">University of the Witwatersrand · 2001</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                  <div>
                    <div className="font-medium text-navy">FC Plast Surg (SA)</div>
                    <div className="text-xs text-slate-muted">Specialist qualification · 2012</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                  <div>
                    <div className="font-medium text-navy">HPCSA Registered</div>
                    <div className="text-xs text-slate-muted">Specialist Plastic &amp; Reconstructive Surgeon</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                  <div>
                    <div className="font-medium text-navy">Hospital appointments</div>
                    <div className="text-xs text-slate-muted">Charlotte Maxeke (JHB) · Netcare Kuils River (CPT)</div>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

/* ----------------------------- SpecialtyGrid ------------------------------ */

const CATEGORY_META: Record<
  Specialty["category"],
  { label: string; icon: LucideIcon }
> = {
  "Cosmetic & Aesthetic": {
    label: "Cosmetic & Aesthetic",
    icon: Stethoscope,
  },
  "YourBreast Affiliation": {
    label: "YourBreast",
    icon: HeartPulse,
  },
  "Reconstructive Microsurgery": {
    label: "Reconstructive",
    icon: Microscope,
  },
};

function SpecialtyCard({
  specialty,
  onOpen,
}: {
  specialty: Specialty;
  onOpen: (s: Specialty) => void;
}) {
  return (
    <button
      onClick={() => onOpen(specialty)}
      className="group flex h-full flex-col rounded-xl border border-line bg-white p-5 text-left shadow-card transition-all hover:-translate-y-0.5 hover:border-medic-blue/30 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-medic-blue"
      aria-label={`View details for ${specialty.title}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medic-blue-light text-medic-blue transition-colors group-hover:bg-medic-blue group-hover:text-white">
          <specialty.icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-soft transition-colors group-hover:text-medic-blue" />
      </div>

      <div className="mt-4 text-[11px] font-medium uppercase tracking-wide text-slate-muted">
        {CATEGORY_META[specialty.category].label}
      </div>
      <h3 className="mt-1 text-lg font-semibold leading-tight text-navy">
        {specialty.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-muted text-pretty">
        {specialty.short}
      </p>

      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-medic-blue">
        View details
        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}

function SpecialtyModal({
  specialty,
  onClose,
}: {
  specialty: Specialty | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!specialty} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto rounded-xl border-line bg-white p-0 sm:max-w-2xl">
        {specialty && (
          <>
            <div className="border-b border-line px-6 pt-8 pb-6 sm:px-8">
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="rounded-full border-medic-blue/20 bg-medic-blue-light px-3 py-1 text-[11px] font-medium text-medic-blue"
                >
                  {CATEGORY_META[specialty.category].label}
                </Badge>
                <DialogDescription className="sr-only">
                  Detailed overview for {specialty.title}
                </DialogDescription>
              </div>
              <DialogHeader className="mt-4 space-y-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-medic-blue text-white">
                    <specialty.icon className="h-5 w-5" />
                  </div>
                  <DialogTitle className="text-2xl font-semibold leading-tight text-navy">
                    {specialty.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-text text-pretty">
                {specialty.overview}
              </p>
            </div>

            <div className="space-y-8 px-6 py-8 sm:px-8">
              {/* Procedures */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-medic-blue">
                  <Scissors className="h-3.5 w-3.5" />
                  Procedures
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {specialty.procedures.map((p) => (
                    <li
                      key={p.name}
                      className="rounded-lg border border-line bg-surface p-4"
                    >
                      <div className="text-sm font-semibold text-navy">{p.name}</div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-muted">
                        {p.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-medic-blue">
                  <Clock className="h-3.5 w-3.5" />
                  Recovery timeline
                </div>
                <div className="mt-4 space-y-2">
                  {specialty.recovery.map((r, i) => (
                    <div
                      key={r.phase}
                      className="flex flex-col gap-1 rounded-lg border border-line bg-white p-4 sm:flex-row sm:items-center sm:gap-4"
                    >
                      <div className="flex items-center gap-3 sm:w-44">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-medic-blue-light text-xs font-semibold text-medic-blue">
                          {i + 1}
                        </div>
                        <div className="text-sm font-semibold text-navy">{r.phase}</div>
                      </div>
                      <div className="sm:w-28">
                        <span className="inline-block rounded-full bg-medic-blue-light px-2.5 py-0.5 text-xs font-medium text-medic-blue">
                          {r.timeline}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed text-slate-muted sm:flex-1">
                        {r.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal candidate */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-medic-blue">
                  <UserCheck className="h-3.5 w-3.5" />
                  Ideal candidate
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {specialty.idealCandidate.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 rounded-lg border border-line bg-surface p-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                      <span className="text-xs leading-relaxed text-slate-text">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-start gap-4 rounded-xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-base font-semibold text-navy">
                    Considering this procedure?
                  </div>
                  <p className="mt-1 text-sm text-slate-muted">
                    Book a consultation at Alchimia Clinic (39 Kloof Street) or the Cape Town Medi-Spa to discuss your goals.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    onClose();
                    setTimeout(() => scrollToId("book"), 100);
                  }}
                  className="shrink-0 rounded-md bg-medic-blue px-5 text-sm font-medium text-white hover:bg-medic-blue-dark"
                >
                  Book consultation
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function SpecialtySection() {
  const [filter, setFilter] = React.useState<Specialty["category"] | "All">("All");
  const [selected, setSelected] = React.useState<Specialty | null>(null);

  const categories: (Specialty["category"] | "All")[] = [
    "All",
    "Cosmetic & Aesthetic",
    "YourBreast Affiliation",
    "Reconstructive Microsurgery",
  ];

  const filtered =
    filter === "All" ? SPECIALTIES : SPECIALTIES.filter((s) => s.category === filter);

  return (
    <section id="specialties" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionLabel>Specialties</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight-display text-navy sm:text-4xl text-balance">
              Surgical specialties
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-muted text-pretty">
              Cosmetic, reconstructive and accessible breast surgery — all
              performed to the same microsurgically-trained standard at
              Alchimia Clinic.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-md border px-3.5 py-2 text-xs font-medium transition-colors ${
                  filter === c
                    ? "border-medic-blue bg-medic-blue text-white"
                    : "border-line bg-white text-slate-text hover:border-medic-blue/30 hover:text-medic-blue"
                }`}
              >
                {c === "All" ? "All" : CATEGORY_META[c].label}
              </button>
            ))}
          </div>
        </div>

        <div id="yourbreast" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SpecialtyCard key={s.id} specialty={s} onOpen={(spec) => setSelected(spec)} />
          ))}
        </div>

        {/* YourBreast banner */}
        <div className="mt-10 rounded-xl border border-medic-blue/20 bg-medic-blue-light p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-medic-blue text-white">
                <HeartPulse className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
                  YourBreast collaboration
                </div>
                <h3 className="mt-1 text-xl font-semibold leading-tight text-navy">
                  Accessible breast surgery — without compromise.
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-text text-pretty">
                  A streamlined, transparently-priced pathway to surgeon-led
                  breast surgery at Alchimia's day-surgery theatres. The same
                  standard of care, the same meticulous technique.
                </p>
              </div>
            </div>
            <Button
              onClick={() => scrollToId("book")}
              variant="outline"
              className="shrink-0 rounded-md border-medic-blue bg-white px-5 text-sm font-medium text-medic-blue hover:bg-medic-blue-light"
            >
              Enquire via YourBreast
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <SpecialtyModal specialty={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ----------------------------- FacilitySection ---------------------------- */

function FacilitySection() {
  return (
    <section id="facility" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Facility &amp; Patient Journey</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight-display text-navy sm:text-4xl text-balance">
            Alchimia Clinic, 39 Kloof Street
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-muted text-pretty">
            A private day-surgery facility built around a single principle:
            that the surgical experience should feel as considered as the
            surgical result. Two state-of-the-art theatres, uninterrupted
            backup power, and a discrete patient journey — all under one roof.
          </p>
        </div>

        {/* Real facility photos */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/alchimia-sign.jpg",
              alt: "Alchimia Clinic reception sign — Cosmetic + Surgery",
              caption: "Alchimia Clinic · 39 Kloof Street, 2nd Floor",
            },
            {
              src: "/images/alchimia-ward.jpg",
              alt: "Alchimia Clinic four-bed day-hospital recovery ward with nurse",
              caption: "Four-bed day-hospital · recovery ward",
            },
            {
              src: "/images/medi-spa-interior.jpg",
              alt: "Cape Town Medi-Spa consulting and treatment room interior",
              caption: "Cape Town Medi-Spa · 99 Kloof Street",
            },
          ].map((img) => (
            <figure
              key={img.src}
              className="overflow-hidden rounded-xl border border-line bg-white shadow-card"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="border-t border-line px-4 py-3 text-xs font-medium text-slate-muted">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "4 beds", label: "Licensed day-hospital" },
            { value: "100 kVA", label: "Backup generator" },
            { value: "39", label: "Kloof Street, Gardens" },
            { value: "Day-case", label: "Discharge model" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-line bg-white p-5">
              <div className="text-2xl font-semibold text-medic-blue sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-muted">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Feature grid + journey */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {FACILITY_FEATURES.map((f) => (
              <article
                key={f.title}
                className="rounded-xl border border-line bg-white p-5 shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medic-blue-light text-medic-blue">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-muted text-pretty">
                  {f.description}
                </p>
              </article>
            ))}
          </div>

          {/* Patient journey */}
          <div className="rounded-xl border border-line bg-white p-6 sm:p-7">
            <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
              Patient journey
            </div>
            <h3 className="mt-2 text-xl font-semibold text-navy">
              What to expect
            </h3>
            <ol className="mt-6 space-y-5">
              {[
                {
                  step: "1",
                  title: "Initial consultation",
                  detail:
                    "An unhurried conversation — at Alchimia Clinic or at the Cape Town Medi-Spa consulting rooms, both on Kloof Street in Gardens. History, goals, examination, and an honest discussion of options, risks, and realistic outcomes.",
                },
                {
                  step: "2",
                  title: "Surgical planning & pre-op",
                  detail:
                    "Detailed surgical planning, pre-anaesthetic assessment, and clear pre-operative instructions. Transparent, inclusive pricing.",
                },
                {
                  step: "3",
                  title: "Day of surgery",
                  detail:
                    "Admit, operate, recover — all in the same discrete day-surgery footprint. Most patients discharge the same day.",
                },
                {
                  step: "4",
                  title: "Structured follow-up",
                  detail:
                    "Scheduled reviews with Dr. Jenkin personally. Long-term follow-up is part of the standard of care, not an optional add-on.",
                },
              ].map((s) => (
                <li key={s.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-medic-blue text-sm font-semibold text-white">
                    {s.step}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{s.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-slate-muted text-pretty">
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- BookingSection ----------------------------- */

const SERVICE_OPTIONS = [
  "Cosmetic consultation — Facial",
  "Cosmetic consultation — Body contouring",
  "Post-pregnancy restoration",
  "YourBreast — Augmentation",
  "YourBreast — Reduction",
  "YourBreast — Reconstruction",
  "Hand surgery / reconstructive",
  "Scar management & revision",
  "Complex reconstructive assessment",
  "Other / not sure yet",
];

const PRACTICAL_TABS = [
  {
    id: "parking",
    label: "Parking & Access",
    icon: ParkingCircle,
    items: [
      {
        title: "On-street parking on Kloof Street",
        body: "Metered parking is available directly on Kloof Street outside the Alchimia entrance. Allow 10 minutes before your appointment to find a bay during peak hours.",
      },
      {
        title: "Secure parking nearby",
        body: "The Gardens Centre parking garage is a 3-minute walk from the clinic and offers secure, covered parking for longer consultations.",
      },
      {
        title: "Step-free access",
        body: "Alchimia Clinic offers step-free access from street level. Please mention any mobility considerations when booking so we can prepare appropriately.",
      },
    ],
  },
  {
    id: "prep",
    label: "Consultation Prep",
    icon: ClipboardList,
    items: [
      {
        title: "Bring a full medication list",
        body: "Include prescription, over-the-counter, and supplement medications. Some (e.g. aspirin, certain herbals) influence surgical planning.",
      },
      {
        title: "Relevant imaging or records",
        body: "If you have prior mammograms, MRI, or relevant surgical records, please bring copies. Dr. Jenkin will review them during your consultation.",
      },
      {
        title: "Prepare your questions",
        body: "We encourage a written list of questions. Consultations are unhurried — there is time to discuss goals, risks, alternatives, and realistic outcomes.",
      },
      {
        title: "Companion welcome",
        body: "You're welcome to bring a partner, friend, or family member to your consultation. Decisions about surgery are often best made together.",
      },
    ],
  },
  {
    id: "pa",
    label: "PA & Workflow",
    icon: FileText,
    items: [
      {
        title: "Direct PA contact",
        body: "Dr. Jenkin's practice manager handles all scheduling, billing queries, and pre-operative coordination. You will be introduced to your PA contact after your first consultation.",
      },
      {
        title: "Quote turnaround",
        body: "Following your consultation, a written surgical quote is typically issued within 2 business days. The quote is inclusive of theatre, anaesthetist, and facility fees.",
      },
      {
        title: "Pre-operative coordination",
        body: "Once you elect to proceed, the PA coordinates pre-anaesthetic assessment, scheduling, and any required pre-op investigations — all handled on your behalf.",
      },
      {
        title: "Post-operative follow-up",
        body: "Follow-up appointments are scheduled at the time of booking your surgery. Dr. Jenkin personally reviews every patient post-operatively.",
      },
    ],
  },
];

function BookingSection() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [practicalTab, setPracticalTab] = React.useState(PRACTICAL_TABS[0].id);

  function validate() {
    const next: Record<string, string> = {};
    if (!formState.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(formState.email))
      next.email = "Please enter a valid email.";
    if (!formState.service) next.service = "Please select a service.";
    if (formState.date) {
      const d = new Date(formState.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (d < today) next.date = "Preferred date cannot be in the past.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => setSubmitted(true), 350);
  }

  function resetForm() {
    setFormState({ name: "", email: "", phone: "", service: "", date: "", notes: "" });
    setSubmitted(false);
    setErrors({});
  }

  const currentPractical =
    PRACTICAL_TABS.find((t) => t.id === practicalTab) ?? PRACTICAL_TABS[0];

  return (
    <section id="location" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div id="book" className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — booking form */}
          <div>
            <SectionLabel>Book appointment</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight-display text-navy sm:text-4xl text-balance">
              Request a consultation
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-muted text-pretty">
              Tell us a little about what you're considering and your preferred
              date. Dr. Jenkin's PA will respond within two business days to
              confirm an appointment — at Alchimia Clinic or the Cape Town
              Medi-Spa, both on Kloof Street in Gardens.
            </p>

            <div className="mt-8 rounded-xl border border-line bg-white p-6 shadow-card sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-medic-blue-light">
                    <CheckCircle2 className="h-7 w-7 text-medic-blue" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-navy">
                    Consultation request received
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-muted">
                    Thank you, {formState.name.split(" ")[0] || "and welcome"}.
                    Dr. Jenkin's PA will be in touch within two business days to
                    confirm your appointment for{" "}
                    <span className="font-medium text-navy">{formState.service}</span>
                    {formState.date && (
                      <>
                        {" "}
                        around{" "}
                        <span className="font-medium text-navy">
                          {new Date(formState.date).toLocaleDateString("en-ZA", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </>
                    )}
                    . A confirmation email has been initiated to{" "}
                    <span className="font-medium text-navy">{formState.email}</span>.
                  </p>
                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="rounded-md border-line bg-white px-5 text-sm font-medium text-navy hover:bg-surface"
                    >
                      Submit another request
                    </Button>
                    <Button
                      onClick={() => scrollToId("specialties")}
                      className="rounded-md bg-medic-blue px-5 text-sm font-medium text-white hover:bg-medic-blue-dark"
                    >
                      Continue exploring
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label
                        htmlFor="bk-name"
                        className="text-xs font-medium text-slate-text"
                      >
                        Full name <span className="text-medic-blue">*</span>
                      </Label>
                      <Input
                        id="bk-name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Jane van der Merwe"
                        className="mt-1.5 border-line bg-white focus-visible:ring-medic-blue/30"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="bk-phone"
                        className="text-xs font-medium text-slate-text"
                      >
                        Phone
                      </Label>
                      <Input
                        id="bk-phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+27 82 000 0000"
                        className="mt-1.5 border-line bg-white focus-visible:ring-medic-blue/30"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="bk-email"
                      className="text-xs font-medium text-slate-text"
                    >
                      Email <span className="text-medic-blue">*</span>
                    </Label>
                    <Input
                      id="bk-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="mt-1.5 border-line bg-white focus-visible:ring-medic-blue/30"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label className="text-xs font-medium text-slate-text">
                        Service of interest <span className="text-medic-blue">*</span>
                      </Label>
                      <Select
                        value={formState.service}
                        onValueChange={(v) => setFormState({ ...formState, service: v })}
                      >
                        <SelectTrigger
                          className="mt-1.5 border-line bg-white focus:ring-medic-blue/30"
                          aria-label="Service of interest"
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="border-line bg-white">
                          {SERVICE_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="bk-date"
                        className="text-xs font-medium text-slate-text"
                      >
                        Preferred date
                      </Label>
                      <Input
                        id="bk-date"
                        type="date"
                        value={formState.date}
                        onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                        className="mt-1.5 border-line bg-white focus-visible:ring-medic-blue/30"
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-destructive">{errors.date}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="bk-notes"
                      className="text-xs font-medium text-slate-text"
                    >
                      Notes for the team
                    </Label>
                    <Textarea
                      id="bk-notes"
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      placeholder="Anything you'd like Dr. Jenkin's PA to know before your visit."
                      rows={3}
                      className="mt-1.5 resize-none border-line bg-white focus-visible:ring-medic-blue/30"
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-slate-muted">
                      Your information is treated with full medical
                      confidentiality and never shared with third parties.
                    </p>
                    <Button
                      type="submit"
                      className="shrink-0 rounded-md bg-medic-blue px-6 py-4 text-sm font-medium text-white shadow-sm hover:bg-medic-blue-dark"
                    >
                      Request consultation
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right — location & practical */}
          <div className="space-y-6">
            {/* Contact card */}
            <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
              <div className="p-6 sm:p-7">
                <SectionLabel>Location &amp; contact</SectionLabel>
                <h3 className="mt-3 text-xl font-semibold text-navy">
                  Alchimia Clinic — 39 Kloof Street
                </h3>
                <p className="mt-1 text-sm text-slate-muted">
                  Gardens, Cape Town, 8001 · South Africa
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                    <Stethoscope className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                        Surgery &amp; consulting
                      </div>
                      <div className="text-sm font-medium text-navy">
                        Alchimia Clinic — Licensed day-surgery facility, 39 Kloof St (2nd Floor)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                        Also consulting at
                      </div>
                      <div className="text-sm font-medium text-navy">
                        Cape Town Medi-Spa — 99 Kloof Street, Gardens
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                    <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                        Affiliated with
                      </div>
                      <div className="text-sm font-medium text-navy">
                        YourBreast — Accessible Breast Surgery
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      href="tel:+27214232085"
                      className="flex items-center gap-2 rounded-lg border border-line bg-surface p-3 transition-colors hover:border-medic-blue/30 hover:bg-medic-blue-light"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-medic-blue" />
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                          Alchimia Clinic
                        </div>
                        <div className="text-sm font-medium text-navy">
                          +27 21 423 2085
                        </div>
                      </div>
                    </a>
                    <a
                      href="tel:+27214225140"
                      className="flex items-center gap-2 rounded-lg border border-line bg-surface p-3 transition-colors hover:border-medic-blue/30 hover:bg-medic-blue-light"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-medic-blue" />
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                          Cape Town Medi-Spa
                        </div>
                        <div className="text-sm font-medium text-navy">
                          +27 21 422 5140
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="mailto:pa@draimeejenkin.co.za"
                    className="flex items-center gap-2 rounded-lg border border-line bg-surface p-3 transition-colors hover:border-medic-blue/30 hover:bg-medic-blue-light"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-medic-blue" />
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                        Email
                      </div>
                      <div className="text-sm font-medium text-navy">PA enquiries</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Real neighbourhood photo — Kloof Street & Table Mountain */}
              <div className="relative h-40 border-t border-line">
                <img
                  src="/images/kloof-street-table-mountain.jpg"
                  alt="Street view in Gardens, Cape Town with Table Mountain"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"
                />
                <div className="absolute bottom-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-medium text-navy shadow-sm backdrop-blur">
                  Kloof Street · Gardens · Cape Town
                </div>
                <a
                  href="https://maps.google.com/?q=39+Kloof+Street+Gardens+Cape+Town"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-medic-blue shadow-sm transition-colors hover:bg-medic-blue-light"
                >
                  <Navigation className="h-3 w-3" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Practical details */}
            <div className="rounded-xl border border-line bg-white p-6 sm:p-7 shadow-card">
              <SectionLabel>Practical details</SectionLabel>
              <Tabs value={practicalTab} onValueChange={setPracticalTab} className="mt-4">
                <TabsList className="flex h-auto w-full flex-wrap gap-1 rounded-md border border-line bg-surface p-1">
                  {PRACTICAL_TABS.map((t) => (
                    <TabsTrigger
                      key={t.id}
                      value={t.id}
                      className="flex h-auto flex-1 items-center gap-1.5 rounded px-2.5 py-2 text-xs font-medium text-slate-muted data-[state=active]:bg-white data-[state=active]:text-medic-blue data-[state=active]:shadow-sm"
                    >
                      <t.icon className="h-3.5 w-3.5" />
                      {t.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value={practicalTab} className="mt-4">
                  <ul className="space-y-2.5">
                    {currentPractical.items.map((item) => (
                      <li
                        key={item.title}
                        className="rounded-lg border border-line bg-surface p-3.5"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                          <div>
                            <div className="text-sm font-semibold text-navy">
                              {item.title}
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-slate-muted text-pretty">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-line bg-surface-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-medic-blue text-white">
                <span className="text-base font-semibold leading-none">AJ</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-navy">Dr. Aimee Jenkin</div>
                <div className="text-xs text-slate-muted">
                  Plastic &amp; Reconstructive Surgeon
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-muted text-pretty">
              Specialist plastic &amp; reconstructive surgery at Alchimia Clinic,
              39 Kloof Street, Gardens, Cape Town, with consulting rooms at the
              Cape Town Medi-Spa. HPCSA registered, FC Plast Surg (SA).
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-medic-blue">
                FC Plast Surg (SA)
              </span>
              <span className="rounded-md border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-medic-blue">
                HPCSA Registered
              </span>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
              Navigate
            </div>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-sm text-slate-text transition-colors hover:text-medic-blue"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToId("book")}
                  className="text-sm text-slate-text transition-colors hover:text-medic-blue"
                >
                  Book appointment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
              Contact
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-text">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>
                  Alchimia Clinic, 39 Kloof Street, Gardens
                  <br />
                  Cape Town, 8001
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <a href="tel:+27214232085" className="transition-colors hover:text-medic-blue">
                  +27 21 423 2085
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <a href="tel:+27214225140" className="transition-colors hover:text-medic-blue">
                  +27 21 422 5140 (Medi-Spa)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <a
                  href="mailto:pa@draimeejenkin.co.za"
                  className="transition-colors hover:text-medic-blue"
                >
                  pa@draimeejenkin.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-medic-blue">
              Affiliations
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-text">
              <li className="flex items-start gap-2">
                <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>Alchimia Clinic</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>Cape Town Medi-Spa</span>
              </li>
              <li className="flex items-start gap-2">
                <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>YourBreast</span>
              </li>
              <li className="flex items-start gap-2">
                <Microscope className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>Charlotte Maxeke Academic</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-medic-blue" />
                <span>Netcare Kuils River</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-line" />

        {/* Disclaimer */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-medic-blue">
              <ShieldCheck className="h-3.5 w-3.5" />
              Regulatory &amp; medical disclaimer
            </div>
            <p className="text-xs leading-relaxed text-slate-muted text-pretty">
              Dr. Aimee Jenkin is registered with the Health Professions Council
              of South Africa (HPCSA) as a Specialist Plastic &amp; Reconstructive
              Surgeon, and holds the Fellowship of the College of Plastic
              Surgeons of South Africa (FC Plast Surg SA). All surgical
              procedures are performed at Alchimia Clinic, a licensed day-surgery
              facility at 39 Kloof Street, 2nd Floor, Gardens, Cape Town.
              Consulting rooms are also at the Cape Town Medi-Spa, 99 Kloof
              Street, Gardens.
            </p>
            <p className="text-xs leading-relaxed text-slate-muted text-pretty">
              The information on this website is provided for general educational
              purposes only and is not a substitute for an individualised medical
              consultation. Outcomes, recovery times, and candidacy for any
              procedure vary between patients and can only be assessed in person
              by a qualified surgeon. No guarantee of results is implied or
              stated. All surgical procedures carry risks, which will be
              discussed in detail during your consultation.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div className="rounded-lg border border-line bg-white p-4">
              <div className="text-[11px] font-medium uppercase tracking-wide text-slate-muted">
                Practice hours
              </div>
              <div className="mt-1.5 text-sm text-navy">Mon – Fri · 08h00 – 17h00</div>
              <div className="text-sm text-slate-muted">Theatre days by appointment</div>
            </div>
            <div className="text-right text-xs text-slate-muted">
              © {new Date().getFullYear()} Dr. Aimee Jenkin. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <StickyHeader />
      <main className="flex-1">
        <HeroSection />
        <ProfileTabs />
        <SpecialtySection />
        <FacilitySection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
