"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-background/50 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="inline-flex items-center gap-3">
          <span style={{background: 'rgba(14,165,164,0.1)', color: 'var(--accent)'}} className="inline-block h-10 w-10 rounded-lg flex items-center justify-center font-bold">KT</span>
          <span className="text-lg font-semibold">Khadka Tours & Travels</span>
        </Link>

        <nav className="hidden gap-6 md:flex items-center">
          <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Services</Link>
          <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
          <Link href="#contact" className="btn" style={{background: 'var(--accent)', color: '#fff'}}>Book Now</Link>
        </nav>

        <div className="md:hidden">
          <Link href="#contact" className="btn" style={{background: 'var(--accent)', color: '#fff'}}>Book</Link>
        </div>
      </div>
    </header>
  );
}
