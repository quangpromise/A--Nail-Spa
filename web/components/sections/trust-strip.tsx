import { ShieldCheck, Star, DoorOpen, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Rated" },
  { icon: DoorOpen, label: "Walk-ins Welcome" },
  { icon: CalendarCheck, label: "Easy Online Booking" },
];

export function TrustStrip() {
  return (
    <Reveal className="border-y border-white/8 py-8">
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-6 text-center text-[0.85rem] tracking-wide text-muted-foreground">
          Trusted by hundreds of clients in Gainesville &amp; the surrounding area
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-[0.82rem] font-medium text-muted-foreground"
            >
              <Icon size={16} className="text-accent-1" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
