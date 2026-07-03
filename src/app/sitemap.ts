import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { architectureTopics } from "@/content/architecture";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/activity",
    "/architecture",
    "/blog",
    "/contact",
    "/dashboard",
    "/learning",
    "/notes",
    "/projects",
    "/recruiter",
    "/resume",
    "/timeline",
  ];

  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const architectureRoutes = architectureTopics.map((topic) => `/architecture/${topic.slug}`);

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...architectureRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/projects/") ? 0.85 : 0.8,
  }));
}
