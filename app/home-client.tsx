"use client";

import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/hero";
import { ProductTabs } from "@/components/product-tabs";
import { BuiltForSection } from "@/components/built-for-section";
import { TestimonialsSection } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { ProfessionSelector } from "@/components/profession-selector";
import { FeatureShowcase } from "@/components/feature-showcase";
import { StatsBar } from "@/components/stats-bar";
import type { Language } from "@/lib/site-data";

export function HomePageClient({ language }: { language: Language }) {
  return (
    <PageShell language={language}>
      <Hero />
      <StatsBar />
      <FeatureShowcase />
      <ProductTabs />
      <ProfessionSelector />
      <BuiltForSection />
      <TestimonialsSection />
      <CtaBanner />
    </PageShell>
  );
}
