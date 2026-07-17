import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import type { BreadcrumbItem } from "@/lib/structured-data";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-text-secondary mb-6 text-sm">
      <BreadcrumbJsonLd items={items} />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-text-primary">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.path}
                    className="hover:text-accent hover:underline"
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
