"use client";

import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/hero";
import { FeaturesGrid } from "@/components/features-grid";
import { ProductTabs } from "@/components/product-tabs";
import { BuiltForSection } from "@/components/built-for-section";
import { TestimonialsSection } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import type { Language } from "@/lib/site-data";

export function HomePageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <Hero />
      <FeaturesGrid />
      <ProductTabs />
      <BuiltForSection />
      <TestimonialsSection />
      <CtaBanner />
    </PageShell>
  );
}
