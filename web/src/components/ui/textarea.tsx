import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div>
      <textarea className={cn("w-full rounded-lg border bg-paper px-3 py-2.5 text-sm text-ink outline-none placeholder:text-muted/60 focus:border-cobalt focus:ring-2 focus:ring-cobalt/20", error ? "border-tomato" : "border-line", className)} {...props} />
      {error && <p className="mt-1 text-xs text-tomato">{error}</p>}
    </div>
  );
}
