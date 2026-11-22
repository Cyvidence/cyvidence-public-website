import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Building2,
  FileCheck2,
  GitCommitVertical,
  Handshake,
  LayoutGrid,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { categories, mailto, regulations, sources, timeline } from "./content";
import { HeroMock } from "./hero-mock";
import { Logo } from "./logo";

const SCAN_SUBJECT = "Readiness scan";

function SectionHeader({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("mb-12 flex max-w-2xl flex-col gap-4 md:mb-16", center && "mx-auto items-center text-center")}>
      <p className="text-label-md text-muted-foreground">{eyebrow}</p>
      <h2 className="text-heading-md md:text-heading-lg text-balance">{title}</h2>
      {lead && <p className="text-body-lg text-muted-foreground text-pretty">{lead}</p>}
    </div>
  );
}

export function Nav() {
  return (
    <header className="material-glass sticky top-0 z-50 border-b border-border">
      <div className="container-page flex h-16 items-center gap-8">
        <a href="#top" aria-label="Cyvidence home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {[
            ["How it works", "#how-it-works"],
            ["Regulations", "#regulations"],
            ["Partners", "#partners"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-label-md text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink href={mailto(SCAN_SUBJECT)} size="sm" className="ml-auto">
          Request a readiness scan
        </ButtonLink>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="overflow-hidden pt-20 pb-24 md:pt-28">
      <div className="container-page flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-6 h-7 px-3 text-label-sm">
          Product cybersecurity for the EU market
        </Badge>
        <h1 className="max-w-4xl text-heading-md sm:text-heading-lg lg:text-display-xl text-balance">
          The system of record for product cybersecurity
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground text-pretty">
          Document, prove and independently verify the cybersecurity of every product, and every release, you
          place on the EU market.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={mailto(SCAN_SUBJECT)} size="lg">
            Request a readiness scan
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="#how-it-works" size="lg" variant="outline">
            See how it works
          </ButtonLink>
        </div>
        <div className="mt-16 w-full max-w-5xl md:mt-20">
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problem" className="bg-muted/50 py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Regulation is here, but the evidence is scattered"
          lead="Threat models sit in spreadsheets, test results in PDFs and vulnerability decisions in email. When someone asks for proof, every product becomes a manual project."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sources.map((s) => (
            <div key={s.team} className="rounded-xl border border-border bg-card p-5 shadow-xs">
              <p className="text-label-md">{s.team}</p>
              <p className="mt-1 text-body-sm text-muted-foreground">{s.where}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-6 text-muted-foreground">
          <ArrowDown className="size-5" aria-hidden />
        </div>
        <figure className="mx-auto max-w-3xl rounded-2xl bg-primary px-8 py-10 text-center text-primary-foreground shadow-lg">
          <blockquote className="text-heading-sm md:text-heading-md text-balance">
            “Show me that the product is cybersecure, and how you assessed it.”
          </blockquote>
          <figcaption className="mt-4 text-body-sm opacity-70">Your regulator, customer or board</figcaption>
        </figure>
      </div>
    </section>
  );
}

function applies(date: string) {
  return new Date(date + "T00:00:00") <= new Date();
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmt = { format: (d: Date) => `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}` };

export function WhyNow() {
  return (
    <section id="why-now" className="dark bg-background py-24 text-foreground">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why now"
          title="Hard deadlines, from 2025 to 2028"
          lead="EU product laws now ask for cybersecurity evidence per product, while AI makes attacks faster and cheaper. Every product you sell needs to be ready for both."
        />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => {
            const now = applies(t.date);
            return (
              <li
                key={t.date + t.law}
                className={cn(
                  "flex flex-col gap-3 rounded-2xl border p-5",
                  now ? "border-border bg-card" : "border-border/60 bg-transparent",
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <time dateTime={t.date} className="text-code-sm text-muted-foreground">
                    {fmt.format(new Date(t.date + "T00:00:00"))}
                  </time>
                  {now ? <Badge variant="success">Applies now</Badge> : <Badge variant="outline">Upcoming</Badge>}
                </div>
                <p className="text-title-md">{t.law}</p>
                <p className="text-body-sm text-muted-foreground">{t.what}</p>
              </li>
            );
          })}
          <li className="flex flex-col justify-center gap-2 rounded-2xl border border-dashed border-border/60 p-5">
            <p className="text-title-md">And it does not stop</p>
            <p className="text-body-sm text-muted-foreground">Harmonised standards and sector rules keep arriving.</p>
          </li>
        </ol>
        <p className="mt-6 text-caption text-muted-foreground">
          Key application dates for manufacturers. Scope depends on the product; always check the official texts.
        </p>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: LayoutGrid,
    title: "Map your portfolio",
    text: "List your products and versions, and see which regulations apply to each one, today and as the rules change.",
  },
  {
    icon: Sparkles,
    title: "Document with Security AI",
    text: "Twelve evidence categories, prefilled from your existing tools and AI suggestions. Your teams review and approve every entry.",
  },
  {
    icon: ShieldCheck,
    title: "Verify independently",
    text: "AI audits find gaps before anyone else does. Vetted cybersecurity experts review and sign off critical products and releases.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="How it works"
          title="From scattered files to verified evidence"
          lead="One place for the cybersecurity evidence of every product. Owned by security leadership, used by the teams who build the products."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span className="text-code-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="text-title-lg">{s.title}</h3>
              <p className="text-body-md text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Regulations() {
  const [active, setActive] = useState(regulations[0].id);
  const reg = regulations.find((r) => r.id === active)!;
  return (
    <section id="regulations" className="bg-muted/50 py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="One record, every regulation"
          title="Document once, reuse it everywhere"
          lead="Twelve evidence categories cover the whole product lifecycle. Each regulation draws on the same record, so nothing is written twice. Pick a regulation to see what it uses."
        />
        <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Regulations">
          {regulations.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={r.id === active}
              onClick={() => setActive(r.id)}
              className={cn(
                "h-9 rounded-full border px-4 text-label-md transition-colors duration-200",
                r.id === active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-accent",
              )}
            >
              {r.name}
            </button>
          ))}
        </div>
        <p className="mb-8 max-w-3xl text-body-md text-muted-foreground" aria-live="polite">
          <span className="text-foreground">{reg.name}:</span> {reg.question}
        </p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const on = reg.uses.includes(c.id);
            return (
              <li
                key={c.id}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-4 transition-all duration-200",
                  on ? "border-border bg-card shadow-sm" : "border-transparent bg-transparent opacity-40",
                )}
              >
                <span className="text-code-sm text-muted-foreground">{String(c.id).padStart(2, "0")}</span>
                <span className="flex-1 text-label-md">{c.name}</span>
                {on && <FileCheck2 className="size-4 shrink-0 text-foreground" aria-label="Used" />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const versions = [
  { v: "v2.5", when: "Today", cats: "02, 07", text: "SBOM and scans imported, two new vulnerabilities triaged", tags: ["Tool import"] },
  { v: "v2.4.1", when: "12 Sep", cats: "04, 06", text: "Token-expiry control added, AI review passed", tags: ["AI supported", "Team approved"] },
  { v: "v2.4", when: "28 Aug", cats: "11, 12", text: "Release assessed, CRA technical file updated", tags: ["Release assessed"] },
  { v: "v2.3.2", when: "2 Jun", cats: "03", text: "Threat model updated for the new public API", tags: ["Team approved"] },
];

const levels = [
  { icon: FileCheck2, title: "Documentation complete", text: "All applicable categories filled and approved by your team." },
  { icon: Bot, title: "AI audited", text: "Every category checked for gaps and inconsistencies." },
  { icon: UserCheck, title: "Expert audited", text: "Reviewed and signed off by an independent cybersecurity expert." },
];

export function VersionHistory() {
  return (
    <section id="evidence" className="py-24">
      <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Evidence that lasts"
            title="Every release, on the record"
            lead="Every change is versioned. Reconstruct what was known, decided and approved for any past release, whether a regulator, a customer or a liability claim asks."
          />
          <ul className="flex flex-col gap-5">
            {levels.map((l, i) => (
              <li key={l.title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <l.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-title-md">
                    <span className="mr-2 text-muted-foreground">Level {i + 1}</span>
                    {l.title}
                  </p>
                  <p className="text-body-sm text-muted-foreground">{l.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-caption text-muted-foreground">
            Assurance levels are not a certification. Formal conformity assessment stays with notified bodies where
            required.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-lg md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-title-md">Field service app</p>
            <Badge variant="outline">Version history</Badge>
          </div>
          <ol className="relative flex flex-col gap-6 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-border">
            {versions.map((v) => (
              <li key={v.v} className="relative flex gap-4">
                <span className="relative z-10 flex size-6 items-center justify-center rounded-full border border-border bg-card">
                  <GitCommitVertical className="size-3.5 text-muted-foreground" aria-hidden />
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-label-md">{v.v}</span>
                    <span className="text-caption text-muted-foreground">{v.when}</span>
                    <span className="text-code-sm text-muted-foreground">· {v.cats}</span>
                  </div>
                  <p className="mt-1 text-body-sm">{v.text}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {v.tags.map((t) => (
                      <Badge key={t} variant={t === "Team approved" ? "success" : "secondary"}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="bg-muted/50 py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Two ways to work with us"
          title="For manufacturers and their security partners"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <Building2 className="size-6" aria-hidden />
            <h3 className="text-heading-sm">Manufacturers</h3>
            <p className="text-body-md text-muted-foreground">
              Manage the cybersecurity evidence of your whole product portfolio, from mid-sized machine builders to large
              OEMs. Add AI audits and independent expert reviews when a product or release needs them.
            </p>
            <ButtonLink href={mailto(SCAN_SUBJECT)} variant="outline" className="mt-auto self-start">
              Request a readiness scan
            </ButtonLink>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <Handshake className="size-6" aria-hidden />
            <h3 className="text-heading-sm">Cybersecurity partners</h3>
            <p className="text-body-md text-muted-foreground">
              Run readiness scans, reviews and sign-offs for your clients in one place. Every comment is tied to the
              product version it covers, and your clients see the result in their own portfolio.
            </p>
            <ButtonLink href={mailto("Partnership")} variant="outline" className="mt-auto self-start">
              Become a partner
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-col items-center rounded-4xl bg-primary px-6 py-16 text-center text-primary-foreground md:py-24">
          <h2 className="max-w-3xl text-heading-md md:text-heading-lg text-balance">
            Which of your products are ready for the EU market?
          </h2>
          <p className="mt-5 max-w-xl text-body-lg opacity-75 text-pretty">
            Start with a readiness scan of your portfolio: a status for each product and the gaps in each evidence
            category.
          </p>
          <ButtonLink
            href={mailto(SCAN_SUBJECT)}
            size="lg"
            className="mt-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Request a readiness scan
            <ArrowRight />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-md text-caption text-muted-foreground">
            Cyvidence helps manufacturers build and verify product cybersecurity evidence. It does not replace formal
            conformity assessment where the law requires one.
          </p>
        </div>
        <p className="text-caption text-muted-foreground">© {new Date().getFullYear()} Cyvidence</p>
      </div>
    </footer>
  );
}
