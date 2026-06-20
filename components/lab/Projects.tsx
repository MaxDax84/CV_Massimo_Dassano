"use client";

import { motion } from "framer-motion";
import { useLabLang } from "@/contexts/lab-lang-context";

const t = {
  it: {
    eyebrow: "Portfolio",
    title: "Progetti selezionati",
    projects: [
      {
        title: "Marcella Marcone",
        category: "Psicoterapeuta",
        tag: "Restyling",
        description:
          "Restyling completo per uno studio di psicoterapia. Design pulito e rassicurante, navigazione semplificata per mettere a proprio agio chi cerca supporto.",
        link: "https://marcellamarcone-restyle.vercel.app/",
      },
      {
        title: "Gelateria Icone",
        category: "Gelateria artigianale",
        tag: "Da zero",
        description:
          'Sito creato da zero per una gelateria artigianale. Palette vivace, menu prodotti in evidenza, ottimizzato mobile per chi cerca "gelateria vicino a me" dal telefono.',
        link: "https://gelateria-icone.surge.sh/",
      },
      {
        title: "Dassano",
        category: "Band musicale",
        tag: "Immersivo",
        description:
          "Sito per band musicale. Focus su immagini, date concerti e ascolto diretto dei brani. Esperienza immersiva, nessun elemento superfluo.",
        link: "https://www.dassano.it",
      },
      {
        title: "Alessandro Marcello",
        category: "Personal Branding Executive",
        tag: "Executive",
        description:
          "Sito personale da zero per un business leader internazionale. Formato CV digitale elegante, taglio executive, pensato per LinkedIn e networking professionale.",
        link: "https://www.alessandromarcello.it",
      },
      {
        title: "Massimo Dassano",
        category: "Web Agency",
        tag: "Agency",
        description:
          "Il mio sito principale. Restyling e creazione siti per attività locali, con un approccio diretto basato su esperienza corporate applicata al piccolo business.",
        link: "https://www.massimodassano.it",
      },
      {
        title: "Portale Maternità",
        category: "Salute & benessere",
        tag: "Da zero",
        description:
          "Piattaforma per professioniste della maternità. Consulenze, gruppi di supporto e servizi online per donne in gravidanza e nel post-partum.",
        link: "https://portale-maternita.vercel.app/",
      },
      {
        title: "Invito Compleanno",
        category: "Invito digitale",
        tag: "Demo",
        description:
          "Invito digitale per il primo compleanno di un bambino. Tema dinosauri, banda interattiva e conferma presenza. Esempio di prodotto personalizzabile.",
        link: "/lab/compleanno",
      },
    ],
    marquee: [
      "Psicoterapia",
      "Gelateria artigianale",
      "Band musicale",
      "Personal branding executive",
      "Web agency",
      "Salute & maternità",
      "Invito digitale",
    ],
  },
  en: {
    eyebrow: "Portfolio",
    title: "Selected projects",
    projects: [
      {
        title: "Marcella Marcone",
        category: "Psychotherapist",
        tag: "Restyling",
        description:
          "Full restyling for a psychotherapy practice. Clean, reassuring design with simplified navigation to make visitors seeking support feel at ease.",
        link: "https://marcellamarcone-restyle.vercel.app/",
      },
      {
        title: "Gelateria Icone",
        category: "Artisan ice cream shop",
        tag: "From scratch",
        description:
          'Built from scratch for an artisan gelateria. Vibrant palette, featured product menu, mobile-optimised for customers searching "ice cream near me" on their phone.',
        link: "https://gelateria-icone.surge.sh/",
      },
      {
        title: "Dassano",
        category: "Music band",
        tag: "Immersive",
        description:
          "Website for a music band. Focus on imagery, concert dates and direct song playback. Immersive experience, no unnecessary elements.",
        link: "https://www.dassano.it",
      },
      {
        title: "Alessandro Marcello",
        category: "Executive Personal Branding",
        tag: "Executive",
        description:
          "Personal site built from scratch for an international business leader. Elegant digital CV format with an executive look, designed for LinkedIn and professional networking.",
        link: "https://www.alessandromarcello.it",
      },
      {
        title: "Massimo Dassano",
        category: "Web Agency",
        tag: "Agency",
        description:
          "My main site. Restyling and site creation for local businesses, with a direct approach rooted in corporate experience applied to small business.",
        link: "https://www.massimodassano.it",
      },
      {
        title: "Portale Maternità",
        category: "Health & wellness",
        tag: "From scratch",
        description:
          "Platform for maternity professionals. Individual consultations, support groups and online services for women during pregnancy and postpartum.",
        link: "https://portale-maternita.vercel.app/",
      },
      {
        title: "Birthday Invitation",
        category: "Digital invitation",
        tag: "Demo",
        description:
          "Digital birthday invitation for a child's first birthday. Dinosaur theme, interactive band and RSVP. Example of a fully customisable product.",
        link: "/lab/compleanno",
      },
    ],
    marquee: [
      "Psychotherapy",
      "Artisan ice cream",
      "Music band",
      "Executive personal branding",
      "Web agency",
      "Health & maternity",
      "Digital invitation",
    ],
  },
} as const;

export default function Projects() {
  const { lang } = useLabLang();
  const ht = t[lang];

  return (
    <section className="relative z-[1] py-24">
      <div className="px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#E8622A] text-[10px] tracking-[0.35em] uppercase font-inter">
            {ht.eyebrow}
          </span>
          <h2 className="font-sora font-bold text-3xl md:text-5xl text-[#F2F0EB] mt-4 leading-tight">
            {ht.title}
          </h2>
        </motion.div>

        {/* Row 1 — 2 larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {ht.projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.08} />
          ))}
        </div>

        {/* Row 2 — 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ht.projects.slice(2).map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i + 2) * 0.08} />
          ))}
        </div>
      </div>

      {/* ── Infinite marquee strip ── */}
      <div className="mt-16 border-t border-white/[0.05] overflow-hidden select-none group">
        <div
          className="flex w-max py-5 group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {[...ht.marquee, ...ht.marquee].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-[#F2F0EB]/45 text-sm font-inter tracking-[0.06em] whitespace-nowrap px-8">
                {item}
              </span>
              <span className="text-[#E8622A]/35 text-[9px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  category: string;
  tag: string;
  description: string;
  link: string;
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const isInternal = project.link.startsWith("/");
  return (
    <motion.a
      href={project.link}
      target={isInternal ? undefined : "_blank"}
      rel={isInternal ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group block p-7 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.025]
        backdrop-blur-md cursor-pointer
        transition-[border-color,background-color,box-shadow] duration-300
        hover:border-[#E8622A]/35 hover:bg-white/[0.04]
        hover:shadow-[0_0_40px_rgba(232,98,42,0.14)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8622A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090E1B]"
    >
      <div className="flex items-start justify-between mb-5">
        <span className="text-[#E8622A] text-[9px] tracking-[0.35em] uppercase font-inter font-medium">
          {project.tag}
        </span>
        <svg
          className="w-4 h-4 text-white/20 group-hover:text-[#E8622A]/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </div>

      <h3 className="font-sora font-semibold text-xl text-[#F2F0EB] mb-1 transition-colors group-hover:text-white">
        {project.title}
      </h3>
      <p className="text-[#E8622A]/60 text-[11px] tracking-widest uppercase font-inter mb-5">
        {project.category}
      </p>
      <p className="text-[#F2F0EB]/50 text-sm leading-relaxed">
        {project.description}
      </p>
    </motion.a>
  );
}
