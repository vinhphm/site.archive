import { useRouter } from 'next/router'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from '@/components/NowPlaying'

export default function Footer() {
  const { locale } = useRouter()

  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-3 px-4 pt-6 md:px-6 md:pt-0">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={5} />
        </div>
        <div className="mb-3 flex max-w-full items-center">
          <NowPlaying />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            {siteMetadata.headerTitle}
          </Link>
        </div>
      </div>
    </footer>
  )
}
