export type Project = {
  name: string;
  description: string;
  lang: string;
  updated: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "AVISE",
    description:
      "AI Vulnerability Identification & Security Evaluation framework (University of Oulu). Extended it to Text-to-Image models with a 16-case adversarial suite and OpenRouter connectors across 4+ providers.",
    lang: "Python",
    updated: "2026.06",
    href: "https://github.com/ouspg/AVISE",
  },
  {
    name: "Nafalytics",
    description:
      "Stock portfolio tracking platform for the Pakistani market, built solo in 3 months: real-time P/L, FIFO trade matching, watchlists, and notifications for 300 active users.",
    lang: "Java",
    updated: "2026.05",
    href: "https://nafalytics.com",
  },
  {
    name: "OptiGuard",
    description:
      "Attention-driven, explainable glaucoma classification. State-of-the-art on G-1020 and SMDG; published at IEEE EMBC 2025.",
    lang: "Python",
    updated: "2026.04",
    href: "https://github.com/huzaiifaaaa/OptiGuard",
  },
  {
    name: "ProBot API",
    description:
      "REST API and client for managing access to LLM models, with JWT auth, role-based users, and Docker / nginx deployment.",
    lang: "Python",
    updated: "2026.04",
    href: "https://github.com/huzaiifaaaa/programmable-web-project-d4",
  },
  {
    name: "Diabetic-Retinopathy",
    description:
      "Deep learning classifier for diabetic retinopathy grading from retinal fundus images.",
    lang: "Python",
    updated: "2023.05",
    href: "https://github.com/huzaiifaaaa/Diabetic-Retinopathy",
  },
  {
    name: "PONG-MASM615",
    description:
      "Graphical two-player Pong written in x86 assembly (MASM 6.15).",
    lang: "Assembly",
    updated: "2021.12",
    href: "https://github.com/huzaiifaaaa/PONG-MASM615",
  },
];
