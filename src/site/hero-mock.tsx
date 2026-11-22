import { Badge } from "@/components/ui/badge";
import { categories } from "./content";

type Status = "approved" | "created" | "gap" | "open" | "missing" | "na";

const status: Record<number, Status> = {
  1: "approved", 2: "gap", 3: "approved", 4: "created", 5: "created", 6: "gap",
  7: "open", 8: "approved", 9: "missing", 10: "na", 11: "missing", 12: "created",
};

const badge: Record<Status, { label: string; variant: "success" | "secondary" | "warning" | "info" | "destructive" | "outline" }> = {
  approved: { label: "Approved", variant: "success" },
  created: { label: "In review", variant: "secondary" },
  gap: { label: "AI audit: 1 gap", variant: "warning" },
  open: { label: "2 open", variant: "info" },
  missing: { label: "Missing", variant: "destructive" },
  na: { label: "Not applicable", variant: "outline" },
};

const products = [
  { name: "Field service app", meta: "v2.5", dot: "bg-warning", active: true },
  { name: "Customer portal", meta: "v4.1", dot: "bg-success" },
  { name: "Analytics platform", meta: "v1.8", dot: "bg-warning" },
  { name: "Machine controller", meta: "fw 3.2", dot: "bg-destructive" },
  { name: "Mobile app", meta: "v2.0", dot: "bg-success" },
];

// Illustrative product UI for the hero. Not a screenshot of real customer data.
export function HeroMock() {
  const approved = Object.values(status).filter((s) => s === "approved").length;
  return (
    <div
      className="overflow-hidden rounded-3xl border border-border bg-card text-left shadow-xl"
      role="img"
      aria-label="Illustration of the Cyvidence product: a portfolio of products with evidence status across twelve documentation categories"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 text-caption text-muted-foreground">app.cyvidence.com</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[232px_minmax(0,1fr)]">
        <aside className="hidden border-r border-border bg-muted/40 p-4 md:block">
          <p className="text-label-sm text-muted-foreground">Northwind Machines</p>
          <p className="mb-4 text-title-md">Product portfolio</p>
          <ul className="flex flex-col gap-1">
            {products.map((p) => (
              <li
                key={p.name}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-body-sm ${p.active ? "bg-card shadow-sm" : "text-muted-foreground"}`}
              >
                <span className={`size-2 rounded-full ${p.dot}`} />
                <span className="flex-1 truncate">{p.name}</span>
                <span className="text-caption text-muted-foreground">{p.meta}</span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="min-w-0 p-5 md:p-6">
          <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-title-lg">Field service app</h3>
            <Badge variant="outline">v2.5</Badge>
            <Badge variant="secondary">CRA</Badge>
            <Badge variant="secondary">Machinery Regulation</Badge>
            <span className="w-full text-body-sm text-muted-foreground sm:ml-auto sm:w-auto">
              {approved} of 12 categories approved
            </span>
          </div>
          <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: `${(approved / 12) * 100}%` }} />
          </div>
          <ul className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {categories.map((c) => {
              const s = badge[status[c.id]];
              return (
                <li key={c.id} className="flex items-center gap-3 border-b border-border py-2.5 last:border-0 sm:[&:nth-last-child(2)]:border-0">
                  <span className="w-5 text-code-sm text-muted-foreground">{String(c.id).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1 truncate text-body-sm">{c.name}</span>
                  <Badge variant={s.variant}>{s.label}</Badge>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
