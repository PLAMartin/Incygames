import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, reason: "rate_limited" },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, reason: "invalid_request" },
      { status: 400 },
    );
  }

  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, reason: "invalid_fields" },
      { status: 400 },
    );
  }

  const { name, email, enquiryType, message, company, relatedProduct } =
    result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  // Credentials not configured: tell the client honestly so it can fall
  // back to the mailto flow, rather than pretending to send.
  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { ok: false, reason: "not_configured" },
      { status: 503 },
    );
  }

  const submittedAt = new Date().toISOString();
  const pageUrl = request.headers.get("referer") ?? "unknown";

  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Enquiry type: ${enquiryType}`,
    relatedProduct ? `Related product: ${relatedProduct}` : null,
    "",
    message,
    "",
    `Submitted: ${submittedAt}`,
    `Page: ${pageUrl}`,
  ].filter((line): line is string => line !== null);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `Incygames enquiry: ${enquiryType}`,
      text: bodyLines.join("\n"),
    });

    if (error) {
      // Operational metadata only — never the message content.
      console.error("contact form send failed", { enquiryType });
      return NextResponse.json(
        { ok: false, reason: "send_failed" },
        { status: 502 },
      );
    }
  } catch {
    console.error("contact form send failed", { enquiryType });
    return NextResponse.json(
      { ok: false, reason: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
