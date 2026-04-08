import { resolvePageState } from "@/lib/resolve-page";
import { PricingPageClient } from "./pricing-client";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for health professionals.",
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <PricingPageClient language={state.language} />;
}
