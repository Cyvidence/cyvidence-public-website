import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

// Matches the Figma "Alert": tinted subtle background, colored icon, neutral text.
const alertVariants = cva("flex gap-3 rounded-xl p-4", {
  variants: {
    variant: {
      info: "bg-info-subtle [&>svg]:text-info",
      success: "bg-success-subtle [&>svg]:text-success",
      warning: "bg-warning-subtle [&>svg]:text-warning-strong",
      destructive: "bg-destructive-subtle [&>svg]:text-destructive",
    },
  },
  defaultVariants: { variant: "info" },
});

const icons = { info: Info, success: CircleCheck, warning: TriangleAlert, destructive: CircleX };

type AlertProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> &
  VariantProps<typeof alertVariants> & { title: React.ReactNode };

export function Alert({ className, variant, title, children, ...props }: AlertProps) {
  const Icon = icons[variant ?? "info"];
  return (
    <div role="status" className={cn(alertVariants({ variant }), className)} {...props}>
      <Icon className="mt-px size-5 shrink-0" aria-hidden />
      <div className="flex flex-col gap-1">
        <p className="text-label-md text-foreground">{title}</p>
        {children && <div className="text-body-sm text-muted-foreground">{children}</div>}
      </div>
    </div>
  );
}
