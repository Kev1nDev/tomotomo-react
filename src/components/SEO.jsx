import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, url, image }) {
    const siteTitle = 'Tomotomo';
    const defaultDescription = 'Tomotomo - Your favorite online store.';
    const defaultImage = '/vite.svg'; // Replace with actual OG image if available
    const siteUrl = 'https://tomotomo.com'; // Replace with actual URL

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            <link rel="canonical" href={url || siteUrl} />

            {/* Facebook tags */}
            <meta property="og:type" content={type || 'website'} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name || siteTitle} />
            <meta name="twitter:card" content={type === 'article' ? 'summary_large_image' : 'summary'} />
            <meta name="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
}
