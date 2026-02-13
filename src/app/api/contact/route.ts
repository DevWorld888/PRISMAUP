// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const token = body["cf-turnstile-response"];

  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await verifyRes.json();

  if (!data.success) {
    return NextResponse.json({ error: "Captcha failed" }, { status: 400 });
  }

  // Aquí envías el email o guardas en DB

  return NextResponse.json({ success: true });
}
