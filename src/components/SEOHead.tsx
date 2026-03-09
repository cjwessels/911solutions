import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const siteUrl = "https://cannabizlab.co.za";
  const fullTitle = `${title} | Cannabizlab`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:site_name" content="Cannabizlab" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="keywords" content="cannabis, mushrooms, premium cannabis products, mushroom products, South Africa, Cannabizlab" />
    </Helmet>
  );
};

export default SEOHead;
