import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cloudfolio-xi.vercel.app";

  const routes = [
    "",
    "/about",
    "/projects",
    "/blog",
    "/architecture",
    "/dashboard",
    "/activity",
    "/timeline",
    "/resume",
    "/recruiter",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
