import type { Metadata } from "next";
import MapView from "@/components/MapView";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Map",
  description:
    "The complete architecture of the Hindu tradition — the four Vedas and their Upavedas, the six Vedangas, the four Upangas, the six darshanas, the Agamas and the stories.",
};

export default function MapPage() {
  return (
    <>
      <MapView />
      <SiteFooter />
    </>
  );
}
