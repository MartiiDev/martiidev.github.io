import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import Link from '@/components/Link'

const namespaces = ['common', 'home'];
export default function Index() {
    const { t } = useTranslation(namespaces)

    return (
    	<>
    		<Head>
    			<title>{`${t('sitename')} – ${t('home:title')}`}</title>
    		</Head>

	        <main className="grow">
	            <div className="md:p-10 relative">
	        		<div className="hero h-[30rem]">
					    <div className="text-center hero-content">
					        <div className="max-w-md">
					            <h1 className="mb-5 text-5xl font-bold logo">{t('sitename')}</h1>
					            <p className="mb-5">{t('home:intro')}</p>
					            <a className="btn btn-info" href={"#" + t('home:about.href')}>{t('home:cta')}</a>
					        </div>
					    </div>
					</div>
	            </div>

				<div id={t('home:about.href')} className="modal modal-bottom sm:modal-middle">
					<div className="modal-box text-left">
				    	<p dangerouslySetInnerHTML={{__html: t('home:about.header')}}></p><br/>
				    	
				    	<b dangerouslySetInnerHTML={{__html: t('home:about.section1')}}></b><br/>
				    	<p dangerouslySetInnerHTML={{__html: t('home:about.content1', { age: Math.floor((new Date() - new Date('2003-03-01').getTime()) / 3.15576e+10) })}}></p><br/>

				    	<b dangerouslySetInnerHTML={{__html: t('home:about.section2')}}></b><br/>
				    	<p dangerouslySetInnerHTML={{__html: t('home:about.content2')}}></p>

				    	<div className="modal-action">
					    	<a href="#" className="btn">{t('close')}</a>
				    	</div>
				  	</div>
				</div>
	        </main>
		</>
	)
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }