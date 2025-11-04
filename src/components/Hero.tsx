import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-gradient">
      <div className="container py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight">Explore Nepal with trusted local transport</h1>
          <p className="text-muted-foreground mt-4">Khadka Tours & Travels provides driver services, van rentals, Hiace and private cars for all your travel needs across Nepal. Safe, punctual, and comfortable journeys — tailored to groups, families and solo travelers.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#contact" className="btn" style={{background: 'var(--accent)', color: '#fff'}}>Book a Ride</Link>
            <Link href="#services" className="btn border" style={{borderColor: 'rgba(15,23,36,0.06)'}}>See services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
