import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ManageCookiesLink } from "@/components/analytics/ManageCookiesLink";
import { getAllProducts } from "@/lib/products";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function SiteFooter() {
  const products = getAllProducts();
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-background-secondary border-t">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="text-text-primary flex items-center gap-2 font-semibold"
          >
            <Image
              src="/images/company/incygames-logo.png"
              alt="Incygames"
              width={32}
              height={32}
              className="rounded-md"
            />
            Incygames
          </Link>
          <p className="text-text-secondary mt-3 text-sm">
            An independent, founder-led product studio in Bath.
          </p>
        </div>

        <div>
          <h2 className="text-text-primary text-sm font-semibold">Products</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-text-secondary hover:text-accent hover:underline"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-text-primary text-sm font-semibold">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-text-primary text-sm font-semibold">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ManageCookiesLink className="text-text-secondary hover:text-accent text-left hover:underline" />
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-border border-t">
        <Container className="text-text-secondary flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            Incygames Ltd is a company registered in England and Wales. Company
            number 10517638.
          </p>
          <p>&copy; {year} Incygames Ltd. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
