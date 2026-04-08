import { cookies } from "next/headers";
import { resolveMarketingState } from "@/lib/site-data";

export async function resolvePageState(
  searchParams: Promise<Record<string, string | string[] | undefined>>,
) {
  const params = await searchParams;
  const cookieStore = await cookies();
  return resolveMarketingState({
    queryProfession:
      typeof params.profession === "string" ? params.profession : undefined,
    queryLanguage:
      typeof params.lang === "string" ? params.lang : undefined,
    cookieProfession:
      cookieStore.get("clyro-profession")?.value ?? undefined,
    cookieLanguage:
      cookieStore.get("clyro-language")?.value ?? undefined,
  });
}
