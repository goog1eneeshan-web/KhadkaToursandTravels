import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  pickup?: string;
  dropoff?: string;
  date?: string;
  passengers?: string | number;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();

    // Basic validation
    if (!body.name && !body.email && !body.phone) {
      return NextResponse.json({ ok: false, message: "Provide at least a name and contact info." }, { status: 400 });
    }

    const webhook = process.env.WEBHOOK_URL;

    if (webhook) {
      // Forward payload to configured webhook (Zapier, Make, custom URL)
      const forwarded = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact_request", payload: body }),
      });

      if (!forwarded.ok) {
        return NextResponse.json({ ok: false, message: "Failed to forward to webhook." }, { status: 502 });
      }

      return NextResponse.json({ ok: true, message: "Forwarded to webhook." });
    }

    // No webhook configured — return helpful message.
    return NextResponse.json({ ok: false, message: "No WEBHOOK_URL configured on the server. Configure a webhook or integrate an email provider." }, { status: 501 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: "Invalid request or server error." }, { status: 500 });
  }
}
