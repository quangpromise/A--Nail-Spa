import { MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function Contact() {
  return (
    <section id="contact" className="pb-[120px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <Reveal>
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            Contact
          </span>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Come <span className="grad-text">visit us</span>
          </h2>

          <div className="my-4.5 flex items-start gap-3.5 text-[0.95rem] text-muted-foreground">
            <MapPin size={20} className="mt-0.5 shrink-0 text-accent-1" />
            <span>{business.address}</span>
          </div>
          <div className="my-4.5 flex items-start gap-3.5 text-[0.95rem] text-muted-foreground">
            <Phone size={20} className="mt-0.5 shrink-0 text-accent-1" />
            <a href={business.phoneHref} className="font-semibold text-foreground">
              {business.phone}
            </a>
          </div>
          <div className="my-4.5 flex items-start gap-3.5 text-[0.95rem] text-muted-foreground">
            <Clock size={20} className="mt-0.5 shrink-0 text-accent-1" />
            <span>
              {business.hours.weekday}
              <br />
              {business.hours.weekend}
            </span>
          </div>

          <a href={business.phoneHref} className="mt-6 inline-block">
            <Button variant="primary">Call to Book</Button>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="h-[340px] overflow-hidden rounded-[20px] border border-white/8">
          <iframe
            title="A+ Nail Spa location"
            src={business.mapEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 [filter:grayscale(0.3)_invert(0.92)_contrast(0.85)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
