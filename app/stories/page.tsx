import type { Metadata } from "next";
import StoriesView from "@/components/StoriesView";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Stories",
  description:
    "Every familiar Hindu story traced to its actual source, and marked canonical, several-versions, or later tradition — including the ones that are not in Valmiki at all.",
};

export default function StoriesPage() {
  return (
    <>
      <StoriesView />
      <SiteFooter />
    </>
  );
}
