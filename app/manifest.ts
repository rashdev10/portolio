import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rasheed Iskilu - Senior Full Stack Developer Portfolio',
    short_name: 'Rasheed Portfolio',
    description: 'Senior Full Stack Developer with 4+ years experience in healthcare & fintech. Expert in React, Next.js, TypeScript, .NET Core.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3275F8',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/jsm-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/jsm-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'developer'],
    lang: 'en-US',
  }
}
