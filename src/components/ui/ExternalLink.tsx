import type { ReactNode } from "react";
import { OpenInNewIcon } from "@/components/ui/icons";

export function ExternalLink({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      rel="noopener"
      onClick={onClick}
      className={`text-accent hover:text-accent-hover inline-flex items-center gap-1 underline decoration-1 underline-offset-2 ${className}`}
    >
      {children}
      <OpenInNewIcon />
      <span className="sr-only">(opens in the same tab, external site)</span>
    </a>
  );
}
