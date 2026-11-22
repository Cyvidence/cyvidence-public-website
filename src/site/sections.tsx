import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Eye,
  FileCheck2,
  Gauge,
  Handshake,
  LayoutTemplate,
  ListChecks,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CRA_FULL_APPLICATION, categories, mailto, regulations, timeline, toolGroups } from "./content";
import { HeroMock } from "./hero-mock";
import { Logo, LogoMark } from "./logo";

const CONTACT_SUBJECT = "Introduction to Cyvidence";

function SectionHeader({
  eyebrow,
  title,
  lead,
  center,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 flex max-w-2xl flex-col gap-4 md:mb-16", center && "mx-auto items-center text-center", className)}>
      <p className="text-label-md text-muted-foreground">{eyebrow}</p>
      <h2 className="text-heading-md md:text-heading-lg text-balance">{title}</h2>
      {lead && <p className="text-body-lg text-muted-foreground text-pretty">{lead}</p>}
    </div>
  );
}

function daysUntil(date: string) {
  const ms = new Date(date + "T00:00:00").getTime() - Date.now();
  return Math.ceil(ms / 86_400_000);
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
            ["Platform", "#platform"],
            ["Integrations", "#integrations"],
            ["Regulations", "#regulations"],
            ["Partners", "#partners"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-label-md text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink href={mailto(CONTACT_SUBJECT)} size="sm" className="ml-auto">
          Talk to us
        </ButtonLink>
      </div>
    </header>
  );
}

