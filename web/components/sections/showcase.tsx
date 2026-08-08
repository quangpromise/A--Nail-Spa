import { Reveal } from "@/components/reveal";

export function Showcase() {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[640px] text-center">
          <span className="mb-3.5 inline-block text-[0.8rem] font-semibold uppercase tracking-wider text-accent-1">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight">
            Your brand. <span className="grad-text">Your style.</span>
          </h2>
          <p className="text-muted-foreground">
            A minimal, modern space designed to help you fully relax throughout your
            visit.
          </p>
        </Reveal>

        <Reveal className="rounded-3xl border border-white/8 bg-gradient-to-b from-accent-1/[0.06] to-transparent p-2">
          <div className="overflow-hidden rounded-[18px] border border-white/8 bg-background-soft">
            <div className="flex gap-1.5 border-b border-white/8 px-[18px] py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            </div>
            <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[1fr_1.3fr] md:p-10">
              <div className="flex flex-col justify-center gap-2.5">
                <div className="h-2.5 w-[70%] rounded-md bg-white/8" />
                <div className="h-2.5 w-[50%] rounded-md bg-white/8" />
                <div className="h-2.5 w-[60%] rounded-md bg-white/8" />
                <div className="mt-2 h-8 w-[100px] rounded-full bg-brand-gradient" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 rounded-2xl border border-accent-1/40 bg-panel p-5 shadow-[0_10px_40px_rgba(168,85,247,0.15)]">
                  <span className="rounded-full border border-white/8 px-3 py-1.5 text-[0.72rem] text-muted-foreground">
                    Popular
                  </span>
                  <div className="mt-2.5 h-2.5 w-[40%] rounded-md bg-white/8" />
                  <div className="my-2.5 bg-brand-gradient bg-clip-text text-[1.6rem] font-extrabold text-transparent">
                    $45
                  </div>
                  <div className="mb-2.5 h-2.5 w-[60%] rounded-md bg-white/8" />
                  <div className="h-2.5 w-[50%] rounded-md bg-white/8" />
                </div>
                <div className="flex-1 rounded-2xl border border-white/8 bg-panel p-5 opacity-70">
                  <div className="mt-2.5 h-2.5 w-[40%] rounded-md bg-white/8" />
                  <div className="my-2.5 bg-brand-gradient bg-clip-text text-[1.6rem] font-extrabold text-transparent">
                    $65
                  </div>
                  <div className="mb-2.5 h-2.5 w-[60%] rounded-md bg-white/8" />
                  <div className="h-2.5 w-[50%] rounded-md bg-white/8" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
