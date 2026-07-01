export const siteConfig = {
  name: "CloudFolio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Production-grade engineering portfolio platform for cloud, platform, DevOps, and SRE work.",
  links: {
    github: "https://github.com/narendra09-devops",
    linkedin: "https://www.linkedin.com/in/narendra09-devops",
    email: "mailto:napr.singh09@gmail.com",
    resume: "/resume/narendra-pratap-singh-resume.pdf",
  },
} as const;
