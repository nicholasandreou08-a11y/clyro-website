"use client";

import { Suspense, type ReactNode } from "react";
import { LanguageProvider } from "./language-context";
import { Nav } from "./nav";
import { Footer } from "./footer";
import type { Language } from "@/lib/site-data";

export function PageShell({
  language,
  children,
}: {
  language: Language;
  children: ReactNode;
}) {
  return (
    <Suspense>
      <LanguageProvider initial={language}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </LanguageProvider>
    </Suspense>
  );
}
