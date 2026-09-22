import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Not found",
  description: "That page is not part of the library.",
};

export default function NotFound() {
  return (
    <>
      <main id="main" className="nf">
        <div className="container nf-in">
          <div className="nf-dv" lang="sa" aria-hidden>नेति</div>
          <h1>Not this</h1>
          <p>
            <em>Neti</em> — &ldquo;not this&rdquo;. The Upanishads use it to clear away
            what a thing is not. Here it just means the page you asked for is not
            part of the library.
          </p>
          <div className="nf-links">
            <Link className="btn btn-primary" href="/">Back to the beginning</Link>
            <Link className="btn" href="/map">Open the map</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
