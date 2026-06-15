// app/api/send/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  Fullname: z.string().min(2, "Please enter your full name"),
  suburb: z.string().min(2, "Please enter your suburb"),
  telephone: z.string().min(6, "Please enter a valid phone number"),

  postCode: z
    .string()
    .min(4, "Please enter your postcode")
    .regex(/^\d{4}$/, "Please enter a valid 4-digit postcode")
    .refine((value) => {
      const postcode = Number(value);
      return postcode >= 2000 && postcode <= 2999;
    }, "We currently service Sydney and NSW areas only"),

  service: z.string().min(1, "Please select a service"),
  comments: z.string().min(5, "Please tell us a little about your project"),
  turnstileToken: z.string().min(1),
  nickname: z.string().optional(),
});

export async function POST(req: Request) {
  const data = await req.json();
  const parse = ContactSchema.safeParse(data);

  if (!parse.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data", details: parse.error.flatten() },
      { status: 400 },
    );
  }

  const lead = parse.data;

  // Honeypot
  if (lead.nickname) {
    return NextResponse.json({ ok: true });
  }

  // Spam humano
  const spamWords = [
    "seo",
    "backlink",
    "backlinks",
    "guest post",
    "digital marketing",
    "lead generation",
    "website design",
    "web development",
    "takeoff services",
    "outsourcing",
    "ranking",
    "google first page",
  ];

  const textToCheck =
    `${lead.Fullname} ${lead.service} ${lead.comments}`.toLowerCase();

  if (spamWords.some((word) => textToCheck.includes(word))) {
    return NextResponse.json({ ok: true });
  }

  // Validar Turnstile
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  form.append("response", lead.turnstileToken);

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    },
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json(
      { ok: false, error: "Turnstile failed" },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New painting lead - ${lead.suburb} ${lead.postCode}`,
      text: `
        Name: ${lead.Fullname}
        Phone: ${lead.telephone}
        Suburb: ${lead.suburb}
        Postcode: ${lead.postCode}
        Service: ${lead.service}
            
        Comments:
        ${lead.comments}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { ok: false, error: "Error sending email" },
      { status: 500 },
    );
  }
}
