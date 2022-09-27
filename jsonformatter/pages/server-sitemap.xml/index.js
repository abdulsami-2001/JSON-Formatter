import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {

    const fields = [{
        loc: 'https://eg.com/eg/123456',
        lastmod: new Date().toISOString()

    },
    {
        loc: 'https://eg.com/eg/654321',
        lastmod: new Date().toISOString()

    },
    {
        loc: 'https://eg.com/eg/090078601',
        lastmod: new Date().toISOString()

    },
    ];


    return getServerSideSitemap(ctx, fields)

}

export default function Site() {}