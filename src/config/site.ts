const publicGithubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "narendra09-devops";

export const siteConfig = {
  name: "CloudFolio",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
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
