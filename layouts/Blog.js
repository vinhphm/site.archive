import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata.mjs'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from '@/components/Image'
import Tag from '@/components/Tag'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

export default function BlogPostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  availableLocales,
  children,
}) {
  const { slug, fileName, date, title, images, tags } = frontMatter
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <>
      <BlogSEO
        availableLocales={availableLocales}
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="py-10 space-y-1 text-center">
              <dl>
                <div>
                  <dt className="sr-only">{t('common:pub')}</dt>
                  <dd className="text-base font-medium leading-6 text-neutral-500 dark:text-neutral-400">
                    <time dateTime={date}>{formatDate(date, locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="pt-6">
                <dt className="sr-only">{t('common:authors')}</dt>
                <dd>
                  <ul className="flex justify-center space-x-8 sm:space-x-12">
                    {authorDetails.map((author) => (
                      <li className="flex items-center space-x-2" key={author.name}>
                        {author.avatar && (
                          <Image
                            src={author.avatar}
                            width="24px"
                            height="24px"
                            alt="avatar"
                            className="h-10 w-10 rounded-full"
                          />
                        )}
                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                          <dt className="sr-only">{t('common:name')}</dt>
                          <dd className="text-neutral-500 dark:text-neutral-400">{author.name}</dd>
                        </dl>
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-transparent xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-transparent xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
            <div className="pt-6 pb-6 text-sm text-neutral-700 dark:text-neutral-300">
              <Link href={discussUrl(slug)} rel="nofollow">
                {t('common:twitter')}
              </Link>
              {` • `}
              <Link href={editUrl(fileName)}>{t('common:github')}</Link>
            </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Tags
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </>
  )
}
