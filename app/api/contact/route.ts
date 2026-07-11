import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

// Uses Resend to deliver contact-form submissions.
// Set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment (see .env.example).
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      // No email provider configured yet — respond success in dev so the UI flow
      // can be tested end-to-end. Wire up Resend before deploying to production.
      console.log("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set. Submission:", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json({ ok: true, simulated: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
