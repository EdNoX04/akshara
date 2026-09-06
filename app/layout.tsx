import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshara.vercel.app"),
  title: {
    default: "Akshara — The Imperishable Library",
    template: "%s · Akshara",
  },
  description:
    "The Hindu canon — Vedas, Upanishads, Puranas, the epics, the Gita — told truthfully. Every claim marked as scriptural, symbolic, or historical, and every course ends with what science actually says.",
  keywords: [
    "Hindu texts", "Vedas", "Upanishads", "Puranas", "Bhagavad Gita",
    "Shiva", "Sanskrit", "Indian philosophy", "Sanatana Dharma",
  ],
  openGraph: {
    title: "Akshara — The Imperishable Library",
    description:
      "The Hindu canon, told truthfully. Scriptural, symbolic and historical kept honestly separate.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#17110a" },
    { media: "(prefers-color-scheme: light)", color: "#efe3c6" },
  ],
};

/* Applied before paint so there is no theme/size flash. */
const boot = `(function(){try{
  var t=localStorage.getItem('ak-theme')||'light';
  var s=localStorage.getItem('ak-step')||'1';
  document.documentElement.setAttribute('data-theme',t);
  document.documentElement.style.setProperty('--step',s);
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Noto+Sans+Devanagari:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
