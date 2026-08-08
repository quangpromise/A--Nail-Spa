import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The space is so clean and relaxing. The technicians are meticulous — I'll definitely be back.",
    author: "Emily R.",
  },
  {
    quote: "Amazing pedicure, fair prices. The staff is friendly and truly professional.",
    author: "Jessica M.",
  },
  {
    quote: "My favorite nail spot in Gainesville. The quality is always consistent.",
    author: "Sarah K.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="pb-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            What Clients Say
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Loved by our <span className="grad-text">clients</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, author }, i) => (
            <Reveal key={author} delay={i * 0.05}>
              <Card className="h-full">
                <div className="mb-3.5 tracking-[2px] text-[#facc15]">★★★★★</div>
                <p className="mb-4.5 text-[0.92rem] text-muted-foreground">
                  &quot;{quote}&quot;
                </p>
                <div className="text-[0.88rem] font-semibold">— {author}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
