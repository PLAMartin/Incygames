import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/forms/ContactForm";

describe("ContactForm", () => {
  it("renders all required fields and the privacy checkbox", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Name *")).toBeInTheDocument();
    expect(screen.getByLabelText("Email address *")).toBeInTheDocument();
    expect(screen.getByLabelText("Enquiry type *")).toBeInTheDocument();
    expect(screen.getByLabelText("Message *")).toBeInTheDocument();
    expect(
      screen.getByLabelText(/I understand how Incygames/),
    ).toBeInTheDocument();
  });

  it("blocks submission and shows a generic error when submitted immediately (anti-spam timing gate)", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      await screen.findByText(
        "Your message could not be sent. Please check the form and try again.",
      ),
    ).toBeInTheDocument();
  });

  it("keeps the honeypot field visually hidden and out of tab order", () => {
    render(<ContactForm />);
    const honeypot = screen.getByLabelText("Leave this field empty");
    expect(honeypot).toHaveAttribute("tabindex", "-1");
  });
});
