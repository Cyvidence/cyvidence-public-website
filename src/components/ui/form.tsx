import * as React from "react";
import { cn } from "@/lib/utils";

// Input, Checkbox and Switch, matching the Figma components.

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helper?: string;
  error?: string;
};

export function Input({ className, label, helper, error, id, ...props }: InputProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-label-md text-foreground">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={!!error || undefined}
        className={cn(
          "h-10 w-full rounded-lg border border-input bg-background px-3 text-body-sm text-foreground shadow-xs transition-shadow placeholder:text-muted-foreground",
          "focus-visible:border-ring focus-visible:shadow-[0_0_0_3px_color-mix(in_srgb,var(--ring)_35%,transparent)]",
          "aria-invalid:border-destructive disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
          className,
        )}
        {...props}
      />
      {(error || helper) && (
        <p className={cn("text-caption", error ? "text-destructive" : "text-muted-foreground")}>{error ?? helper}</p>
      )}
    </div>
  );
}

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & { label?: string };

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={cn("inline-flex items-center gap-2 text-body-sm text-foreground has-disabled:opacity-50", className)}>
      <span className="relative inline-flex size-[18px] items-center justify-center">
        <input
          type="checkbox"
          className="peer absolute inset-0 appearance-none rounded-sm border-[1.5px] border-input bg-background shadow-xs checked:border-primary checked:bg-primary"
          {...props}
        />
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none relative size-3 text-primary-foreground opacity-0 peer-checked:opacity-100"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      {label}
    </label>
  );
}

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  label: string;
};

export function Switch({ checked, onCheckedChange, disabled, label }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        "relative inline-flex h-[26px] w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 disabled:opacity-50",
        checked ? "bg-primary" : "bg-input",
      )}
    >
      <span
        className={cn(
          "size-[22px] rounded-full bg-background shadow-sm transition-transform duration-200 ease-out",
          checked && "translate-x-[18px]",
        )}
      />
    </button>
  );
}
