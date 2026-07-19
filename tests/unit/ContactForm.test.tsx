import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/forms/ContactForm";

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name *"), "Jane Tester");
  await user.type(screen.getByLabelText("Email address *"), "jane@example.com");
  await user.selectOptions(
    screen.getByLabelText("Enquiry type *"),
    "General enquiry",
  );
  await user.type(
    screen.getByLabelText("Message *"),
    "This is a test enquiry message that is long enough to pass validation.",
  );
  await user.click(screen.getByLabelText(/I understand how Incygames/));
}

// Bypasses the 3-second anti-spam timing gate by controlling Date.now()
// directly, rather than waiting in real time. Call `advance` only *after*
// mounting the form (so it captures the earlier mountedAt timestamp) and
// before submitting (so enough time appears to have elapsed).
function mockClock() {
  let now = 1_000_000;
  const spy = vi.spyOn(Date, "now").mockImplementation(() => now);
  return {
    advance: (ms: number) => {
      now += ms;
    },
    restore: () => spy.mockRestore(),
  };
}

describe("ContactForm", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

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

  it("shows an accessible success message when the server accepts the enquiry", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: async () => ({ ok: true }),
      }),
    );
    const clock = mockClock();
    const user = userEvent.setup();
    render(<ContactForm />);
    clock.advance(4000);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      await screen.findByText(
        "Thank you. Your message has been sent to Incygames.",
      ),
    ).toBeInTheDocument();
    clock.restore();
  });

  it("falls back to a mailto message when the server email isn't configured", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json: async () => ({ ok: false, reason: "not_configured" }),
      }),
    );
    const clock = mockClock();
    const user = userEvent.setup();
    render(<ContactForm />);
    clock.advance(4000);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(
      await screen.findByText("Your email application should now open."),
    ).toBeInTheDocument();
    clock.restore();
  });
});
