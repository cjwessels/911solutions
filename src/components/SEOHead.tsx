import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const siteUrl = "https://911solutions.co.za";
  const fullTitle = `${title} | 911solutions`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:site_name" content="911solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="keywords" content="cannabis, mushrooms, premium cannabis products, mushroom products, South Africa, 911solutions" />
    </Helmet>
  );
};

export default SEOHead;
