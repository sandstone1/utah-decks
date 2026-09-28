

export const prerender = true;

export async function GET() {

    const siteUrl = process.env.SITE || 'https://utahdecks.net';

    const pages = [
        '',
        'request-service',
        'get-started',
        'free-estimate',
        'privacy-policy',
        'terms-and-conditions'
    ];

    const urls = pages
        .map( ( page ) => `<url><loc>${ siteUrl }/${ page }</loc></url>` )
        .join( '' );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ urls }
    </urlset>`;

    return new Response( xml, {
        headers : { 'Content-Type' : 'application/xml' }
    } );

}

