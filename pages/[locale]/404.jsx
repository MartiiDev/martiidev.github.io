import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import Link from '@/components/Link'

const namespaces = ['common', 'error'];
export default function NotFound() {
    const { t } = useTranslation(namespaces)

    return (
      <>
        <Head>
          <title>{`${t('sitename')} – ${t('error:title')}`}</title>
        </Head>

          <main className="grow">
              <div className="md:p-10 relative">
                <div className="hero h-[30rem]">
                  <div className="text-center hero-content">
                      <div className="max-w-md">
                          <h1 className="mb-5 text-4xl font-semibold">{t('error:title')}</h1>
                          <p className="mb-5">{t('error:description')}</p>
                          <Link className="btn btn-warning" href="/">{t('error:back')}</Link>
                      </div>
                  </div>
                </div>
              </div>
          </main>
    </>
  )
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }