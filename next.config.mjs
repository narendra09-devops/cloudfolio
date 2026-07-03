import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const isGithubPages = process.env.GITHUB_PAGES === "true";
const legacyVercelHost = "cloudfolio-xi.vercel.app";

function normalizeSiteUrl(value) {
  if (!value) {
    return undefined;
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    return new URL(withProtocol);
  } catch {
    return undefined;
  }
}

const configuredSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.NEXT_PUBLIC_DOMAIN);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
  trailingSlash: isGithubPages,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), browsing-topics=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    if (!configuredSiteUrl || configuredSiteUrl.hostname === legacyVercelHost) {
      return [];
    }

    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: legacyVercelHost,
          },
        ],
        destination: `${configuredSiteUrl.origin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
