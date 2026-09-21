import {
  Sparkles,
  Hand,
  Stethoscope,
  HeartPulse,
  Baby,
  Scissors,
  Bandage,
  Microscope,
  ShieldCheck,
  Clock,
  UserCheck,
  Activity,
  Mountain,
  Blocks,
  Plane,
  Hospital,
  type LucideIcon,
} from "lucide-react";

export type Specialty = {
  id: string;
  title: string;
  short: string;
  category: "Cosmetic & Aesthetic" | "YourBreast Affiliation" | "Reconstructive Microsurgery";
  icon: LucideIcon;
  overview: string;
  procedures: { name: string; description: string }[];
  recovery: { phase: string; timeline: string; notes: string }[];
  idealCandidate: string[];
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "facial-rejuvenation",
    title: "Facial Rejuvenation",
    short:
      "Refined surgical and non-surgical facial enhancement tailored to your natural anatomy.",
    category: "Cosmetic & Aesthetic",
    icon: Sparkles,
    overview:
      "Facial rejuvenation at 99 Kloof Street combines meticulous surgical technique with an artist's eye for proportion and harmony. Every assessment begins with a structural analysis of bone, soft tissue, and skin envelope to ensure results read as a more rested, refined version of you — never 'operated on'. Dr. Jenkin favours conservative, anatomically-led interventions that age gracefully over decades rather than seasonal trends that compromise long-term aesthetics.",
    procedures: [
      {
        name: "Surgical Facelift & Necklift",
        description:
          "Deep-plane and SMAS plication techniques addressing jowling, platysmal bands, and mid-face descent.",
      },
      {
        name: "Blepharoplasty",
        description:
          "Upper and lower eyelid surgery to restore a bright, unburdened periorbital frame.",
      },
      {
        name: "Rhinoplasty",
        description:
          "Functional and aesthetic nasal reshaping respecting airway patency and ethnic identity.",
      },
      {
        name: "Injectables & Energy Devices",
        description:
          "Adjunct neurotoxin, filler, and energy-based treatments as standalone or maintenance care.",
      },
    ],
    recovery: [
      { phase: "Initial healing", timeline: "7–10 days", notes: "Bruising and swelling peak at day 3, then resolve steadily." },
      { phase: "Social readiness", timeline: "2–3 weeks", notes: "Makeup may camouflage residual bruising; sutures removed by day 7–10." },
      { phase: "Full maturation", timeline: "3–6 months", notes: "Scars soften, contour settles, final result emerges." },
    ],
    idealCandidate: [
      "In good general health with realistic expectations",
      "Bothered by specific anatomical changes (jowls, hooding, loss of jawline definition)",
      "Willing to commit 2 weeks of social downtime",
      "Non-smoker, or willing to cease 4 weeks pre- and post-operatively",
    ],
  },
  {
    id: "body-contouring",
    title: "Body Contouring",
    short:
      "Sculpting procedures that restore proportion after weight change, pregnancy, or ageing.",
    category: "Cosmetic & Aesthetic",
    icon: Activity,
    overview:
      "Body contouring at Alchimia Clinic addresses the full silhouette — abdomen, flanks, thighs, arms, and back. Dr. Jenkin's reconstructive microsurgery background informs a deep understanding of skin elasticity, fat compartment anatomy, and scar biomechanics. The result is contour surgery that respects blood supply, minimises complication risk, and produces results that hold up over time. Liposuction is integrated surgically, not marketed as a stand-alone quick fix.",
    procedures: [
      {
        name: "Abdominoplasty (Tummy Tuck)",
        description:
          "Rectus diastasis repair, skin excess excision, and complementary liposuction for a flat, restored abdominal wall.",
      },
      {
        name: "Liposuction & Lipostructure",
        description:
          "Targeted fat reduction with selective fat grafting to restore volume where it belongs.",
      },
      {
        name: "Arm & Thigh Lift",
        description:
          "Brachioplasty and thighplasty for skin laxity following major weight loss.",
      },
      {
        name: "Post-Bariatric Contouring",
        description:
          "Staged lower-body, upper-body, and facial refinements after significant weight loss.",
      },
    ],
    recovery: [
      { phase: "Early mobilisation", timeline: "Day 1–3", notes: "Walking encouraged with compression garments in place." },
      { phase: "Return to desk work", timeline: "10–14 days", notes: "Garments worn 24/7; no heavy lifting." },
      { phase: "Return to exercise", timeline: "6 weeks", notes: "Progressive reintroduction of cardio and resistance training." },
    ],
    idealCandidate: [
      "Stable weight for at least 6 months",
      "BMI in a safe surgical range (typically 18–32)",
      "Bothered by skin laxity, diastasis, or localised fat deposits unresponsive to lifestyle",
      "Has support at home for the first 72 hours post-op",
    ],
  },
  {
    id: "post-pregnancy",
    title: "Post-Pregnancy Restoration",
    short:
      "A staged, holistic approach to the changes that motherhood leaves behind.",
    category: "Cosmetic & Aesthetic",
    icon: Baby,
    overview:
      "Pregnancy, childbirth, and breastfeeding reshape a woman's body in profound ways — often in directions that no amount of exercise or nutrition can fully reverse. Dr. Jenkin approaches post-pregnancy restoration as a personalised combination of breast, abdominal, and contour procedures, sequenced around your family planning, recovery capacity, and aesthetic priorities. Each plan is built around your life, not a packaged 'mommy makeover' template.",
    procedures: [
      {
        name: "Breast Lift (Mastopexy)",
        description:
          "Restoring breast position and shape after deflation from pregnancy and lactation.",
      },
      {
        name: "Abdominal Restoration",
        description:
          "Repair of rectus diastasis with skin excision to reverse the post-partum 'pooch'.",
      },
      {
        name: "Combined Staged Surgery",
        description:
          "Single-anaesthesia combination when clinically appropriate, with safety as the deciding factor.",
      },
      {
        name: "Vaginal & Perineal Refinement",
        description:
          "Reconstructive correction of obstetric trauma where indicated.",
      },
    ],
    recovery: [
      { phase: "Initial recovery", timeline: "2 weeks", notes: "Restricted lifting — critical for mothers of young children." },
      { phase: "Functional return", timeline: "4–6 weeks", notes: "Driving, school runs, and most activities of daily living resumed." },
      { phase: "Final result", timeline: "6 months", notes: "Scars mature and breast shape settles into long-term position." },
    ],
    idealCandidate: [
      "At least 6 months postpartum and finished breastfeeding",
      "Not planning further pregnancies",
      "Has childcare support during the initial recovery window",
      "Seeking restoration of pre-pregnancy form, not a 'new' body",
    ],
  },
  {
    id: "breast-augmentation",
    title: "Breast Augmentation",
    short:
      "Accessible, anatomically-considered augmentation via the YourBreast pathway.",
    category: "YourBreast Affiliation",
    icon: HeartPulse,
    overview:
      "Through the YourBreast collaboration, Dr. Jenkin provides streamlined, transparently-priced breast augmentation at Alchimia Clinic. The surgical standard is identical to her private practice: anatomically-informed implant selection, dual-plane or sub-pectoral placement, and a meticulous, scar-conscious closure. YourBreast's model removes administrative friction so more women can access surgeon-led, hospital-grade augmentation without compromising on safety, theatre quality, or follow-up.",
    procedures: [
      {
        name: "Implant Augmentation",
        description:
          "Silicone gel implants selected on tissue-based metrics, placed to preserve nipple sensation and mammographic access.",
      },
      {
        name: "Augmentation-Mastopexy",
        description:
          "Combined volume restoration and lift for ptosis with deflation.",
      },
      {
        name: "Fat Transfer Augmentation",
        description:
          "Modest volume enhancement using your own tissue, ideal for refinement or implant camouflage.",
      },
    ],
    recovery: [
      { phase: "Hospital stay", timeline: "Day case", notes: "Discharged same day from Alchimia's day-surgery theatres." },
      { phase: "Return to work", timeline: "5–7 days", notes: "Desk-based work typically resumed within a week." },
      { phase: "Full activity", timeline: "6 weeks", notes: "Push-ups, running, and chest training reintroduced gradually." },
    ],
    idealCandidate: [
      "Age 22+ for silicone implants (per regulatory guidance)",
      "Bothered by volume loss, asymmetry, or congenital underdevelopment",
      "Wants a transparent, all-inclusive pricing pathway",
      "Realistic about implant longevity and the likelihood of future revision",
    ],
  },
  {
    id: "breast-reduction",
    title: "Breast Reduction",
    short:
      "Functional and aesthetic relief for macromastia, accessible through YourBreast.",
    category: "YourBreast Affiliation",
    icon: ShieldCheck,
    overview:
      "Breast reduction is one of the most functionally transformative operations in plastic surgery. Chronic neck and back pain, intertrigo, exercise limitation, and postural strain are reliably relieved when breast weight is brought into proportion with the patient's frame. Through YourBreast, Dr. Jenkin offers this procedure with a streamlined pathway and predictable pricing — without compromising on the technical precision that minimises scarring and preserves nipple sensation.",
    procedures: [
      {
        name: "Vertical (Lollipop) Reduction",
        description:
          "Short-scar technique favoured for moderate reductions with quicker scar maturation.",
      },
      {
        name: "Inferior Pedicle Wise-Pattern",
        description:
          "Traditional anchor pattern for larger reductions where skin excision is extensive.",
      },
      {
        name: "Liposuction-Assisted Reduction",
        description:
          "Adjunctive lateral chest and axillary tail liposuction for complete contouring.",
      },
    ],
    recovery: [
      { phase: "Hospital stay", timeline: "Day case or 23h", notes: "Most patients discharged same day with drains removed pre-discharge." },
      { phase: "Pain & mobility", timeline: "1–2 weeks", notes: "First 48 hours require analgesia and postural support." },
      { phase: "Scar maturation", timeline: "6–12 months", notes: "Scars soften significantly; final shape stabilises." },
    ],
    idealCandidate: [
      "Chronic neck, shoulder, or back pain attributable to breast weight",
      "BMI within a safe anaesthetic range",
      "Non-smoker (smoking dramatically increases nipple necrosis risk)",
      "Finished childbearing — though lactation preservation is discussed",
    ],
  },
  {
    id: "breast-reconstruction",
    title: "Breast Reconstruction",
    short:
      "Compassionate reconstructive surgery following mastectomy, in collaboration with YourBreast.",
    category: "YourBreast Affiliation",
    icon: HeartPulse,
    overview:
      "Breast reconstruction is among the most meaningful work Dr. Jenkin undertakes. Drawing on her microsurgery training at Charlotte Maxeke and Netcare Union, she offers implant-based and autologous reconstruction pathways, working in close collaboration with the patient's oncology team. Timing, technique, and expectations are calibrated to the cancer journey — reconstruction never competes with oncological safety, and is sequenced to support physical and emotional recovery.",
    procedures: [
      {
        name: "Implant-Based Reconstruction",
        description:
          "Direct-to-implant or two-stage expander-to-implant with biological mesh support.",
      },
      {
        name: "Autologous Reconstruction",
        description:
          "DIEP and other perforator flaps where microsurgical expertise is indicated.",
      },
      {
        name: "Nipple & Areola Reconstruction",
        description:
          "Final-stage refinement including 3D tattooing referral.",
      },
      {
        name: "Contralateral Symmetrisation",
        description:
          "Balancing procedures on the unaffected breast for overall harmony.",
      },
    ],
    recovery: [
      { phase: "Hospital stay", timeline: "1–5 nights", notes: "Implant-based 1–2 nights; autologous 4–5 nights." },
      { phase: "Initial healing", timeline: "2–4 weeks", notes: "Drains in situ; restricted upper-body movement." },
      { phase: "Complete recovery", timeline: "6–12 weeks", notes: "Return to full activity; oncology surveillance continues in parallel." },
    ],
    idealCandidate: [
      "Post-mastectomy or facing mastectomy with reconstructive intent",
      "Cleared by oncology team for reconstructive surgery",
      "Non-smoker or committed to cessation through recovery",
      "Emotionally supported through a multi-stage reconstructive pathway",
    ],
  },
  {
    id: "hand-surgery",
    title: "Hand Surgery & Reconstruction",
    short:
      "Microsurgical restoration of function following trauma, compression, or degeneration.",
    category: "Reconstructive Microsurgery",
    icon: Hand,
    overview:
      "Hand surgery is where Dr. Jenkin's microsurgical training at Charlotte Maxeke Academic Hospital most directly shapes her practice. The hand is a precision instrument — every tendon, nerve, and vessel matters. From carpal tunnel release to complex revascularisation, the goal is the same: restore function, relieve pain, and return patients to the activities that define their daily lives. Her appointment at Netcare Union and Netcare Kuils River keeps her engaged with high-acuity hand trauma.",
    procedures: [
      {
        name: "Carpal & Cubital Tunnel Release",
        description:
          "Decompression of median and ulnar nerves for persistent neuropathy.",
      },
      {
        name: "Tendon Repair & Transfer",
        description:
          "Primary repair, grafting, and staged reconstruction for flexor and extensor injuries.",
      },
      {
        name: "Replantation & Revascularisation",
        description:
          "Microsurgical restoration of amputated or devascularised digits and hand segments.",
      },
      {
        name: "Thumb & Joint Arthroplasty",
        description:
          "Trapeziectomy, silicone arthroplasty, and joint fusion for arthritis.",
      },
    ],
    recovery: [
      { phase: "Immobilisation", timeline: "1–4 weeks", notes: "Splinted to protect repair; therapist-led mobilisation begins early." },
      { phase: "Therapy phase", timeline: "4–12 weeks", notes: "Hand therapy is mandatory — outcomes depend on it." },
      { phase: "Functional return", timeline: "3–6 months", notes: "Strength and dexterity continue to improve for up to a year." },
    ],
    idealCandidate: [
      "Acute hand trauma requiring microsurgical expertise",
      "Chronic nerve compression failing conservative management",
      "Degenerative hand conditions impacting daily function",
      "Committed to hand therapy engagement — non-negotiable for good outcomes",
    ],
  },
  {
    id: "scar-management",
    title: "Scar Management & Revision",
    short:
      "A multi-modal approach to scar refinement — from conservative therapy to surgical revision.",
    category: "Reconstructive Microsurgery",
    icon: Bandage,
    overview:
      "Scars tell the story of healing, but they don't have to define it. Dr. Jenkin's scar practice spans conservative management (silicone, pressure, injectable steroids) through to surgical revision with geometric re-orientation, Z-plasty, and laser resurfacing. Her reconstructive background gives her an unusually nuanced understanding of scar biomechanics — she knows when to operate, when to wait, and when to refer for adjunct modalities. Honest expectation-setting is central; not every scar can be erased.",
    procedures: [
      {
        name: "Surgical Scar Revision",
        description:
          "Excision and re-orientation along relaxed skin tension lines for hypertrophic or wide scars.",
      },
      {
        name: "Z-Plasty & W-Plasty",
        description:
          "Geometric re-orientation to lengthen contractures and break up linear scars.",
      },
      {
        name: "Injectable & Topical Management",
        description:
          "Intralesional corticosteroid, 5-FU, and silicone protocols for hypertrophic scarring.",
      },
      {
        name: "Laser Adjunct Referral",
        description:
          "Vascular and fractionated laser protocols in collaboration with dermatology colleagues.",
      },
    ],
    recovery: [
      { phase: "Wound healing", timeline: "10–14 days", notes: "Sutures removed; taping protocol begins." },
      { phase: "Scar maturation", timeline: "3–12 months", notes: "Prolonged maturation — patience and taping are essential." },
      { phase: "Final result", timeline: "12–18 months", notes: "Realistic endpoint: an improved, less conspicuous scar, not invisibility." },
    ],
    idealCandidate: [
      "Scar at least 6–12 months old and stable",
      "Bothered by scar width, elevation, colour, or contracture",
      "Realistic about achievable improvement",
      "Willing to comply with taping, massage, and sun protection protocols",
    ],
  },
  {
    id: "complex-reconstruction",
    title: "Complex Tissue Reconstruction",
    short:
      "Microsurgical free-flap and local-flap reconstruction for challenging defects.",
    category: "Reconstructive Microsurgery",
    icon: Microscope,
    overview:
      "Complex tissue reconstruction — the rebuild of significant defects from trauma, oncological resection, or congenital absence — is the most technically demanding work in plastic surgery. Dr. Jenkin's microsurgical training equips her to transfer tissue from one part of the body to another, re-establishing blood supply under the microscope. These cases are typically collaborative, undertaken with oncology, orthopaedic, or general surgical colleagues, and demand both surgical precision and a long-term reconstructive view.",
    procedures: [
      {
        name: "Free Flap Reconstruction",
        description:
          "DIEP, ALT, radial forearm, and other perforator flaps for head, neck, and limb defects.",
      },
      {
        name: "Local & Regional Flaps",
        description:
          "Rotation, transposition, and pedicled flaps for moderate defects.",
      },
      {
        name: "Tissue Expansion",
        description:
          "Staged expansion for large congenital or post-excision defects.",
      },
      {
        name: "Lower Limb Reconstruction",
        description:
          "Coverage of post-traumatic lower-limb defects with vascularised tissue.",
      },
    ],
    recovery: [
      { phase: "Critical monitoring", timeline: "5–7 days", notes: "Flap monitored hourly in the first 72 hours for vascular compromise." },
      { phase: "Hospital discharge", timeline: "7–14 days", notes: "Discharged once flap stable and donor site healed." },
      { phase: "Functional return", timeline: "3–6 months", notes: "Rehabilitation continues; revision stages planned as needed." },
    ],
    idealCandidate: [
      "Significant soft-tissue defect from trauma, ablation, or congenital cause",
      "Medically fit for prolonged surgery and recovery",
      "Supported by a multidisciplinary team",
      "Committed to a staged reconstructive pathway over months to years",
    ],
  },
];

