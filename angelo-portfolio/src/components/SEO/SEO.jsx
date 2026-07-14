import { Helmet } from "react-helmet-async";

const SITE_NAME = "Angelo Obrero";
const SITE_URL = "https://your-domain.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
    title = "Angelo Obrero | Full-Stack Web Developer",
    description = "Portfolio of Angelo Obrero, a web developer building responsive websites and full-stack web applications.",
    canonical,
    image = DEFAULT_IMAGE,
    noIndex = false,
}) => {
    const pageUrl = canonical || `${SITE_URL}${window.location.pathname === "/" ? "" : window.location.pathname}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="canonical" href={pageUrl} />

            {noIndex && <meta name="robots" content="noindex, nofollow" />}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
