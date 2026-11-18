import type { Metadata } from "next";
import { JetBrains_Mono, Special_Elite } from "next/font/google";
import "./globals.css";

const display = Special_Elite({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl =
  process.env.SITE_URL ?? "https://huzaifa.eu";

const description =
  "Muhammad Huzaifa: Full Stack Software Engineer and MSc Computer Science & Engineering (Cyber Security) student at the University of Oulu, Finland. Payment gateway engineering at Datapulse Technologies, defence systems at Rapidev, open source on Apache AGE, and AI security research on the AVISE framework.";

const title = "Muhammad Huzaifa · Software Engineer · Oulu, Finland";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Muhammad Huzaifa · Dossier",
  authors: [{ name: "Muhammad Huzaifa", url: "https://github.com/huzaiifaaaa" }],
  creator: "Muhammad Huzaifa",
  publisher: "Muhammad Huzaifa",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  keywords: [
    "Muhammad Huzaifa",
    "huzaiifaaaa",
    "Software Engineer",
    "Full Stack Engineer",
    "Cyber Security",
    "Oulu Finland",
    "University of Oulu",
    "Payment Gateway",
    "PCI-DSS",
    "Java",
    "Spring Boot",
    "C#",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "Python",
    "Go",
    "PostgreSQL",
    "Azure",
    "Docker",
    "Kubernetes",
    "Apache AGE",
    "AI Security",
    "OWASP Top 10",
  ],
  openGraph: {
    type: "profile",
    locale: "en_GB",
    url: "/",
    siteName: "Muhammad Huzaifa · Dossier",
    title,
    description,
    firstName: "Muhammad",
    lastName: "Huzaifa",
    username: "huzaiifaaaa",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Huzaifa",
  alternateName: "huzaiifaaaa",
  jobTitle: "Software Engineer (Full Stack)",
  description,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oulu",
    addressCountry: "FI",
  },
  sameAs: [
    "https://github.com/huzaiifaaaa",
    "https://linkedin.com/in/huzaiifaaaa",
    "https://stackoverflow.com/users/16631465/huzaifa",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "Distributed Systems",
    "Microservices",
    "Payment Gateways",
    "PCI-DSS",
    "GDPR",
    "OWASP Top 10",
    "SIEM",
    "AI Security",
    "Java / Spring Boot",
    "C# / ASP.NET Core",
    "React",
    "TypeScript",
    "Python",
    "Go",
    "PostgreSQL",
    "Apache Kafka",
    "Microsoft Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
  ],
  knowsLanguage: "en",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "National University of Sciences & Technology",
    },
  ],
  affiliation: [{ "@type": "CollegeOrUniversity", name: "University of Oulu" }],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Full Stack Software Engineer",
      occupationLocation: { "@type": "Organization", name: "Datapulse Technologies" },
      skills:
        "Java, Spring Boot, C#, ASP.NET Core, React, Azure, Docker, Kubernetes, PCI-DSS",
    },
    {
      "@type": "Occupation",
      name: "Research Intern",
      occupationLocation: { "@type": "Organization", name: "University of Oulu" },
      skills: "AI security evaluation, Text-to-Image models, Python, Docker",
    },
    {
      "@type": "Occupation",
      name: "Trainee Engineer",
      occupationLocation: { "@type": "Organization", name: "Rapidev" },
      skills: "C#, ASP.NET Core, GraphQL, UART, Flutter",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "TryHackMe Junior Penetration Tester",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Huzaifa · Dossier",
  url: siteUrl,
  author: { "@type": "Person", name: "Muhammad Huzaifa" },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
