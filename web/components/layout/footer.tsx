import { business } from "@/lib/business";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 pt-14">
      <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-8 px-6 pb-10">
        <div>
          <a href="#top" className="text-[1.38rem] font-extrabold tracking-tight">
            A<span className="grad-text">+</span> Nail Spa
          </a>
          <p className="mt-2 text-[0.88rem] text-muted-foreground">{business.address}</p>
          <p className="text-[0.88rem]">
            <a href={business.phoneHref} className="text-muted-foreground">
              {business.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/8 px-6 py-5 text-center text-[0.82rem] text-muted-foreground">
        © 2026 A+ Nail Spa. All rights reserved.
      </div>
    </footer>
  );
}
