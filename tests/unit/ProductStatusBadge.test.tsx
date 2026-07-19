import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { PRODUCT_STAGE_LABELS } from "@/types";

describe("ProductStatusBadge", () => {
  it("renders the human-readable label for a stage", () => {
    render(<ProductStatusBadge stage="live-beta" />);
    expect(
      screen.getByText(PRODUCT_STAGE_LABELS["live-beta"]),
    ).toBeInTheDocument();
  });

  it("pairs every stage with an icon, not colour alone", () => {
    const { container } = render(
      <ProductStatusBadge stage="seeking-pilot-users" />,
    );
    expect(
      screen.getByText(PRODUCT_STAGE_LABELS["seeking-pilot-users"]),
    ).toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeNull();
  });

  it("never uses the generic 'Available' label for any stage", () => {
    expect(Object.values(PRODUCT_STAGE_LABELS)).not.toContain("Available");
  });

  it("renders optional hidden supporting text without changing the visible label", () => {
    render(
      <ProductStatusBadge
        stage="paused"
        hiddenSupportingText="More detail for screen readers."
      />,
    );
    expect(screen.getByText(PRODUCT_STAGE_LABELS.paused)).toBeInTheDocument();
    expect(
      screen.getByText(/More detail for screen readers\./),
    ).toBeInTheDocument();
  });
});
