import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sharma-interior-designer.vercel.app';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/logo.jpg`,
        `${baseUrl}/maharaja_sofa.jpg`,
        `${baseUrl}/live_edge_dining.jpg`,
        `${baseUrl}/canopy_poster_bed.jpg`,
        `${baseUrl}/satya-narayan-sharma.jpg`,
      ],
    },
    {
      url: `${baseUrl}/catloug/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
      images: [
        `${baseUrl}/maharaja_sofa.jpg`,
        `${baseUrl}/live_edge_dining.jpg`,
        `${baseUrl}/canopy_poster_bed.jpg`,
        `${baseUrl}/kitchen1.jpg`,
        `${baseUrl}/kitchen2.jpg`,
        `${baseUrl}/almirah1.jpg`,
        `${baseUrl}/almirah2.jpg`,
        `${baseUrl}/door1.jpg`,
      ],
    },
    {
      url: `${baseUrl}/booking/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ];
}
