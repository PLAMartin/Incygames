import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FounderSection } from "@/components/home/FounderSection";

describe("FounderSection", () => {
  it("gives the founder photo accurate, non-decorative alt text", () => {
    render(<FounderSection />);
    expect(
      screen.getByAltText("Phil Martin, founder of Incygames"),
    ).toBeInTheDocument();
  });

  it("links to philmartin.net and A Bit Gamey, not an invented LinkedIn profile", () => {
    render(<FounderSection />);
    expect(
      screen.getByRole("link", { name: /More about Phil/ }),
    ).toHaveAttribute("href", "https://www.philmartin.net/");
    expect(
      screen.getByRole("link", { name: /Read A Bit Gamey/ }),
    ).toHaveAttribute("href", "https://abitgamey.substack.com/");
    expect(screen.queryByText(/linkedin/i)).not.toBeInTheDocument();
  });
});
