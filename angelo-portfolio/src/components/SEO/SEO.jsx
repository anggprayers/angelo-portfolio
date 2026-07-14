import { Helmet } from "react-helmet-async";

const SITE_NAME = "Angelo Obrero";
const SITE_URL = "https://angelo-portfolio.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
    title = "Angelo Obrero | Full-Stack Web Developer",
    description = "Portfolio of Angelo Obrero, a full-stack web developer building responsive websites and practical web applications.",
    canonical = "",
    image = DEFAULT_IMAGE,
    type = "website",
    noIndex = false,
    structuredData = null,
}) => {
    const pathname = window.location.pathname === "/" ? "" : window.location.pathname;
    const pageUrl = canonical || `${SITE_URL}${pathname}`;

    const absoluteImage = image.startsWith("http")
        ? image
        : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <link rel="canonical" href={pageUrl} />

            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:image:alt" content={`${SITE_NAME} portfolio preview`} />
            <meta property="og:locale" content="en_PH" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />

            {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
        </Helmet>
    );
};

export default SEO;
