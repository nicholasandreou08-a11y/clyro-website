import { notFound } from "next/navigation";
import { resolvePageState } from "@/lib/resolve-page";
import { getFeatureBySlug, allFeatureSlugs } from "@/lib/feature-data";
import { FeatureDetailClient } from "./feature-detail-client";

export function generateStaticParams() {
  return allFeatureSlugs.map((slug) => ({ feature: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const feat = getFeatureBySlug(feature);
  if (!feat) return {};
  return {
    title: feat.title.en,
    description: feat.description.en,
  };
}

export default async function FeatureDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ feature: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { feature } = await params;
  const feat = getFeatureBySlug(feature);
  if (!feat) notFound();

  const state = await resolvePageState(searchParams);
  return <FeatureDetailClient language={state.language} featureSlug={feature} />;
}
