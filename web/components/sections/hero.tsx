import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-[60px] pt-[120px] text-center">
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(236,72,153,0.08)_45%,transparent_70%)] blur-[40px]" />

      <Reveal className="relative mx-auto max-w-[1120px] px-6">
        <div className="relative mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-panel text-accent-1 shadow-[0_0_0_1px_rgba(168,85,247,0.08),0_0_40px_rgba(168,85,247,0.35)] before:absolute before:bottom-full before:left-1/2 before:h-[140px] before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-transparent before:to-accent-1/50">
          <Sparkles size={20} />
        </div>
        <Badge className="mb-6">Summer specials in Gainesville, TX</Badge>
        <h1 className="mb-5 text-[clamp(2.5rem,7vw,4.5rem)] font-extrabold tracking-tighter">
          A<span className="grad-text">+ Nail</span> Spa
        </h1>
        <p className="mx-auto mb-9 max-w-[560px] text-[1.05rem] text-muted-foreground">
          A minimal, relaxing space with professional-grade nail &amp; spa services. Your
          hands and feet deserve the very best care.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a href={business.phoneHref}>
            <Button variant="primary">Book Now</Button>
          </a>
          <a href="#services">
            <Button variant="outline">View Services</Button>
          </a>
        </div>
      </Reveal>

      <Reveal
        delay={0.15}
        className="relative mx-auto mt-20 flex max-w-[900px] items-center justify-center px-6"
      >
        <div className="mr-[-40px] w-[220px] rotate-[-6deg] scale-[0.92] translate-x-5 rounded-[20px] border border-white/8 bg-panel p-6 opacity-60 shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-md:hidden">
          <div className="mb-4 h-9 w-9 rounded-full bg-brand-gradient" />
          <div className="mb-2.5 h-2.5 w-[60%] rounded-md bg-white/8" />
          <div className="mb-2.5 h-2.5 w-[40%] rounded-md bg-white/8" />
          <span className="mt-3 inline-block rounded-full bg-accent-1/15 px-3.5 py-1.5 text-xs font-semibold text-[#d8b4fe]">
            Gel Manicure
          </span>
        </div>

        <div className="z-[2] w-[320px] max-w-[300px] rounded-[20px] border border-white/8 bg-panel p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:max-w-none">
          <div className="mb-4 h-11 w-11 rounded-full bg-brand-gradient" />
          <div className="mb-2.5 h-2.5 w-[70%] rounded-md bg-white/8" />
          <div className="mb-2.5 h-2.5 w-[50%] rounded-md bg-white/8" />
          <div className="mt-3.5 flex flex-wrap gap-2">
            {["Spa", "Massage", "Waxing"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/8 px-3 py-1.5 text-[0.72rem] text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="ml-[-40px] w-[220px] rotate-[6deg] scale-[0.92] -translate-x-5 rounded-[20px] border border-white/8 bg-panel p-6 opacity-60 shadow-[0_20px_60px_rgba(0,0,0,0.5)] max-md:hidden">
          <div className="mb-4 h-9 w-9 rounded-full bg-brand-gradient" />
          <div className="mb-2.5 h-2.5 w-[60%] rounded-md bg-white/8" />
          <div className="mb-2.5 h-2.5 w-[30%] rounded-md bg-white/8" />
          <span className="mt-3 inline-block rounded-full bg-accent-1/15 px-3.5 py-1.5 text-xs font-semibold text-[#d8b4fe]">
            Pedicure Deluxe
          </span>
        </div>
      </Reveal>
    </section>
  );
}
