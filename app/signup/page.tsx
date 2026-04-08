import { resolvePageState } from "@/lib/resolve-page";
import { SignupPageClient } from "./signup-client";

export const metadata = {
  title: "Sign Up",
  description: "Create your free Clyro account in 2 minutes.",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <SignupPageClient language={state.language} />;
}
