import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { resolveMarketingState, resolveProfessionBySlug, professions } from "@/lib/site-data";
import { professionPages } from "@/lib/profession-data";
import { ProfessionPageClient } from "./profession-client";

export function generateStaticParams() {
  return professions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profession = resolveProfessionBySlug(slug);
  if (!profession) return {};
  const pageData = professionPages[profession];
  const profLabel = professions.find((p) => p.key === profession)?.label.en ?? slug;
  return {
    title: `Clyro for ${profLabel}`,
    description: pageData.heroDescription.en,
  };
}

export default async function ProfessionPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const profession = resolveProfessionBySlug(slug);
  if (!profession) {
    notFound();
  }

  const query = await searchParams;
  const cookieStore = await cookies();
  const state = resolveMarketingState({
    pathProfession: profession,
    queryLanguage: typeof query.lang === "string" ? query.lang : undefined,
    cookieLanguage: cookieStore.get("clyro-language")?.value ?? undefined,
    cookieProfession: cookieStore.get("clyro-profession")?.value ?? undefined,
  });

  return (
    <ProfessionPageClient
      language={state.language}
      profession={state.profession}
    />
  );
}
