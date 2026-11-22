import { Boxes, Cpu, FileCheck2, GitMerge, MonitorSmartphone, Router, ScanSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Small illustrative product vignettes for the "Who it is for" section. Fictional data.

function Stage({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-4xl bg-muted/70 p-4 sm:p-10",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:18px_18px] opacity-70" />
      <div className="relative w-full max-w-md">{children}</div>
    </div>
  );
}

const machines = [
  { icon: Cpu, name: "Machine controller", meta: "Firmware 3.2", laws: ["CRA", "MR"], badge: { label: "Needs action", variant: "warning" as const } },
  { icon: Router, name: "Telematics gateway", meta: "Hardware rev C", laws: ["CRA", "RED"], badge: { label: "Ready", variant: "success" as const } },
  { icon: MonitorSmartphone, name: "Operator HMI", meta: "App 5.0", laws: ["CRA", "MR", "AI Act"], badge: { label: "In review", variant: "secondary" as const } },
];

export function ManufacturerVisual() {
  return (
    <Stage>
      <div className="flex flex-col gap-3">
        {machines.map((m, i) => (
          <div
            key={m.name}
            className={cn(
              "flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-md",
              i === 1 && "sm:translate-x-6",
              i === 2 && "sm:translate-x-12",
            )}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <m.icon className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-label-md">{m.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-1">
                <span className="mr-1 text-caption text-muted-foreground">{m.meta}</span>
                {m.laws.map((l) => (
                  <Badge key={l} variant="outline">
                    {l}
                  </Badge>
                ))}
              </div>
            </div>
            <Badge variant={m.badge.variant}>{m.badge.label}</Badge>
          </div>
        ))}
      </div>
      <div className="absolute -top-5 right-0 rounded-full bg-primary px-3 py-1.5 text-label-sm text-primary-foreground shadow-lg sm:-right-4">
        Machinery Regulation · 20 Jan 2027
      </div>
    </Stage>
  );
}

const steps = [
  { icon: GitMerge, title: "Code merged to main", detail: "GitHub" },
  { icon: ScanSearch, title: "Dependency scan, 2 findings triaged", detail: "Aikido" },
  { icon: Boxes, title: "SBOM updated", detail: "CycloneDX" },
  { icon: FileCheck2, title: "Evidence filed for release 2.5", detail: "Cyvidence" },
];

export function SoftwareVisual() {
  return (
    <Stage>
      <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-caption text-muted-foreground">Customer portal</p>
            <p className="text-title-md">Release 2.5</p>
          </div>
          <Badge variant="success">Ready to ship</Badge>
        </div>
        <ol className="relative flex flex-col gap-4 before:absolute before:top-3 before:bottom-3 before:left-[15px] before:w-px before:bg-border">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex items-center gap-3">
              <span
                className={cn(
                  "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card",
                  i === steps.length - 1 && "border-primary bg-primary text-primary-foreground",
                )}
              >
                <s.icon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-label-md">{s.title}</p>
                <p className="text-caption text-muted-foreground">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Stage>
  );
}

const clients = [
  { name: "Northwind Machines", products: 24, status: { label: "Review in progress", variant: "info" as const } },
  { name: "Aalto Robotics", products: 9, status: { label: "Signed off", variant: "success" as const } },
  { name: "Baltic Marine Systems", products: 14, status: { label: "Scan scheduled", variant: "secondary" as const } },
];

export function PartnerVisual() {
  return (
    <Stage>
      <div className="rounded-3xl border border-border bg-card p-5 shadow-lg">
        <p className="mb-3 text-label-sm text-muted-foreground">Your clients</p>
        <ul className="flex flex-col">
          {clients.map((c) => (
            <li key={c.name} className="flex items-center gap-3 border-b border-border py-3 last:border-0">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-label-sm">
                {c.name
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-label-md">{c.name}</p>
                <p className="text-caption text-muted-foreground">{c.products} products</p>
              </div>
              <Badge variant={c.status.variant}>{c.status.label}</Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-[-12px] ml-6 rounded-2xl border border-border bg-card p-4 shadow-xl sm:ml-16 sm:-mr-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            AK
          </span>
          <span className="text-label-sm">Assessor</span>
          <span className="text-caption text-muted-foreground">on v2.4 · 2 min ago</span>
        </div>
        <p className="text-body-sm">Threat model reviewed. Two controls need test evidence before sign-off.</p>
      </div>
    </Stage>
  );
}
