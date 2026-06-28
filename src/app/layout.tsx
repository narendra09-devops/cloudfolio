import type { Metadata } from "next";
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
      <body className="min-h-screen bg-white text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
