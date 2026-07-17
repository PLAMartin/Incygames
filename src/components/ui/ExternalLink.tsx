import type { ReactNode } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      rel="noopener"
      className={`text-accent hover:text-accent-hover inline-flex items-center gap-1 underline decoration-1 underline-offset-2 ${className}`}
    >
      {children}
      <OpenInNewIcon fontSize="inherit" aria-hidden="true" />
      <span className="sr-only">(opens in the same tab, external site)</span>
    </a>
  );
}
