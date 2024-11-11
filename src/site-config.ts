import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  author: 'Vinh Pham',
  title: 'vinh.dev',
  subtitle: 'Thoughts and ideas',
  description: 'Thoughts and ideas',
  image: {
    src: '/hero.jpg',
    alt: 'Vinh Pham',
  },
  email: 'vinh@vinh.dev',
  socialLinks: [
    {
      text: 'vinh.dev',
      href: 'https://bsky.app/profile/vinh.dev',
      icon: 'i-ri-bluesky-fill',
    },
    {
      text: 'vinh.phm',
      href: 'https://threads.net/vinh.phm',
      icon: 'i-ri-threads-line',
    },
    {
      text: 'vinhphm',
      href: 'https://github.com/vinhphm',
      icon: 'i-ri-github-fill',
    },
    {
      text: 'vinhphm',
      href: 'https://www.linkedin.com/in/vinhphm/',
      icon: 'i-ri-linkedin-box-fill',
    },
    {
      text: 'Vinh Pham',
      href: 'https://open.spotify.com/user/ozy5u927y3y4xj2lss3sh26j4',
      icon: 'i-ri-spotify-fill',
    },
  ],
  header: {
    logo: {
      src: '/logo.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
    ],
  },
  footer: {
    navLinks: [],
  },
}

export default siteConfig
