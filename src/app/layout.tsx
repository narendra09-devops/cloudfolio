import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "CloudFolio",
    template: "%s | CloudFolio",
  },
  description:
    "Production-grade engineering portfolio platform for cloud, platform, DevOps, and SRE work.",
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