export type ProfileTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  paragraphs: string[];
  highlights: { label: string; value: string; icon: LucideIcon }[];
};

export const PROFILE_TABS: ProfileTab[] = [
  {
    id: "journey",
    label: "Journey & Philosophy",
    icon: Stethoscope,
    headline: "From Eastern Cape mentorship to the City Bowl",
    paragraphs: [
      "Dr. Aimee Jenkin graduated with an MBBCh from the University of the Witwatersrand in 2001, then completed her internship and community service years in the Eastern Cape — a formative period that grounded her in the disciplined, resource-conscious tradition of South African public medicine. Those early years shaped a surgical philosophy that values judgement over technology, mentorship over ego, and the patient in front of you over the protocol on the wall.",
      "She returned to Johannesburg to pursue specialist training in Plastic and Reconstructive Surgery, earning her specialist qualification in 2012. The training was demanding and broad — burns, congenital anomalies, post-oncological reconstruction, hand trauma, and aesthetic surgery were all taught as branches of the same tree. This breadth remains the foundation of her practice today.",
      "Her philosophy is simple: surgical precision is non-negotiable, but it is not enough on its own. The same operation performed without warmth, without listening, and without an honest conversation about what surgery can and cannot do, is incomplete. Artistry and technicality must coexist with compassion and grounded communication — that is the standard she holds herself to every day at 99 Kloof Street.",
    ],
    highlights: [
      { label: "MBBCh", value: "Wits, 2001", icon: ShieldCheck },
      { label: "Specialist Qualification", value: "Plast Surg, 2012", icon: Stethoscope },
      { label: "Training", value: "Eastern Cape → Johannesburg", icon: Plane },
      { label: "Philosophy", value: "Artistry meets technicality", icon: Sparkles },
    ],
  },
  {
    id: "clinical",
    label: "Clinical Focus",
    icon: Microscope,
    headline: "Microsurgery, hand reconstruction & aesthetic surgery",
    paragraphs: [
      "Dr. Jenkin's subspecialty training was built on the unforgiving foundations of microsurgery and hand reconstruction at Charlotte Maxeke Academic Hospital in Johannesburg, with continued clinical engagement at Netcare Union Hospital and Netcare Kuils River. These institutions demand a level of precision and a tolerance for complexity that few training environments can match — and they shape every operation she performs today, from a cosmetic breast augmentation to a complex flap reconstruction.",
      "Her current clinical practice spans three pillars. At Alchimia Clinic, 99 Kloof Street, she delivers the full spectrum of cosmetic and reconstructive surgery in a private, day-surgery setting. Through the YourBreast collaboration, she offers accessible, transparently-priced breast surgery without compromising on surgeon-led care or theatre quality. And she continues to assist colleagues on complex cases — a habit formed in academic medicine that she has no intention of giving up.",
      "What ties these three pillars together is a single standard: the operation is performed to the same meticulous specification regardless of the price tag or the patient's profile. Skill is not a variable to be tuned to the setting — it is the constant on which the practice is built.",
    ],
    highlights: [
      { label: "Microsurgery", value: "Charlotte Maxeke", icon: Microscope },
      { label: "Hand Surgery", value: "Netcare Union & Kuils River", icon: Hand },
      { label: "Cosmetic Practice", value: "Alchimia Clinic", icon: Sparkles },
      { label: "Accessible Breast Surgery", value: "YourBreast", icon: HeartPulse },
    ],
  },
  {
    id: "life",
    label: "Life in the City Bowl",
    icon: Mountain,
    headline: "Family, forests, trails & Technical LEGO",
    paragraphs: [
      "Dr. Jenkin and her husband — a vascular surgeon at Christiaan Barnard Hospital — relocated their family to Cape Town's City Bowl, drawn by the same qualities that draw so many to the Mother City: the mountain on your doorstep, the ocean an easy drive away, and a medical community that punches well above its weight on the global stage. Their two boys are growing up with Table Mountain as a constant, and the family has settled into the rhythm of City Bowl life with the kind of gratitude that comes from choosing a place deliberately.",
      "Outside the operating theatre, her time is spent in ways that quietly reinforce the same qualities surgery demands — patience, precision, and a willingness to engage with complexity. The family explores Cape Town's forests and mountain trails together; she swims whenever the Atlantic allows; and the garden at home is an ongoing, never-finished project that she treats with the same attention to detail as a surgical plan.",
      "And then there is the Technical LEGO — a hobby that surprises people who don't know surgeons. Building complex LEGO Technic sets is, in many ways, the same cognitive discipline as reconstructive surgery: follow the sequence precisely, understand how each component contributes to the whole, and resist the temptation to skip ahead. The fact that it produces something delightful at the end is, of course, the point.",
    ],
    highlights: [
      { label: "Family Home", value: "Cape Town City Bowl", icon: ShieldCheck },
      { label: "Husband", value: "Vascular surgeon, Christiaan Barnard", icon: HeartPulse },
      { label: "Weekends", value: "Trails, forests, swimming", icon: Mountain },
      { label: "Quiet Obsession", value: "Technical LEGO", icon: Blocks },
    ],
  },
];

