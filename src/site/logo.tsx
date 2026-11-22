import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("size-6", className)} aria-hidden>
      <rect width="24" height="24" rx="7" className="fill-foreground" />
      <path
        d="M15.8 8.4a5 5 0 1 0 0 7.2"
        fill="none"
        className="stroke-background"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="15.9" cy="12" r="1.5" className="fill-background" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-title-md text-foreground", className)}>
      <LogoMark />
      Cyvidence
    </span>
  );
}
