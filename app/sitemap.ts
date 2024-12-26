// import "server-only" // Ensures this code only runs on the server

// import type { MetadataRoute } from "next"

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ""
// const currentDate = new Date().toISOString().split("T")[0]

// const mapSlugsToSitemap = (
//   slugs: { slug: string[] }[],
//   pathPrefix = ""
// ): MetadataRoute.Sitemap => {
//   return slugs.map((slug) => ({
//     url: `${BASE_URL}${pathPrefix}/${slug.slug.join("/")}`,
//     lastModified: currentDate,
//     changeFrequency: "weekly" as const,
//     priority: 1,
//   }))
// }

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   try {
//     // Fetch slugs from Sanity
//     const [pageSlugs, legalSlugs, toolSlugs] = await Promise.all([
//       generateStaticSlugs(["page", "platform", "solution"]),
//       generateStaticSlugs(["legal"]),
//       generateStaticSlugs(["tool"]),
//     ])

//     // Filter unwanted slugs
//     const filteredPageSlugs = pageSlugs.filter(
//       (slug) => !slug.slug.includes("we-hate-spam")
//     )

//     // Map the slugs
//     const mappedPageSlugs = mapSlugsToSitemap(filteredPageSlugs)
//     const mappedLegalSlugs = mapSlugsToSitemap(legalSlugs, "/legal")
//     const mappedToolSlugs = mapSlugsToSitemap(toolSlugs)

//     // Combine all the slugs for the sitemap
//     return [...mappedPageSlugs, ...mappedLegalSlugs, ...mappedToolSlugs]
//   } catch (error) {
//     console.error("Error generating sitemap:", error)
//     return []
//   }
// }
