import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "CloudFolio",
    template: "%s | CloudFolio",
  },
  description:
    "Production-grade engineering portfolio platform for cloud, platform, DevOps, and SRE work.",
  keywords: [
    "CloudFolio",
    "AWS",
    "DevOps",
    "SRE",
    "Platform Engineering",
    "Technical Blog",
    "Architecture Gallery",
  ],
  authors: [{ name: "CloudFolio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
