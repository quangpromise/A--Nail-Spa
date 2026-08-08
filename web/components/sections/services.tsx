import { Hand, Footprints, Sparkles, Flower2, HeartHandshake, Gem } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Hand,
    title: "Manicure & Gel",
    desc: "Professional nail care, long-lasting gel polish, custom shaping on request.",
  },
  {
    icon: Footprints,
    title: "Pedicure Deluxe",
    desc: "Herbal foot soak, exfoliation, and a relaxing foot massage.",
  },
  {
    icon: Sparkles,
    title: "Acrylic & Nail Art",
    desc: "Acrylic application, nail extensions, and custom nail art to match your style.",
  },
  {
    icon: Flower2,
    title: "Waxing",
    desc: "Professional, gentle waxing that's safe for every skin type.",
  },
  {
    icon: HeartHandshake,
    title: "Massage & Spa",
    desc: "Full-body therapeutic massage to relieve stress and restore energy.",
  },
  {
    icon: Gem,
    title: "Combo Packages",
    desc: "Combine multiple services in one visit — save time and money.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            Our Services
          </span>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Your hands. <span className="grad-text">Our full attention.</span>
          </h2>
          <p className="text-muted-foreground">
            From classic manicures to deep spa therapy — every service is performed with
            care by our experienced technicians.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.05}>
              <Card className="h-full transition-all duration-250 ease-out hover:-translate-y-1 hover:border-accent-1/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-1/[0.12] text-accent-1">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-[1.05rem] font-bold">{title}</h3>
                <p className="text-[0.9rem] text-muted-foreground">{desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