export function Hero() {
  const days = daysUntil(CRA_FULL_APPLICATION);
  return (
    <section id="top" className="overflow-hidden pt-20 pb-24 md:pt-28">
      <div className="container-page flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-6 h-7 gap-1.5 px-3 text-label-sm">
          <CalendarClock aria-hidden />
          {days > 0 ? `The Cyber Resilience Act applies in full in ${days} days` : "The Cyber Resilience Act now applies in full"}
        </Badge>
        <h1 className="max-w-4xl text-heading-md sm:text-heading-lg lg:text-display-xl text-balance">
          Know where every product stands on cybersecurity
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground text-pretty">
          Cyvidence gives CISOs and CIOs one place to understand, assess, act on and document the cybersecurity of
          their whole product portfolio. Ready for EU regulation, and for real attacks.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={mailto(CONTACT_SUBJECT)} size="lg">
            Talk to us
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="#platform" size="lg" variant="outline">
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

const pillars = [
  {
    icon: Eye,
    verb: "Understand",
    title: "Know what you have, and what applies",
    text: "Every product, version and supplier in one portfolio, with the EU regulations that apply to each one, today and as the rules change.",
  },
  {
    icon: Gauge,
    verb: "Assess",
    title: "See where you stand",
    text: "Readiness for every product and regulation at a glance. AI finds the gaps before an auditor, a customer or an attacker does.",
  },
  {
    icon: ListChecks,
    verb: "Act",
    title: "Fix what matters first",
    text: "Prioritise by risk and deadline, give every gap an owner, and bring in independent experts when a product needs a second opinion.",
  },
  {
    icon: FileCheck2,
    verb: "Document",
    title: "Prove it, any time",
    text: "Versioned evidence for every release, ready for regulators, customers, the board and, if it comes to it, liability claims.",
  },
];

export function Platform() {
  return (
    <section id="platform" className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="The platform"
          title="Portfolio cybersecurity, from blind spots to proof"
          lead="One system for the questions security leaders get every week: what do we have, how exposed are we, what do we fix first, and can we prove it."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div key={p.verb} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                  <p.icon className="size-5" aria-hidden />
                </span>
                <span className="text-code-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-label-md text-muted-foreground">{p.verb}</p>
                <h3 className="text-title-lg text-balance">{p.title}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section id="problem" className="bg-muted/50 py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          className="mb-0 md:mb-0"
          eyebrow="Why it matters"
          title="Today, a simple question takes weeks to answer"
          lead="Product security knowledge is spread across teams, tools and inboxes. When a regulator, a customer or the board asks for proof, every product turns into a manual project, and the answer is outdated by the time it is ready."
        />
        <figure className="rounded-3xl bg-primary px-8 py-12 text-primary-foreground shadow-lg md:px-12">
          <blockquote className="text-heading-sm md:text-heading-md text-balance">
            “Show me that our products are cybersecure, and how we know.”
          </blockquote>
          <figcaption className="mt-5 text-body-sm opacity-70">Your regulator, your largest customer or your board</figcaption>
        </figure>
      </div>
    </section>
  );
}

const outcomes = ["Portfolio dashboard", "Regulatory files per product", "Audit trail for every release", "Board-ready reporting"];

export function Integrations() {
  return (
    <section id="integrations" className="py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="Integrations"
          title="Developers keep their tools. You get the portfolio view."
          lead="Scan results, SBOMs, tickets and documents flow in from the tools your teams already use. Evidence is captured as they work, tied to the right product and release, and rolled up into one picture for security leadership."
        />
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_auto_minmax(0,0.8fr)_auto_minmax(0,1fr)]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {toolGroups.map((g) => (
              <div key={g.group} className="rounded-xl border border-border bg-card p-4 shadow-xs">
                <p className="text-label-md">{g.group}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.tools.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ArrowRight className="mx-auto size-5 rotate-90 text-muted-foreground lg:rotate-0" aria-hidden />

          <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-xl">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-primary-foreground">
              <LogoMark className="size-8 [&_rect]:fill-primary [&_path]:stroke-primary-foreground [&_circle]:fill-primary-foreground" />
            </span>
            <p className="text-title-lg">Cyvidence</p>
            <p className="text-body-sm opacity-75">One versioned record for every product</p>
          </div>

          <ArrowRight className="mx-auto size-5 rotate-90 text-muted-foreground lg:rotate-0" aria-hidden />

          <ul className="flex flex-col gap-3">
            {outcomes.map((o) => (
              <li key={o} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xs">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success-subtle">
                  <Check className="size-3.5 text-success" aria-hidden />
                </span>
                <span className="text-label-md">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-caption text-muted-foreground">
          Tool names are examples of what teams use today. Tell us about your stack.
        </p>
      </div>
    </section>
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (iso: string) => {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

export function WhyNow() {
  return (
    <section id="why-now" className="dark bg-background py-24 text-foreground">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why now"
          title="The deadlines are set"
          lead="EU product laws now expect cybersecurity evidence for every product you sell, while AI makes attacks faster and cheaper. Under the Cyber Resilience Act alone, fines reach €15 million or 2.5% of global annual turnover."
        />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t) => {
            const now = daysUntil(t.date) <= 0;
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
                    {fmtDate(t.date)}
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

const simplifiers = [
  {
    icon: LayoutTemplate,
    title: "Standard templates",
    text: "Every evidence area comes with a template built on the regulations and harmonised standards behind it, such as IEC 62443. Teams fill in what is specific to their product, not a blank page.",
  },
  {
    icon: Workflow,
    title: "Integrations",
    text: "Scan results, SBOMs, tickets and test reports flow in from the tools your developers already use, and land in the right area for the right release.",
  },
  {
    icon: Sparkles,
    title: "Security AI",
    text: "AI drafts content, cross-checks it against every regulation that applies and flags gaps. Your people review and approve every decision.",
  },
];

export function Regulations() {
  const [hover, setHover] = useState<{ row?: string; col?: number }>({});
  const colCount = (id: number) => regulations.filter((r) => r.uses.includes(id as never)).length;
  return (
    <section id="regulations" className="bg-muted/50 py-24">
      <div className="container-page">
        <SectionHeader
          eyebrow="One record, every regulation"
          title="Eight regulations. Twelve evidence areas. One workflow."
          lead="Each law draws on a different mix of the same evidence. Mapping it by hand, product by product and release by release, is a full-time job. Cyvidence covers every area and keeps it all in sync."
        />

        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-lg" onMouseLeave={() => setHover({})}>
          <table className="w-full min-w-[800px] border-collapse md:min-w-[920px] text-left">
            <caption className="sr-only">Evidence areas each EU regulation draws on</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 bg-card p-4 align-bottom text-label-sm text-muted-foreground">
                  <span className="md:hidden">Law</span>
                  <span className="hidden md:inline">Regulation</span>
                </th>
                {categories.map((c) => (
                  <th
                    key={c.id}
                    scope="col"
                    title={c.name}
                    onMouseEnter={() => setHover({ col: c.id })}
                    className={cn("h-48 w-14 px-1 pb-4 align-bottom transition-colors", hover.col === c.id && "bg-accent")}
                  >
                    <div className="mx-auto flex flex-col items-center gap-2">
                      <span className="text-label-sm whitespace-nowrap [writing-mode:vertical-rl] rotate-180">{c.short}</span>
                      <span className="text-code-sm text-muted-foreground">{String(c.id).padStart(2, "0")}</span>
                    </div>
                  </th>
                ))}
                <th scope="col" className="px-4 pb-4 align-bottom text-right text-label-sm text-muted-foreground">
                  Areas
                </th>
              </tr>
            </thead>
            <tbody>
              {regulations.map((r) => (
                <tr key={r.id} className="border-t border-border" onMouseEnter={() => setHover({ row: r.id })}>
                  <th
                    scope="row"
                    title={r.question}
                    className={cn(
                      "sticky left-0 z-10 bg-card px-4 py-3 text-label-md whitespace-nowrap transition-colors",
                      hover.row === r.id && "bg-accent",
                    )}
                  >
                    <span className="md:hidden">{r.short}</span>
                    <span className="hidden md:inline">{r.name}</span>
                  </th>
                  {categories.map((c) => {
                    const on = r.uses.includes(c.id);
                    const lit = hover.row === r.id || hover.col === c.id;
                    return (
                      <td
                        key={c.id}
                        onMouseEnter={() => setHover({ row: r.id, col: c.id })}
                        className={cn("h-12 text-center transition-colors", lit && "bg-accent")}
                      >
                        <span
                          aria-label={on ? "Required" : "Not required"}
                          className={cn(
                            "inline-block rounded-full transition-transform",
                            on ? "size-3 bg-primary" : "size-1.5 bg-border",
                            on && lit && "scale-125",
                          )}
                        />
                      </td>
                    );
                  })}
                  <td className={cn("px-4 text-right text-code-sm text-muted-foreground", hover.row === r.id && "bg-accent")}>
                    {r.uses.length}
                  </td>
                </tr>
              ))}
              <tr className="border-t border-border">
                <th scope="row" className="sticky left-0 z-10 bg-card px-4 py-3 text-label-sm text-muted-foreground">
                  <span className="md:hidden">Used by</span>
                  <span className="hidden md:inline">Regulations using it</span>
                </th>
                {categories.map((c) => (
                  <td key={c.id} className={cn("text-center text-code-sm text-muted-foreground", hover.col === c.id && "bg-accent")}>
                    {colCount(c.id)}
                  </td>
                ))}
                <td />
              </tr>
              <tr className="border-t border-border bg-success-subtle">
                <th scope="row" className="sticky left-0 z-10 bg-success-subtle px-4 py-4 text-label-md whitespace-nowrap">
                  <span className="md:hidden">Covered</span>
                  <span className="hidden md:inline">Covered by Cyvidence</span>
                </th>
                {categories.map((c) => (
                  <td key={c.id} className="text-center">
                    <span className="inline-flex size-6 items-center justify-center rounded-full bg-success text-success-foreground">
                      <Check className="size-3.5" aria-label="Covered" />
                    </span>
                  </td>
                ))}
                <td className="px-4 text-right text-label-md text-success">All 12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-caption text-muted-foreground">
          <span className="md:hidden">Swipe to see all twelve areas. </span><span className="hidden md:inline">Hover a regulation or an evidence area to trace it. </span> Scope depends on the product; Cyvidence shows only what applies to
          yours.
        </p>

        <div className="mt-16 flex max-w-2xl flex-col gap-3">
          <h3 className="text-heading-sm">Complex underneath, simple to use</h3>
          <p className="text-body-md text-muted-foreground">
            Your teams never work in a matrix. They work through one guided flow per product, and three things do the heavy
            lifting.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {simplifiers.map((x) => (
            <div key={x.title} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-10 items-center justify-center rounded-xl bg-secondary">
                <x.icon className="size-5" aria-hidden />
              </span>
              <h4 className="text-title-lg">{x.title}</h4>
              <p className="text-body-sm text-muted-foreground">{x.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section id="partners" className="py-24">
      <div className="container-page">
        <SectionHeader eyebrow="Who it is for" title="For manufacturers and their security partners" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <Building2 className="size-6" aria-hidden />
            <h3 className="text-heading-sm">Manufacturers</h3>
            <p className="text-body-md text-muted-foreground">
              For security and technology leaders responsible for a portfolio of connected products, from mid-sized
              machine builders to large OEMs. Your teams do the work in tools they know; you see the whole picture.
            </p>
            <ButtonLink href={mailto(CONTACT_SUBJECT)} variant="outline" className="mt-auto self-start">
              Talk to us
            </ButtonLink>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <Handshake className="size-6" aria-hidden />
            <h3 className="text-heading-sm">Cybersecurity partners</h3>
            <p className="text-body-md text-muted-foreground">
              Consultancies and auditors run assessments, reviews and sign-offs for their clients in one place. Every
              comment is tied to the product version it covers, and clients see the result in their own portfolio.
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
    <section className="pb-24">
      <div className="container-page">
        <div className="flex flex-col items-center rounded-4xl bg-primary px-6 py-16 text-center text-primary-foreground md:py-24">
          <h2 className="max-w-3xl text-heading-md md:text-heading-lg text-balance">
            Be ready when someone asks for proof
          </h2>
          <p className="mt-5 max-w-xl text-body-lg opacity-75 text-pretty">
            See the cybersecurity of your whole product portfolio in one place, and answer regulators, customers and
            the board with confidence.
          </p>
          <ButtonLink
            href={mailto(CONTACT_SUBJECT)}
            size="lg"
            className="mt-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Talk to us
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
            Cyvidence helps manufacturers understand, improve and prove the cybersecurity of their products. It does not
            replace formal conformity assessment where the law requires one.
          </p>
        </div>
        <p className="text-caption text-muted-foreground">© {new Date().getFullYear()} Cyvidence</p>
      </div>
    </footer>
  );
}
