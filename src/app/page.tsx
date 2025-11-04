import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />

      <Services />

      <section id="contact" className="container py-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="text-muted-foreground mt-2">For quotes, availability or custom itineraries, please submit the form below and we'll follow up quickly.</p>
        </div>

        <div className="mt-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