export type FacilityFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
};

export const FACILITY_FEATURES: FacilityFeature[] = [
  {
    icon: Hospital,
    title: "Private Day-Hospital Setup",
    description:
      "Alchimia Clinic is a fully-licensed day-surgery facility — discreet, dedicated, and built entirely around the patient experience. There are no shared hospital corridors, no impersonal wards, and no rushing. Every detail of the facility is calibrated to feel less like a hospital and more like a calm, considered space for healing.",
    metric: "Boutique patient care",
  },
  {
    icon: Microscope,
    title: "Two State-of-the-Art Theatres",
    description:
      "Two modern, fully-equipped operating theatres support the full range of Dr. Jenkin's cosmetic and reconstructive caseload. Theatre specifications meet or exceed day-surgery standards, with laminar flow, modern anaesthetic workstations, and the equipment needed for microsurgical work — all on-site at 99 Kloof Street.",
    metric: "2 theatres",
  },
  {
    icon: ShieldCheck,
    title: "Uninterrupted Backup Power",
    description:
      "A 100kVA generator ensures that no surgery, recovery, or critical system is ever compromised by grid instability. In a South African context, this is not a luxury — it is a baseline requirement for safe surgical practice, and Alchimia has invested accordingly. Patients can be assured that the lights will stay on, the theatres will keep running, and the standard of care is never at the mercy of the grid.",
    metric: "100 kVA generator",
  },
  {
    icon: UserCheck,
    title: "Discrete Boutique Patient Care",
    description:
      "The patient journey at Alchimia is intentionally private. Pre-operative preparation, anaesthetic induction, surgery, recovery, and discharge all unfold within the same discreet footprint. There is no shuffling between departments, no exposure to unrelated patients, and no compromise on the personal, attentive standard of care that defines Dr. Jenkin's practice.",
    metric: "End-to-end privacy",
  },
];

export type TrustBadge = {
  label: string;
  icon: LucideIcon;
};

export const TRUST_BADGES: TrustBadge[] = [
  { label: "HPCSA Registered", icon: ShieldCheck },
  { label: "FCS Plast Surg (SA)", icon: Stethoscope },
  { label: "Wits Alum", icon: ShieldCheck },
  { label: "Charlotte Maxeke Trained", icon: Microscope },
];

export type ContactDetail = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

export const CONTACT_DETAILS: ContactDetail[] = [
  {
    icon: Stethoscope,
    label: "Practice Address",
    value: "99 Kloof Street, Gardens, Cape Town, 8005",
  },
  {
    icon: ShieldCheck,
    label: "Clinic",
    value: "Alchimia Clinic — Day-Surgery Facility",
  },
  {
    icon: HeartPulse,
    label: "Affiliated With",
    value: "YourBreast — Accessible Breast Surgery",
  },
];
