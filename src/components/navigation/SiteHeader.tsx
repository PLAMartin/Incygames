import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { NAV_ITEMS } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="border-border bg-background-primary/95 sticky top-0 z-30 border-b backdrop-blur-sm">
      <Container className="relative flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-text-primary flex min-h-11 items-center gap-2 rounded-md font-semibold"
        >
          <Image
            src="/images/company/incygames-logo.png"
            alt="Incygames"
            width={40}
            height={40}
            priority
            className="rounded-lg"
          />
          <span className="text-lg">Incygames</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-text-primary hover:text-accent min-h-11 text-base font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/products" variant="primary">
            Explore our products
          </Button>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}
