import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Plus } from "lucide-react";
import "./styles/globals.css";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox, Input, Switch } from "@/components/ui/form";
import { Logo } from "@/site/logo";

// Living reference of the design system. Every swatch and component here is the real code.

const colorGroups: { title: string; tokens: string[] }[] = [
  { title: "Surfaces", tokens: ["background", "foreground", "card", "card-foreground", "muted", "muted-foreground", "border", "input", "ring"] },
  { title: "Brand and actions", tokens: ["primary", "primary-foreground", "primary-hover", "secondary", "secondary-foreground", "secondary-hover", "accent", "accent-foreground"] },
  { title: "Status", tokens: ["success", "success-subtle", "warning", "warning-strong", "warning-subtle", "info", "info-subtle", "destructive", "destructive-subtle", "destructive-hover"] },
  { title: "Charts", tokens: ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"] },
];

const textStyles = [
  "display-xl", "heading-xl", "heading-lg", "heading-md", "heading-sm", "title-lg", "title-md",
  "body-lg", "body-md", "body-sm", "label-md", "label-sm", "caption", "code-sm",
];

const variants = ["default", "secondary", "outline", "ghost", "destructive"] as const;
const sizes = ["sm", "default", "lg"] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-8 text-heading-sm">{title}</h2>
      {children}
    </section>
  );
}

function DesignPage() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [sw, setSw] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="container-page py-12">
      <header className="flex flex-wrap items-center gap-4 pb-12">
        <Logo />
        <Badge variant="outline">Design system v1</Badge>
        <div className="ml-auto flex items-center gap-3 text-label-md">
          Dark mode
          <Switch checked={dark} onCheckedChange={setDark} label="Dark mode" />
        </div>
      </header>

      <Section title="Color tokens">
        <div className="flex flex-col gap-8">
          {colorGroups.map((g) => (
            <div key={g.title}>
              <p className="mb-3 text-label-md text-muted-foreground">{g.title}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                {g.tokens.map((t) => (
                  <div key={t} className="flex flex-col gap-2">
                    <div className="h-14 rounded-xl border border-border" style={{ background: `var(--${t})` }} />
                    <code className="text-code-sm">--{t}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography (Inter, Geist Mono)">
        <div className="flex flex-col gap-4">
          {textStyles.map((s) => (
            <div key={s} className="grid items-baseline gap-4 md:grid-cols-[160px_1fr]">
              <code className="text-code-sm text-muted-foreground">text-{s}</code>
              <p className={`text-${s} truncate`}>Proof for every product version</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radius and elevation">
        <div className="flex flex-wrap gap-6">
          {["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "full"].map((r) => (
            <div key={r} className="flex flex-col items-center gap-2">
              <div className="size-16 border border-border bg-muted" style={{ borderRadius: r === "full" ? 9999 : `var(--radius-${r})` }} />
              <code className="text-code-sm">{r}</code>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          {["xs", "sm", "md", "lg", "xl"].map((s) => (
            <div key={s} className="flex size-28 items-end rounded-2xl bg-card p-3" style={{ boxShadow: `var(--shadow-${s})` }}>
              <code className="text-code-sm">shadow-{s}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Button">
        <div className="flex flex-col gap-4">
          {variants.map((v) => (
            <div key={v} className="flex flex-wrap items-center gap-3">
              <code className="w-28 text-code-sm text-muted-foreground">{v}</code>
              {sizes.map((s) => (
                <Button key={s} variant={v} size={s}>
                  Continue
                </Button>
              ))}
              <Button variant={v}>
                <Plus /> With icon
              </Button>
              <Button variant={v} disabled>
                Disabled
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-2">
          {(["default", "secondary", "outline", "success", "warning", "info", "destructive"] as const).map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </Section>

      <Section title="Form controls">
        <div className="grid max-w-3xl gap-6 md:grid-cols-2">
          <Input label="Email" placeholder="name@company.com" helper="We never share your email." />
          <Input label="Email" defaultValue="not-an-email" error="Enter a valid email address." />
          <Input label="Disabled" placeholder="name@company.com" disabled />
          <div className="flex flex-col gap-4 pt-7">
            <Checkbox label="Remember me" defaultChecked />
            <Checkbox label="Disabled" disabled />
            <div className="flex items-center gap-3 text-body-sm">
              <Switch checked={sw} onCheckedChange={setSw} label="Notifications" /> Notifications
            </div>
          </div>
        </div>
      </Section>

      <Section title="Alert">
        <div className="grid gap-4 md:grid-cols-2">
          <Alert variant="info" title="New regulation mapped">The Data Act now appears in your applicability check.</Alert>
          <Alert variant="success" title="Release approved">Version 2.4 passed the AI audit with no open gaps.</Alert>
          <Alert variant="warning" title="Evidence expiring">Two supplier declarations expire within 30 days.</Alert>
          <Alert variant="destructive" title="Upload failed">The file could not be verified. Try again.</Alert>
        </div>
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Evidence summary</CardTitle>
            <CardDescription>Last verified 2 minutes ago</CardDescription>
          </CardHeader>
          <CardContent>Keep a single clear purpose per card: stats, a list, a form or a chart.</CardContent>
          <CardFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Continue</Button>
          </CardFooter>
        </Card>
      </Section>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DesignPage />
  </StrictMode>,
);
