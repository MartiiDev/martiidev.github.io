import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import orderBy from "lodash/orderBy"
import moment from "moment"
import Link from '@/components/Link'
import Card from '@/components/Card'

const namespaces = ['common', 'development'];
export default function Development() {
    const { t } = useTranslation(namespaces)

    // Sort projects by most recent updates in projects' histories
	const projects = orderBy(t('development:projects'), [(proj) => moment(orderBy(proj.history, [(h) => moment(h.date, "DD/MM/YYYY").toDate()], ["desc"])[0].date, "DD/MM/YYYY").toDate()], ["desc"])

    return (
    	<>
    		<Head>
    			<title>{`${t('sitename')} – ${t('development:title')}`}</title>
    		</Head>

	        <main className="flex flex-col mx-5 mt-5 md:mt-10">
			    <div className="grid p-4 card bg-base-300 rounded-box">
			    	<p className="text-4xl underline underline-offset-4 mb-2">{t('development:title')}</p>
			    	<p className="text-lg mb-3">{t('development:description')}</p>
			    	<u>{t('development:skills')}</u>
			    	<ul className="list-['–\0020'] list-inside">
			    	{t('development:skillset').map((skill) => (
			    		<li key={skill.skill}>
			    			{<span className="font-mono">{skill.skill}</span>}{t('colon')}{skill.explanation ? <abbr data-tip={skill.explanation} className="tooltip underline decoration-dashed">{skill.description}</abbr> : <span>{skill.description}</span>}
			    		</li>
			    	))}
			    	</ul>
			    	<i className="italic text-sm pt-1">{t('development:notonly')}</i>
			    </div>

			    <div className="divider my-8"></div>

			    {projects.length > 0 ? (
			    	<>
			    		<Card project={projects[0]} first type="dev" className="mb-5" />

						{projects?.length > 1 && (
							<div className="grid rounded-box grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
								{projects.slice(1).map((project, index) => (
			    					<Card key={index} project={project} type="dev" />
								))}
							</div>
						)}
					</>
				) : (
					<p>{t('empty')}</p>
				)}

	        </main>
		</>
	)
}

const getStaticProps = makeStaticProps(namespaces)
export { getStaticPaths, getStaticProps }