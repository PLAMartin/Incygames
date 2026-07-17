import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ButtonVariant = "primary" | "secondary" | "text" | "external";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-transparent text-accent border border-accent hover:bg-background-secondary",
  text: "bg-transparent text-accent border border-transparent hover:underline px-0",
  external:
    "bg-transparent text-accent border border-accent hover:bg-background-secondary",
};

const BASE_CLASSES =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  loading?: boolean;
}

interface ButtonAsButton
  extends
    CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", loading } = props;
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} className={classes} rel="noopener">
          {children}
          <OpenInNewIcon fontSize="small" aria-hidden="true" />
          <span className="sr-only">(opens external site)</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, ...rest } = props as ButtonAsButton;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...rest}
    >
      {loading ? <span aria-hidden="true">…</span> : null}
      {children}
    </button>
  );
}
