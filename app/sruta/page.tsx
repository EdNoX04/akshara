import type { Metadata } from "next";
import SrutaView from "@/components/SrutaView";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Śruta",
  description:
    "Śruta — an intelligence trained on the whole Akshara library, answering only from it and showing where every answer came from. Coming 2027.",
};

export default function SrutaPage() {
  return (
    <>
      <SrutaView />
      <SiteFooter />
    </>
  );
}
