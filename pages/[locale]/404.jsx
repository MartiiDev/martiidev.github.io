import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'

import Link from '@/components/Link'

const namespaces = ['common'];
export default function Index() {
  const { t } = useTranslation(namespaces)

  return <>
    <main>
      <div>
        <Link href='/'>
          <button
            type='button'
          >
            404 : Retour{/*{t('common:back-to-home')}*/}
          </button>
        </Link>
      </div>
    </main>
  </>
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }