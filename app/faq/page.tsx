import { redirect } from "next/navigation";

// FAQ is covered on the pricing page
export default function FaqPage() {
  redirect("/pricing");
}
