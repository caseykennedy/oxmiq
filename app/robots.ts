import { type MetadataRoute } from "next"

import { getBaseUrl } from "~/lib/constants"

const baseUrl = getBaseUrl()

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
