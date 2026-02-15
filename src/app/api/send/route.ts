// app/api/send/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { Fullname, postCode, telephone, comments, turnstileToken } = data;

  if (!turnstileToken) {
    return NextResponse.json(
      { ok: false, error: "Missing Turnstile token" },
      { status: 400 },
    );
  }

  // 2) Validar Turnstile (SERVER SIDE)
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  form.append("response", turnstileToken);

  // Validate the captcha token
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
      { ok: false, error: "Turnstile failed", details: verifyData },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // tu email
      pass: process.env.GMAIL_PASS, // app password
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${Fullname}`,
      text: `
      Nombre: ${Fullname}
      Teléfono: ${telephone}
      Código Postal: ${postCode}
      Comentarios: ${comments}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ ok: false, error });
  }
}
