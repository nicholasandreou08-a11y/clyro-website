import { resolvePageState } from "@/lib/resolve-page";
import { HomePageClient } from "./home-client";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <HomePageClient language={state.language} />;
}
