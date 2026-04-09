import { resolvePageState } from "@/lib/resolve-page";
import { TermsPageClient } from "./terms-client";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Clyro practice management platform.",
};

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <TermsPageClient language={state.language} />;
}
