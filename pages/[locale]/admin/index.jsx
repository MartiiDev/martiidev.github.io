import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import Link from '@/components/Link'

const namespaces = ['common', 'admin'];
export default function Index() {
    const { t } = useTranslation(namespaces)

    // Demander clé API github (et l'enregistrer en localStorage) :
    // -> get/push directement avec l'API github

    // Page trad :
    // - niveau de langue
    // - projets (lock ou modif pour une seule langue)
    // - reviews

    // Erreur quand on passe de admin à une page non admin

    return (
    	<>
    		<Head>
    			<title>{`${t('sitename')} – ${t('admin:title')}`}</title>
    		</Head>

	        <main className="flex flex-col mx-5 md:mx-10 my-5 md:my-10">
	           {/* <div className="md:p-10 pb-16 relative min-h-[90vh]">
	        		<div className="hero h-[30rem]">
					    <div className="text-center hero-content">
					        <div className="max-w-md">
					            <h1 className="mb-5 text-5xl font-bold logo">{t('sitename')}</h1>
					        </div>
					    </div>
					</div>
	            </div>*/}
	        </main>
		</>
	)
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }