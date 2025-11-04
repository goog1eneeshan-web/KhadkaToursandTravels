"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: "",
    passengers: "1",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  function update(field: string, value: string) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Request sent — we'll contact you soon.");
        setForm({ name: "", phone: "", email: "", pickup: "", dropoff: "", date: "", passengers: "1", message: "" });
      } else {
        setStatus(data?.message || "Failed to send request.");
      }
    } catch (err) {
      setStatus("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl">
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="Full name" className="px-3 py-2 border rounded-md" />
        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" className="px-3 py-2 border rounded-md" />
        <input value={form.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="Email" className="px-3 py-2 border rounded-md" />
        <input value={form.date} onChange={(e) => update("date", e.target.value)} type="date" placeholder="Date" className="px-3 py-2 border rounded-md" />
        <input value={form.pickup} onChange={(e) => update("pickup", e.target.value)} placeholder="Pickup location" className="px-3 py-2 border rounded-md sm:col-span-2" />
        <input value={form.dropoff} onChange={(e) => update("dropoff", e.target.value)} placeholder="Dropoff location" className="px-3 py-2 border rounded-md sm:col-span-2" />
        <input value={form.passengers} onChange={(e) => update("passengers", e.target.value)} type="number" min={1} placeholder="Passengers" className="px-3 py-2 border rounded-md" />
        <select value={form.passengers} onChange={(e) => update("passengers", e.target.value)} className="px-3 py-2 border rounded-md">
          <option value="1">1 passenger</option>
          <option value="2">2 passengers</option>
          <option value="3">3 passengers</option>
          <option value="4">4 passengers</option>
          <option value="5">5+ passengers</option>
        </select>
        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Additional details (optional)" className="sm:col-span-2 px-3 py-2 border rounded-md" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" disabled={loading} className="btn" style={{ background: "var(--accent)", color: "#fff" }}>
          {loading ? "Sending…" : "Request a Quote"}
        </button>
        <div className="text-sm text-muted-foreground">Or call us: <a href="tel:+9779800000000" className="font-medium">+977 98XXXXXXXX</a></div>
      </div>

      {status && <p className="mt-3 text-sm">{status}</p>}
    </form>
  );
}
