import type { TableHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <div className="overflow-x-auto rounded-xl border border-line bg-paper"><table className={cn("w-full text-left text-sm [&_th]:px-5 [&_th]:py-4 [&_th]:font-semibold [&_td]:px-5 [&_td]:py-4 [&_th]:text-cobalt-deep [&_thead]:bg-cobalt-soft [&_tbody_tr]:border-t [&_tbody_tr]:border-line", className)} {...props} /></div>;
}
