import { resolvePageState } from "@/lib/resolve-page";
import { DemoPageClient } from "./demo-client";

export const metadata = {
  title: "Demo",
  description: "Try Clyro instantly with demo data — no signup required.",
};

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <DemoPageClient language={state.language} />;
}
