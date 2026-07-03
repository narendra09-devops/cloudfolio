import type { Metadata, Viewport } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { absoluteUrl, createPageMetadata, siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner, url: absoluteUrl("/about") }],
  creator: siteConfig.owner,
  publisher: siteConfig.owner,
  category: "technology",
  keywords: [
    "Narendra Pratap Singh",
    "Senior Cloud Infrastructure Engineer",
    "Site Reliability Engineer",
    "Platform Engineer",
    "AWS Cloud Engineer",
    "DevOps Engineer",
    "CloudFolio",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  ...createPageMetadata({
    title: "CloudFolio | Narendra Pratap Singh",
    description:
      "Senior Cloud Infrastructure Engineer, Site Reliability Engineer, and Platform Engineer portfolio for AWS, cloud infrastructure, automation, and reliability work.",
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.owner,
    url: siteConfig.url,
    jobTitle: [
      "Senior Cloud Infrastructure Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
    ],
    email: "mailto:napr.singh09@gmail.com",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    knowsAbout: [
      "AWS",
      "Site Reliability Engineering",
      "Platform Engineering",
      "DevOps",
      "Cloud Infrastructure",
      "Infrastructure Automation",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.owner,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const analyticsEnabled =
    process.env.NEXT_PUBLIC_VERCEL_ANALYTICS === "true" || process.env.VERCEL_ENV === "production";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
        {analyticsEnabled ? (
          <Analytics mode={process.env.NODE_ENV === "production" ? "production" : "development"} />
        ) : null}
        {analyticsEnabled ? <SpeedInsights /> : null}
      </body>
    </html>
  );
}
