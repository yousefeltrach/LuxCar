import { Lock } from "lucide-react";

const IMG = "/sites/yazkechrental-com-a4958d18/en-7a4ba3ba";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/cars" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const supportLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "WhatsApp", href: "https://wa.me/+212612345678" },
];

const accountLinks = [
  { label: "Sign in", href: "/login" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Book now", href: "/booking" },
];

const columns = [
  { title: "Navigation", links: navLinks },
  { title: "Support", links: supportLinks },
  { title: "Account", links: accountLinks },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <img src={`${IMG}/logos/logo.png`} alt="Yazkech Rental" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium car rental in Marrakech — simple, transparent, no surprises.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold uppercase tracking-wider">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-5 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="size-4" />
            <span className="font-medium">Secure payment</span>
            <span>— Pay for your reservation securely by credit or debit card.</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={`${IMG}/cmi.png`} alt="Paiement CMI" className="h-3.5 w-auto" />
            <img src={`${IMG}/visalogo.svg`} alt="Visa" className="h-3.5 w-auto" />
            <img src={`${IMG}/mastercard.svg`} alt="Mastercard" className="h-3.5 w-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-foreground/10 py-6 text-sm text-muted-foreground md:flex-row">
          <span>&copy; 2026 Yazkech Rental. All rights reserved.</span>
          <span>Marrakech, Morocco</span>
        </div>
      </div>
    </footer>
  );
}
