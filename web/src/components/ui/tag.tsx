import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
type TagProps = { children: ReactNode; className?: string };
export function Tag({ children, className }: TagProps) {
  return <span className={cn("rounded-md bg-butter px-2 py-0.5 text-xs font-semibold text-ink", className)}>{children}</span>;
}
