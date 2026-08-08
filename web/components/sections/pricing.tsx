import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

const plans = [
  {
    name: "Basic Manicure",
    price: "$25",
    features: ["Nail trim & shape", "Cuticle care", "Standard polish"],
    featured: false,
  },
  {
    name: "Gel Deluxe",
    price: "$45",
    features: ["Everything in Basic", "Long-lasting gel polish", "10-min hand massage"],
    featured: true,
  },
  {
    name: "Spa Combo",
    price: "$75",
    features: ["Manicure + Pedicure", "Exfoliation", "20-min full-body massage"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="pb-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            Pricing
          </span>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Transparent <span className="grad-text">pricing</span>
          </h2>
          <p className="text-muted-foreground">
            Fair prices for every service, with no hidden fees.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[380px] grid-cols-1 gap-6 md:max-w-none md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.05}>
              <div
                className={`relative h-full rounded-3xl border p-8 transition-transform duration-250 ease-out hover:-translate-y-1 ${
                  plan.featured
                    ? "border-accent-1/50 bg-panel shadow-[0_20px_60px_rgba(168,85,247,0.18)]"
                    : "border-white/8 bg-panel"
                }`}
              >
                {plan.featured && (
                  <span className="absolute left-1/2 top-[-13px] -translate-x-1/2 rounded-full bg-brand-gradient px-3.5 py-1.5 text-[0.72rem] font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 text-[1.1rem] font-bold">{plan.name}</h3>
                <div className="mb-5 text-[2.2rem] font-extrabold">{plan.price}</div>
                <ul className="mb-7">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="border-t border-white/8 py-2 text-[0.9rem] text-muted-foreground first:border-t-0"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={business.phoneHref} className="block">
                  <Button variant={plan.featured ? "primary" : "outline"} className="w-full">
                    Book Now
                  </Button>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
