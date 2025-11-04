import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Driver Service",
    description:
      "Professional local drivers familiar with Nepal's roads, available for single trips, multi-day tours, and point-to-point transfers.",
  },
  {
    title: "Van Rental",
    description:
      "Comfortable vans for groups and families — ideal for long-distance travel, pilgrimages, and group tours across Nepal.",
  },
  {
    title: "Hiace / Mini Buses",
    description:
      "Hiace and mini-bus options for medium-sized groups, weddings, corporate travel, and organized excursions.",
  },
  {
    title: "Private Cars",
    description:
      "Sedan and SUV options for private transfers, airport pickups, and city travel — clean, reliable vehicles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="text-muted-foreground mt-2">Reliable transport solutions across Nepal tailored to your needs.</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} description={s.description} />
        ))}
      </div>
    </section>
  );
}
