import { resolvePageState } from "@/lib/resolve-page";
import { PrivacyPageClient } from "./privacy-client";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Clyro collects, processes, and protects your data in compliance with GDPR and Cyprus & Greek data protection law.",
};

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <PrivacyPageClient language={state.language} />;
}
