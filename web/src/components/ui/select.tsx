import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
};

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <div>
      <select
        className={cn("w-full rounded-lg border bg-paper px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-cobalt focus:ring-2 focus:ring-cobalt/20", error ? "border-tomato" : "border-line", className)}
        aria-invalid={error ? true : undefined}
        {...props}
      >
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-tomato">{error}</p>}
    </div>
  );
}
