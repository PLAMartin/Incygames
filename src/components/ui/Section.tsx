import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function Section({
  children,
  className = "",
  tone = "primary",
  as: Tag = "section",
  ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "primary" | "secondary";
  as?: "section" | "div";
  ariaLabelledBy?: string;
}) {
  const background =
    tone === "secondary" ? "bg-background-secondary" : "bg-background-primary";

  return (
    <Tag
      className={`${background} py-16 sm:py-24 ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <Container>{children}</Container>
    </Tag>
  );
}
