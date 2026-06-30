import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#08080c]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-zinc-100">
              {siteConfig.siteName}
            </p>
            <p className="mt-1 text-sm text-violet-400">{siteConfig.builderBrand}</p>
            <p className="mt-3 text-sm text-zinc-500">{siteConfig.footerTagline}</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks
                .filter((l) => l.href !== "/")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition hover:text-zinc-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-zinc-400 transition hover:text-violet-300"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          © {year} {siteConfig.siteName} · {siteConfig.ownerName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
