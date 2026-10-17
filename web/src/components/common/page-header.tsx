import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

// Shared page heading. Optional children provide actions such as Sign out.
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <header className="tile-bg mb-8 flex flex-wrap items-center justify-between gap-6 rounded-2xl p-6 text-white sm:p-8">
      <div>
        <p className="text-sm font-medium text-butter">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-white/80">{description}</p>
      </div>
      {children}
    </header>
  );
}
