import type { SVGProps } from "react";

// Plain inline SVGs with no injected <style> element, unlike @mui/icons-material
// (Emotion-styled SvgIcon), which leaked generated CSS text into rendered link
// content under this app's Next.js App Router SSR setup. See spec section 12.
type IconProps = SVGProps<SVGSVGElement>;

function createIcon(path: React.ReactNode) {
  return function Icon({ className = "", ...rest }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className={className}
        {...rest}
      >
        {path}
      </svg>
    );
  };
}

export const OpenInNewIcon = createIcon(
  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5z" />,
);

export const MenuIcon = createIcon(
  <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />,
);

export const CloseIcon = createIcon(
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />,
);

export const CheckCircleIcon = createIcon(
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />,
);

export const ScienceIcon = createIcon(
  <path d="M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z" />,
);

export const HourglassTopIcon = createIcon(
  <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z" />,
);

export const ConstructionIcon = createIcon(
  <path d="M22.7 19 13.6 9.9c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.8 10.1 2.8 12.1c1.9 1.9 4.6 2.4 7.4 1.5l9.1 9.1c.4.4 1 .4 1.4 0l3.2-3.2c.4-.4.4-1 0-1.4z" />,
);

export const PauseCircleIcon = createIcon(
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 13H9V9h2zm4 0h-2V9h2z" />,
);

export const InventoryIcon = createIcon(
  <path d="M20 2H4v2h16zm1 4H3v16h18zm-9 9H6v-2h6z" />,
);

export const ErrorOutlineIcon = createIcon(
  <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />,
);
