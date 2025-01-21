import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  { url: '/skills', changefreq: 'weekly', priority: 0.8 },
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://sahilumraniya.vercel.app/' });
  const writeStream = fs.createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  await streamToPromise(sitemap);

  console.log('Sitemap generated successfully!');
};

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
