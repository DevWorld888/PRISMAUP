// app/api/send/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();
  const { firstName, lastName, address, city, postCode, telephone, comments } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // tu email
      pass: process.env.GMAIL_PASS  // app password
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${firstName} ${lastName}`,
      text: `
      Nombre: ${firstName} ${lastName}
      Teléfono: ${telephone}
      Dirección: ${address}, ${city}, ${postCode}
      Comentarios: ${comments}
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ ok: false, error });
  }
}
