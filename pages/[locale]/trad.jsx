import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import orderBy from "lodash/orderBy"
import moment from "moment"
import Link from '@/components/Link'
import Card from '@/components/Card'

const namespaces = ['common', 'translation'];
export default function Translation() {
    const { t } = useTranslation(namespaces)

    // Sort projects by most recent updates in projects' histories
	const projects = orderBy(t('translation:projects'), [(proj) => moment(orderBy(proj.history, [(h) => moment(h.date, "DD/MM/YYYY").toDate()], ["desc"])[0].date, "DD/MM/YYYY").toDate()], ["desc"])

    return (
    	<>
    		<Head>
    			<title>{`${t('sitename')} – ${t('translation:title')}`}</title>
    		</Head>

	        <main className="flex flex-col mx-5 md:mx-10 my-5 md:my-10">
			    <div className="grid p-4 card bg-base-300 rounded-box">
			    	<p className="text-4xl underline underline-offset-4 mb-2">{t('translation:title')}</p>
			    	<p className="text-lg mb-3">{t('translation:description')}</p>
			    	<u>{t('translation:langlevels')}</u>
			    	<ul className="list-['–\0020'] list-inside">
			    	{t('translation:levels').map((lang) => (
			    		<li key={lang.language}>
			    			{<span className="font-mono">{lang.language}</span>}{t('colon')}{lang.explanation ? <abbr data-tip={lang.explanation} className="tooltip underline decoration-dashed">{lang.level}</abbr> : <span>{lang.level}</span>}
			    			{lang.badge && <span className="badge ml-1">{lang.badge?.icon && <i className={lang.badge.icon + " fa-duotone pt-[1px] mr-1"}></i>}{lang.badge.label}</span>}
			    		</li>
			    	))}
			    	</ul>
			    	<i className="italic text-sm pt-1">{t('translation:evaluation')}</i>
			    </div>

				{/*<div className="alert mt-3 alert-info">
					<div className="flex-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
					    	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>                          
					    </svg>
						<label>Need to translate a game, a document, a website...? <a href="contact.html" className="underline">Contact me!</a></label>
					</div>
				</div>*/}

			    <div className="divider my-8"></div>

			    {projects.length > 0 ? (
			    	<>
			    		<Card project={projects[0]} first type="trad" className="mb-5" />

						{projects.length > 1 && (
							<div className="grid rounded-box grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
								{projects.slice(1).map((project, index) => (
			    					<Card key={index} project={project} type="trad" />
								))}
							</div>
						)}
					</>
				) : (
					<p>{t('empty')}</p>
				)}

			    {t("translation:reviews").length > 0 && (
			    	<>
				    	<div className="divider mb-8"></div>

				    	{t("translation:reviews").sort(() => 0.5 - Math.random()).slice(0, 2).map((review, index) => (
							<div key={index} className={"chat mb-3 " + (index & 1 ? "chat-start" : "chat-end")}>
								<div className="max-w-4xl chat-bubble bg-base-300 text-base-content">{review.review}</div>
							 	<div className="chat-footer">
								    — {review.author}
								</div>
							</div>
				    	))}
			    	</>
				)}

	        </main>
		</>
	)
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }