import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './languageDetector'


export function Loading() {
  return (
    <>
      <Head>
        <title>Martii – Dev et traduction</title>
      </Head>

      <main className="grow">
          <div className="md:p-10 relative">
            <div className="hero h-[30rem]">
              <div className="text-center hero-content">
                  <div className="max-w-md">
                      <i class="fa-duotone fa-spinner fa-fw fa-2xl fa-spin-pulse"></i>
                  </div>
              </div>
            </div>
          </div>
      </main>
  </>
  )
}


export const useRedirect = (to) => {
  const router = useRouter()
  to = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    if (to.startsWith('/' + detectedLng) && router.route === '/404') { // prevent endless loop
      router.replace('/' + detectedLng + router.route)
      return
    }

    languageDetector.cache(detectedLng)
    router.replace('/' + detectedLng + to)
  })

  return <Loading/>
};

export const Redirect = () => {
  useRedirect()
  return <Loading/>
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to)
  return <Loading/>
}
