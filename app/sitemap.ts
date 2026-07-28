import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.primepack.lv";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/products/flat-bottom-bag", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/flat-bottom-bag/catalog", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/doypack-bag", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/doypack-bag/catalog", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/recyclable-bags", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/recyclable-bags/catalog", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/side-gusset-bag", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/side-gusset-bag/catalog", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/tea-filter-bags", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/products/tea-filter-bags/catalog", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/returns", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
