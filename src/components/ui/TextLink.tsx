import type { ReactNode } from "react";
import Link from "next/link";

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`text-accent hover:text-accent-hover underline decoration-1 underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}
