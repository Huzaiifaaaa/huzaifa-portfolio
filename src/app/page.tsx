import { ArtifactRow } from "@/components/ArtifactRow";
import { ClassificationBanner } from "@/components/ClassificationBanner";
import { ContactForm } from "@/components/ContactForm";
import { Redacted } from "@/components/Redacted";
import { SiteNav } from "@/components/SiteNav";
import { Stamp } from "@/components/Stamp";
import { projects } from "@/lib/projects";

export default function Page() {
  return (
    <div className="page">
      <ClassificationBanner position="top" />

      <main className="shell">
        <SiteNav current="dossier" />
        <article
          className="dossier"
          aria-labelledby="dossier-title"
          aria-describedby="dossier-summary"
        >
          <header className="dossier__header">
            <div>
              <p className="dossier__id">
                DOSSIER 001 · SUBJECT: M. HUZAIFA
              </p>
              <p
                id="dossier-summary"
                className="label"
                style={{ marginTop: "0.35rem" }}
              >
                File released for public review · Rev. 2026.11
              </p>
            </div>
            <div className="dossier__page">
              <div>P. 01 OF 01</div>
              <div style={{ marginTop: "0.2rem" }}>CTRL № 2026-11-MH</div>
            </div>
          </header>

          <section className="section" aria-labelledby="sec-1">
            <div className="section__header">
              <span className="section__index">§1</span>
              <h2 id="sec-1" className="section__title">
                Subject
              </h2>
              <span className="section__meta">Identification</span>
            </div>

            <h1 id="dossier-title" className="subject__name">
              Muhammad Huzaifa
            </h1>
            <p className="subject__sub">
              Software Engineer · Cyber Security Student · Oulu,
              Finland
            </p>

            <dl className="attrs">
              <dt className="attrs__key">Practice</dt>
              <dd className="attrs__val">
                Software Engineering // Cyber Security
              </dd>

              <dt className="attrs__key">Career</dt>
              <dd className="attrs__val">
                Shipping production software since 2022
              </dd>

              <dt className="attrs__key">Prior</dt>
              <dd className="attrs__val">
                Datapulse Technologies · Full Stack Software Engineer, payment
                gateway (Java / Spring Boot)
              </dd>

              <dt className="attrs__key">Education</dt>
              <dd className="attrs__val">
                MSc Computer Science &amp; Engineering, University of Oulu
                (Cyber Security)
              </dd>

              <dt className="attrs__key">Frameworks</dt>
              <dd className="attrs__val">
                PCI-DSS · GDPR · OWASP Top 10
              </dd>

              <dt className="attrs__key">Stack</dt>
              <dd className="attrs__val">
                Java · Spring Boot · C# / NET · Python · Go ·
                TypeScript · React · PostgreSQL · Docker · Kubernetes ·
                SQL
              </dd>

              <dt className="attrs__key">Status</dt>
              <dd className="attrs__val">
                Operational. Open to engagements.
              </dd>
            </dl>

            <div className="stamp__row">
              <Stamp rotate={-6}>Declassified · Public Release</Stamp>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-2">
            <div className="section__header">
              <span className="section__index">§2</span>
              <h2 id="sec-2" className="section__title">
                Education
              </h2>
              <span className="section__meta">Academic Record</span>
            </div>

            <div className="record">
              <div className="record__entry">
                <h3 className="record__title">
                  MSc Computer Science &amp; Engineering
                </h3>
                <p className="record__org">
                  University of Oulu&nbsp;·&nbsp;09/2025 to 06/2027
                </p>
                <p className="record__body">
                  Specialisation in Cyber Security, Software and Data Security.
                  Coursework in distributed systems, advanced software quality and security,
                  cryptographic systems, security engineering, professional software engineering, data mining.
                </p>
                <p className="record__tags">
                  <span>Cyber security · Cryptography · Distributed systems</span>
                </p>
              </div>

              <div className="record__entry">
                <h3 className="record__title">BSc Computer Science</h3>
                <p className="record__org">
                  National University of Sciences &amp; Technology&nbsp;·&nbsp;08/2020
                  to 05/2024
                </p>
                <p className="record__body">
                  Thesis: OptiGuard, published at IEEE EMBC 2025. Coursework in
                  algorithms, databases, software engineering, information
                  security, distributed computing and deep learning.
                </p>
                <p className="record__tags">
                  <span>Algorithms · Information security · Deep learning</span>
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-3">
            <div className="section__header">
              <span className="section__index">§3</span>
              <h2 id="sec-3" className="section__title">
                Mission Record
              </h2>
              <span className="section__meta">Service History</span>
            </div>

            <div className="record record--s3">
              <div className="record__entry">
                <h3 className="record__title">Research Intern</h3>
                <p className="record__org">
                  <Redacted label="Reveal employer">University of Oulu</Redacted>
                  &nbsp;·&nbsp;Oulu, Finland&nbsp;·&nbsp;06/2026 to 08/2026
                </p>
                <p className="record__body">
                  Extended the AVISE security evaluation framework to
                  Text-to-Image generative models, designing a 16-case
                  adversarial test suite for style-escalation resistance. Built
                  OpenRouter-based connectors for reproducible evaluation
                  across 4+ model providers, and co-authored a paper on
                  security vulnerability methodology for generative AI,
                  submitted to NordSec 2026.
                </p>
                <p className="record__tags">
                  <span>Python · Docker · OpenRouter · AI security</span>
                </p>
              </div>

              <div className="record__entry">
                <h3 className="record__title">Full Stack Software Engineer</h3>
                <p className="record__org">
                  <Redacted label="Reveal employer">
                    Datapulse Technologies (FinTech)
                  </Redacted>
                  &nbsp;·&nbsp;Ireland, remote&nbsp;·&nbsp;02/2024 to 03/2026
                </p>
                <p className="record__body">
                  Architected and delivered a replacement for a legacy
                  multi-region whitelabel payment gateway, now serving 1000+
                  merchants. Integrated three global acquirers and Apple Pay /
                  Google Pay, consolidated separate payment systems into one
                  gateway, and owned CI/CD from GitHub through Jenkins and
                  Docker to Kubernetes for zero-downtime releases. Led PCI-DSS
                  readiness and stood in as lead for a four-person team.
                </p>
                <p className="record__tags">
                  <span>Java · Spring Boot · C# · ASP.NET Core · React · Azure · Docker · Kubernetes · PCI DSS</span>
                </p>
              </div>

              <div className="record__entry">
                <h3 className="record__title">Trainee Engineer</h3>
                <p className="record__org">
                  <Redacted label="Reveal employer">Rapidev (DefTech)</Redacted>
                  &nbsp;·&nbsp;Islamabad, part-time&nbsp;·&nbsp;07/2022 to 05/2024
                </p>
                <p className="record__body">
                  Integrated detectors, jammers and spoofers into the RapiGuard
                  anti-UAV system over GraphQL for real-time aerial threat
                  detection. Architected a Key Management Application for
                  encryption key lifecycles with UART-based key injection into
                  radio hardware, and built a Flutter situational-awareness app
                  with live geospatial tracking for field operators.
                </p>
                <p className="record__tags">
                  <span>C# · ASP.NET Core · GraphQL · UART · Flutter</span>
                </p>
              </div>

              <div className="record__entry">
                <h3 className="record__title">
                  Software Engineer Intern · Open Source
                </h3>
                <p className="record__org">
                  <Redacted label="Reveal employer">Bitnine</Redacted>
                  &nbsp;·&nbsp;San Francisco, remote, internship&nbsp;·&nbsp;03/2023 to 08/2023
                </p>
                <p className="record__body">
                  Contributed to Apache AGE, the graph extension for
                  PostgreSQL, as part of the core open-source contributor team.
                  Developed the AG Cloud website for accessing cloud-hosted
                  graph databases.
                </p>
                <p className="record__tags">
                  <span>C++ · Go · PostgreSQL · React · Node · Open source</span>
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-4">
            <div className="section__header">
              <span className="section__index">§4</span>
              <h2 id="sec-4" className="section__title">
                Field Artifacts
              </h2>
              <span className="section__meta">
                Recent 
              </span>
            </div>

            <span className="rule" aria-hidden="true" />

            <div className="artifacts">
              {projects.map((p, i) => (
                <ArtifactRow
                  key={p.name}
                  index={`4.${String(i + 1).padStart(2, "0")}`}
                  name={p.name}
                  description={p.description}
                  lang={p.lang}
                  updated={p.updated}
                  href={p.href}
                />
              ))}
            </div>

            <div className="stamp__row">
              <Stamp rotate={-10}>Review Complete · M.H.</Stamp>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-5">
            <div className="section__header">
              <span className="section__index">§5</span>
              <h2 id="sec-5" className="section__title">
                Research
              </h2>
              <span className="section__meta">Publications</span>
            </div>

            <div className="record record--s5">
              <div className="record__entry">
                <h3 className="record__title">
                  Security Evaluation of Text-to-Image Generative Models
                  (AVISE)
                </h3>
                <p className="record__org">
                  Submitted to NordSec 2026
                </p>
                <p className="record__body">
                  Co-authored with the University of Oulu research team.
                  Formalises security vulnerability methodology for generative
                  AI systems, backed by a 16-case adversarial test suite run
                  against Text-to-Image models from 4+ providers.
                </p>
                <p className="record__tags">
                  <span>AI security · Adversarial testing · Generative AI</span>
                </p>
              </div>

              <div className="record__entry">
                <h3 className="record__title">
                  OptiGuard: Generalized, Attention-Driven &amp; Explainable
                  Glaucoma Classification
                </h3>
                <p className="record__org">
                  IEEE EMBC 2025 · Copenhagen&nbsp;·&nbsp;
                  <a
                    className="dossier__link"
                    href="https://ieeexplore.ieee.org/document/11253669"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IEEE Xplore
                  </a>
                </p>
                <p className="record__body">
                  Explainable deep learning for early glaucoma diagnosis.
                  State-of-the-art results on the G-1020 and SMDG datasets, and
                  awarded 1st Best Project by industry judges. Co-authored with
                  S. S. U. Shah, H. K. K. Tareen and M. N. Bajwa.
                </p>
                <p className="record__tags">
                  <span>Deep learning · Explainable AI · Medical imaging</span>
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-6">
            <div className="section__header">
              <span className="section__index">§6</span>
              <h2 id="sec-6" className="section__title">
                Certifications
              </h2>
              <span className="section__meta">Training</span>
            </div>

            <div className="record record--s6">
              <div className="record__entry">
                <h3 className="record__title">Junior Penetration Tester</h3>
                <p className="record__org">TryHackMe&nbsp;·&nbsp;12/2025</p>
                <p className="record__body">
                  Hands-on exploitation and remediation of the OWASP Top 10:
                  SQL injection, XSS, IDOR, command injection, authentication
                  bypass, SSRF and file inclusion.
                </p>
                <p className="record__tags">
                  <span>OWASP Top 10 · SQLi · XSS · SSRF · LFI / RFI</span>
                </p>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="sec-7">
            <div className="section__header">
              <span className="section__index">§7</span>
              <h2 id="sec-7" className="section__title">
                Address &amp; Disposition
              </h2>
              <span className="section__meta">Channels</span>
            </div>

            <div className="contact">
              <div className="contact__line">
                <span className="attrs__key">Email</span>
                <span className="attrs__val">
                  <a href="mailto:mhuzaifa404@proton.me">
                    mhuzaifa404@proton.me
                  </a>
                </span>
              </div>
              <div className="contact__line">
                <span className="attrs__key">Repository</span>
                <span className="attrs__val">
                  <a
                    href="https://github.com/huzaiifaaaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/huzaiifaaaa
                  </a>
                </span>
              </div>
              <div className="contact__line">
                <span className="attrs__key">LinkedIn</span>
                <span className="attrs__val">
                  <a
                    href="https://linkedin.com/in/huzaiifaaaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/huzaiifaaaa
                  </a>
                </span>
              </div>
              <div className="contact__line">
                <span className="attrs__key">Q&amp;A</span>
                <span className="attrs__val">
                  <a
                    href="https://stackoverflow.com/users/16631465/huzaifa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    stackoverflow.com/users/16631465
                  </a>
                </span>
              </div>
              <div className="contact__line">
                <span className="attrs__key">Engagement</span>
                <span className="attrs__val">
                  Open to software engineering roles in Finland and the EU.
                </span>
              </div>
            </div>

            <ContactForm />

            <div className="colophon">
              <div>
                <div>{"// END OF DOSSIER //"}</div>
                <div style={{ marginTop: "0.3rem", color: "var(--ink-faint)" }}>
                  Authenticated &middot; M. Huzaifa
                </div>
              </div>
              <div className="colophon__right">
                <div>FILE CTRL № 2026-11-MH</div>
                <div style={{ marginTop: "0.3rem", color: "var(--ink-faint)" }}>
                  REV 2026.11 · STATIC EXPORT
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <ClassificationBanner position="bottom" />
    </div>
  );
}
