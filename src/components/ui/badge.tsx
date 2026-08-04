import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-surface-2)] text-[var(--color-fg)]",
        accent:
          "border-transparent bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
        success:
          "border-transparent bg-[var(--color-success-soft)] text-[var(--color-success)]",
        warn: "border-transparent bg-[var(--color-warn-soft)] text-[var(--color-warn)]",
        outline: "border-[var(--color-border)] text-[var(--color-muted)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
