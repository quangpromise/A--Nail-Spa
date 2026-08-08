import { Image as ImageIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

const items = [
  "from-[#1a1120] to-[#0d0d10]",
  "from-[#200f1a] to-[#0d0d10]",
  "from-[#12101f] to-[#0d0d10]",
  "from-[#1f1024] to-[#0d0d10]",
  "from-[#150f1f] to-[#0d0d10]",
  "from-[#1b0f18] to-[#0d0d10]",
];

export function Gallery() {
  return (
    <section id="gallery" className="pb-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            Gallery
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Our space &amp; <span className="grad-text">our work</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((gradient, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <div
                className={`flex aspect-[4/3] items-center justify-center rounded-[18px] border border-white/8 bg-gradient-to-br text-white/25 transition-transform duration-250 ease-out hover:scale-[1.02] ${gradient}`}
              >
                <ImageIcon size={32} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
