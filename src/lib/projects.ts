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
      "AI Vulnerability Identification & Security Evaluation framework. Extended it to Text-to-Image models with a 16-case adversarial suite and OpenRouter connectors across 4+ providers.",
    lang: "Python",
    updated: "2026.08",
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
    name: "PBT Payment Gateway",
    description:
      "Multi-region whitelabel payment gateway rebuilt from legacy infrastructure, serving 1000+ merchants. Acquirer and Apple Pay / Google Pay integrations, Spring Boot microservices, PCI-DSS readiness.",
    lang: "Java",
    updated: "2026.03",
    href: "https://pbtgateway.com/",
  },
  {
    name: "RapiGuard",
    description:
      "Anti-UAV defence system. Integrated detectors, jammers and spoofers over GraphQL for real-time aerial threat detection, plus REST APIs for third-party integration.",
    lang: "C#",
    updated: "2024.05",
    href: "https://rapidev.ae",
  },
];
