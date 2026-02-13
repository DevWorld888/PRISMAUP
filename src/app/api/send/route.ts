// app/api/send/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const {
    Fullname,
    postCode,
    telephone,
    comments,
    captchaToken,
  } = data;
  // Validate the captcha token
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    { method: "POST" }
  );
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json(
      { ok: false, error: "Captcha failed" },
      { status: 400 }
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
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ ok: false, error });
  }
}
