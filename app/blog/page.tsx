import { resolvePageState } from "@/lib/resolve-page";
import { BlogPageClient } from "./blog-client";

export const metadata = {
  title: "Blog",
  description: "Insights and tips for health professionals.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <BlogPageClient language={state.language} />;
}
