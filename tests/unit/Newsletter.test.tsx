import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Newsletter } from "@/components/home/Newsletter";

describe("Newsletter", () => {
  it("links the primary CTA to the A Bit Gamey newsletter", () => {
    render(<Newsletter />);
    const link = screen.getByRole("link", {
      name: /Read the free newsletter/,
    });
    expect(link).toHaveAttribute("href", "https://abitgamey.substack.com/");
  });
});
