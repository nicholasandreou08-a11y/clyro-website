import { resolvePageState } from "@/lib/resolve-page";
import { ContactPageClient } from "./contact-client";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Clyro team.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const state = await resolvePageState(searchParams);
  return <ContactPageClient language={state.language} />;
}
