import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form";
import { LogoMark } from "./logo";

// Pre-launch access gate. This is a soft gate for a static site: it keeps casual visitors
// and search engines out, but it is not security (the bundle is still public).
// Only the SHA-256 hash of the password is stored here. Remove <Gate> at launch.
const PASSWORD_SHA256 = "dd69ad24b3143a4db92f02fce684ec68acc37233a8604a70976fbd6de4726c60";
const STORAGE_KEY = "cyv-preview-access";

async function sha256(text: string) {
  const bytes = new TextEncoder().encode(text.normalize("NFC"));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

function readAccess() {
  try {
    return localStorage.getItem(STORAGE_KEY) === PASSWORD_SHA256;
  } catch {
    return false;
  }
}

export function Gate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(readAccess);
  const [value, setValue] = useState("");
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);

  if (ok) return <>{children}</>;

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!value.trim()) {
      setError("Enter the password.");
      return;
    }
    setBusy(true);
    const hash = await sha256(value.trim().toLowerCase());
    setBusy(false);
    if (hash === PASSWORD_SHA256) {
      try {
        localStorage.setItem(STORAGE_KEY, hash);
      } catch {
        /* storage unavailable: access lasts for this visit only */
      }
      setOk(true);
    } else {
      setError("That password is not right. Try again.");
    }
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-muted/50 px-6">
      <form
        onSubmit={submit}
        className="flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-border bg-card p-8 shadow-xl"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <LogoMark className="size-10" />
          <div className="flex flex-col gap-1">
            <h1 className="text-title-lg">Cyvidence preview</h1>
            <p className="text-body-sm text-muted-foreground">This site is not public yet. Enter the password to continue.</p>
          </div>
        </div>
        <Input
          type="password"
          label="Password"
          autoComplete="current-password"
          autoFocus
          value={value}
          error={error}
          onChange={(e) => {
            setValue(e.target.value);
            setError(undefined);
          }}
        />
        <Button type="submit" disabled={busy} className="w-full">
          <Lock />
          Enter
          <ArrowRight />
        </Button>
      </form>
    </main>
  );
}
