export const siteConfig = {
  name: "CloudFolio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Production-grade engineering portfolio platform for cloud, platform, DevOps, and SRE work.",
  links: {
    github: "https://github.com/narendra09-devops/cloudfolio",
    linkedin: "#",
    email: "mailto:hello@example.com",
  },
} as const;
