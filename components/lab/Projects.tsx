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
        title: "Invito Compleanno",
        category: "Invito digitale",
        tag: "Demo",
        description:
          "Invito digitale per il primo compleanno di un bambino. Tema dinosauri, banda interattiva e conferma presenza. Esempio di prodotto personalizzabile.",
        link: "/lab/compleanno",
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
        title: "Dassano.it",
        category: "Band musicale",
        tag: "Immersivo",
        description:
          "Sito per band musicale. Focus su immagini, date concerti e ascolto diretto dei brani. Esperienza immersiva, nessun elemento superfluo.",
        link: "https://www.dassano.it",
      },
    ],
    marquee: [
      "Invito digitale",
      "Psicoterapia",
      "Gelateria artigianale",
      "Personal branding executive",
      "Band musicale",
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
        title: "Birthday Invitation",
        category: "Digital invitation",
        tag: "Demo",
        description:
          "Digital birthday invitation for a child's first birthday. Dinosaur theme, interactive band and RSVP. Example of a fully customisable product.",
        link: "/lab/compleanno",
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
        title: "Dassano.it",
        category: "Music band",
        tag: "Immersive",
        description:
          "Website for a music band. Focus on imagery, concert dates and direct song playback. Immersive experience, no unnecessary elements.",
        link: "https://www.dassano.it",
      },
    ],
    marquee: [
      "Digital invitation",
      "Psychotherapy",
      "Artisan ice cream",
      "Executive personal branding",
      "Music band",
    ],
  },
} as const;

/* Thumbnail preview per la card compleanno — stesse immagini usate nella pagina /lab/compleanno */
const FESTA_THUMBNAILS = new Set(["Invito Compleanno", "Birthday Invitation"]);

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

function FestaThumbnail() {
  const id = "festa-dino-tile";
  return (
    <div
      className="rounded-xl mb-5 overflow-hidden relative flex items-center justify-center"
      style={{ height: "110px", background: "#FFF8F0" }}
    >
      {/* Tiled dino pattern — same images used in /lab/compleanno */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.32 }}
      >
        <defs>
          <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
            <image href="/compleanno/dino-max.png" x="0"  y="6"  width="28" height="28" />
            <image href="/compleanno/dino-ele.png" x="38" y="2"  width="22" height="22" />
            <image href="/compleanno/dino-edo.png" x="42" y="40" width="20" height="20" />
            <image href="/compleanno/dino-max.png" x="4"  y="44" width="18" height="18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      {/* Garland triangles — same colours as the party page */}
      <svg
        aria-hidden="true"
        viewBox="0 0 300 28"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "28px", opacity: 0.55 }}
      >
        <path d="M-5 4 Q75 1 150 10 Q225 18 305 4" stroke="#C8A850" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <polygon points="22,3 34,3 28,22"  fill="#F4A8C7"/>
        <polygon points="57,2 69,2 63,20"  fill="#F5D47E"/>
        <polygon points="92,3 104,3 98,21" fill="#7EAD7A"/>
        <polygon points="127,6 139,6 133,24" fill="#E8916A"/>
        <polygon points="162,9 174,9 168,26" fill="#8DCFCA"/>
        <polygon points="197,11 209,11 203,26" fill="#C9AEDE"/>
        <polygon points="232,9 244,9 238,25" fill="#F4A8C7"/>
        <polygon points="265,5 277,5 271,22" fill="#F5D47E"/>
      </svg>
      {/* Centered emoji */}
      <span
        style={{
          fontSize: "2.6rem",
          position: "relative",
          zIndex: 1,
          filter: "drop-shadow(0 2px 6px rgba(93,58,26,0.14))",
          lineHeight: 1,
        }}
      >
        🦕
      </span>
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const isInternal = project.link.startsWith("/");
  const hasFestaThumbnail = FESTA_THUMBNAILS.has(project.title);

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
      {hasFestaThumbnail && <FestaThumbnail />}

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
