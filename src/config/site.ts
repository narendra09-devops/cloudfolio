import type { Metadata } from "next";

const publicGithubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "narendra09-devops";
const fallbackProductionUrl = "https://cloudfolio-xi.vercel.app";

function normalizeUrl(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    return url.origin;
  } catch {
    return undefined;
  }
}

function resolveSiteUrl() {
  return (
    normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalizeUrl(process.env.NEXT_PUBLIC_DOMAIN) ??
    fallbackProductionUrl
  );
}

const siteUrl = resolveSiteUrl();
const siteDomain = process.env.NEXT_PUBLIC_DOMAIN ?? new URL(siteUrl).hostname;

export const siteConfig = {
  name: "CloudFolio",
  url: siteUrl,
  domain: siteDomain,
  owner: "Narendra Pratap Singh",
  githubUsername: publicGithubUsername,
  description:
    "Production-grade engineering portfolio platform for cloud, platform, DevOps, and SRE work.",
  links: {
    github: `https://github.com/${publicGithubUsername}`,
    linkedin: "https://www.linkedin.com/in/narendra09-devops",
    email: "mailto:napr.singh09@gmail.com?subject=CloudFolio%20Opportunity%20Discussion",
    resume: "/resume/narendra-pratap-singh-resume.pdf",
  },
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === "/" ? "" : normalizedPath}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
