import { PageWrapper } from "@/components/layout/page-wrapper";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cloudfolio-xi.vercel.app"),

  title: "CloudFolio | Narendra Pratap Singh",

  description:
    "Senior Cloud Infrastructure Engineer | Site Reliability Engineer | Platform Engineer",

  openGraph: {
    title: "CloudFolio | Narendra Pratap Singh",
    description: "Senior Cloud Infrastructure Engineer | Site Reliability Engineer",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://cloudfolio-xi.vercel.app",
    siteName: "CloudFolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CloudFolio | Narendra Pratap Singh",
    description: "Senior Cloud Infrastructure Engineer | Site Reliability Engineer",
  },
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
