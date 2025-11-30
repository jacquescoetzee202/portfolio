import type { Route } from "./+types/sitemap[.]xml";

export function loader({ request }: Route.LoaderArgs) {
  const baseUrl = new URL(request.url).origin;

  const routes = [
    { path: "", changefreq: "monthly" },
    { path: "about", changefreq: "monthly" },
    { path: "projects", changefreq: "monthly" },
    { path: "contact", changefreq: "monthly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
      .map(
        (route) => `  <url>
    <loc>${baseUrl}/${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
  </url>`
      )
      .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
