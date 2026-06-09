import { Helmet } from "react-helmet-async"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
}

export function SEO({
  title = "SCM Thực Chiến - Kiến Thức & Công Cụ Quản Trị Chuỗi Cung Ứng",
  description = "Chia sẻ kiến thức Supply Chain thực chiến, template Excel, eBook, và dịch vụ tư vấn cho doanh nghiệp Việt Nam.",
  image = "/og-image.png",
  url = "https://scm-thuc-chien.com",
  type = "website",
}: SEOProps) {
  const siteName = "SCM Thực Chiến"

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}