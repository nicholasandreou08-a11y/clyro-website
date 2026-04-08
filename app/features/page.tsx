import { resolvePageState } from "@/lib/resolve-page";
import { FeaturesPageClient } from "./features-client";

export const metadata = {
  title: "Features",
  description: "Explore all the features Clyro offers for health professionals.",
};

export default async function FeaturesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <FeaturesPageClient language={state.language} />;
}
