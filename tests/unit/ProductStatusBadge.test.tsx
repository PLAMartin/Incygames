import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductStatusBadge } from "@/components/products/ProductStatusBadge";
import { PRODUCT_STATUS_LABELS } from "@/types";

describe("ProductStatusBadge", () => {
  it("renders the human-readable label for a status", () => {
    render(<ProductStatusBadge status="available" />);
    expect(
      screen.getByText(PRODUCT_STATUS_LABELS.available),
    ).toBeInTheDocument();
  });

  it("pairs every status with an icon, not colour alone", () => {
    const { container } = render(<ProductStatusBadge status="waitlist" />);
    expect(
      screen.getByText(PRODUCT_STATUS_LABELS.waitlist),
    ).toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeNull();
  });
});
