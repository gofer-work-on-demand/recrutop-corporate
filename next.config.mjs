/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY_NAME || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages && repoName ? `/${repoName}` : "",
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : "",
};

export default nextConfig;
