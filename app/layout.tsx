import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/chrome/nav";
import { Cursor } from "@/components/chrome/cursor";
import { Grain } from "@/components/chrome/grain";
import { Preloader } from "@/components/chrome/preloader";
import { ScrollProgress } from "@/components/chrome/scroll-progress";
import { themeInitScript } from "@/components/providers/theme-provider";
import { personal } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Udit Sharma — AI Engineer building agentic AI systems: multi-agent orchestration, RAG pipelines & LLM workflows. Open-source contributor to LangChain.";

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: "Udit Sharma — AI Engineer · Agentic AI & LLM Systems",
    template: "%s · Udit Sharma",
  },
  description,
  applicationName: "Udit Sharma — Portfolio",
  authors: [{ name: personal.name, url: personal.siteUrl }],
  creator: personal.name,
  publisher: personal.name,
  keywords: [
    "Udit Sharma",
    "AI Engineer",
    "Agentic AI",
    "Multi-Agent Systems",
    "LLM Orchestration",
    "LangChain",
    "LangGraph",
    "RAG Pipelines",
    "Python",
    "Machine Learning Engineer",
    "AI Developer",
    "Bhopal",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personal.siteUrl,
    siteName: `${personal.name} — Portfolio`,
    title: "Udit Sharma — AI Engineer · Agentic Systems & LLM Orchestration",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Udit Sharma — AI Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
    { media: "(prefers-color-scheme: light)", color: "#f2f2f2" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: personal.siteUrl,
  email: `mailto:${personal.email}`,
  jobTitle: "AI Engineer · Agentic Systems & LLM Orchestration",
  address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressCountry: "IN" },
  sameAs: [personal.github, personal.linkedin],
  knowsAbout: [
    "Agentic AI",
    "Multi-Agent Systems",
    "LLM Orchestration",
    "RAG Pipelines",
    "LangChain",
    "LangGraph",
    "Python",
  ],
  worksFor: { "@type": "Organization", name: "Node and Edges LLP" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Technocrats Institute of Technology, Bhopal" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Providers>
          <Grain />
          <Cursor />
          <ScrollProgress />
          <Preloader />
          <Nav />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
