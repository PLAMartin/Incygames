import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render, screen } from "@testing-library/react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Button } from "@/components/ui/Button";

// Encodes the tech spec's CSS-leakage acceptance test directly: server-
// rendered external links must never contain generated CSS-in-JS text (the
// previous @mui/icons-material + Emotion setup leaked
// `.css-1l6e05h{-webkit-user-select:none;...}` into anchor content).
describe("external link rendering — no leaked CSS-in-JS", () => {
  it("ExternalLink's server-rendered HTML contains no leaked style text", () => {
    const html = renderToStaticMarkup(
      <ExternalLink href="https://example.com">Visit Daily View</ExternalLink>,
    );
    expect(html).not.toContain(".css-");
    expect(html).not.toContain("-webkit-user-select");
    expect(html).not.toContain("cubic-bezier");
    expect(html).not.toContain("<style");
    expect(html).toContain("Visit Daily View");
  });

  it("Button's external variant also renders with no leaked style text", () => {
    const html = renderToStaticMarkup(
      <Button href="https://example.com" external>
        Try Role CV
      </Button>,
    );
    expect(html).not.toContain(".css-");
    expect(html).not.toContain("<style");
  });

  it("gives the link an accessible name containing only the visible label, no CSS", () => {
    render(
      <ExternalLink href="https://example.com">Visit Daily View</ExternalLink>,
    );
    const link = screen.getByRole("link");
    expect(link.textContent).not.toContain(".css-");
    expect(link).toHaveAccessibleName(/^Visit Daily View/);
  });

  it("remains usable (a real href) without relying on the icon", () => {
    render(
      <ExternalLink href="https://example.com">Visit Daily View</ExternalLink>,
    );
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
});
