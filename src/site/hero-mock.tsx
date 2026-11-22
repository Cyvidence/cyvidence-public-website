import { Badge } from "@/components/ui/badge";

// Illustrative CISO portfolio view for the hero. Fictional company and data.

type Status = "ready" | "action" | "risk" | "new";

const statusBadge: Record<Status, { label: string; variant: "success" | "warning" | "destructive" | "outline" }> = {
  ready: { label: "Ready", variant: "success" },
  action: { label: "Needs action", variant: "warning" },
  risk: { label: "At risk", variant: "destructive" },
  new: { label: "Not assessed", variant: "outline" },
};

const products: { name: string; version: string; readiness: number; laws: string[]; status: Status }[] = [
  { name: "Field service app", version: "v2.5", readiness: 92, laws: ["CRA", "MR"], status: "ready" },
  { name: "Customer portal", version: "v4.1", readiness: 86, laws: ["CRA", "Data Act"], status: "ready" },
  { name: "Machine controller", version: "fw 3.2", readiness: 48, laws: ["CRA", "MR", "RED"], status: "risk" },
  { name: "Analytics platform", version: "v1.8", readiness: 67, laws: ["CRA", "AI Act"], status: "action" },
  { name: "Telematics gateway", version: "hw C", readiness: 0, laws: ["CRA", "RED"], status: "new" },
];

const stats = [
  { label: "Products", value: "24" },
  { label: "Ready", value: "15", tone: "text-success" },
  { label: "Needs action", value: "6", tone: "text-warning-strong" },
  { label: "At risk", value: "3", tone: "text-destructive" },
];

export function HeroMock() {
  return (
    <div
      className="overflow-hidden rounded-3xl border border-border bg-card text-left shadow-xl"
      role="img"
      aria-label="Illustration of the Cyvidence portfolio view: readiness and status for every product across EU regulations"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 text-caption text-muted-foreground">app.cyvidence.com</span>
      </div>

      <div className="p-5 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-label-sm text-muted-foreground">Northwind Machines</p>
            <h3 className="text-title-lg">Portfolio cybersecurity</h3>
          </div>
          <Badge variant="secondary">Next deadline: CRA full application</Badge>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-muted/60 p-4">
              <p className="text-caption text-muted-foreground">{s.label}</p>
              <p className={`text-heading-sm ${s.tone ?? ""}`}>{s.value}</p>
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-1">
          {products.map((p) => {
            const b = statusBadge[p.status];
            return (
              <li
                key={p.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-b border-border py-3 last:border-0 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_112px]"
              >
                <div className="min-w-0">
                  <p className="truncate text-label-md">{p.name}</p>
                  <p className="text-caption text-muted-foreground">{p.version}</p>
                </div>
                <div className="col-span-2 row-start-2 flex items-center gap-3 md:col-span-1 md:row-start-auto">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${p.readiness}%` }} />
                  </div>
                  <span className="w-9 text-right text-code-sm text-muted-foreground">
                    {p.status === "new" ? "--" : `${p.readiness}%`}
                  </span>
                </div>
                <div className="hidden flex-wrap gap-1 md:flex">
                  {p.laws.map((l) => (
                    <Badge key={l} variant="outline">
                      {l}
                    </Badge>
                  ))}
                </div>
                <div className="col-start-2 row-start-1 justify-self-end md:col-start-auto md:row-start-auto">
                  <Badge variant={b.variant}>{b.label}</Badge>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
