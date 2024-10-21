import { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import orderBy from "lodash/orderBy"
import moment from "moment"
import { useRouter } from "next/router"
import Link from '@/components/Link'

export default function Card({ project, type = "trad", className = "", first = false, ...rest }) {
	const [showModal, setShowModal] = useState(false)
	const [currentImage, setCurrentImage] = useState()
	const [showImage, setShowImage] = useState()
	const history = orderBy(project.history, [(h) => moment(h.date, "DD/MM/YYYY").toDate()], ["desc"])
    const { t } = useTranslation(['common', 'translation', 'development'])
    const { asPath } = useRouter()

	return (
		<>
			<div className={"card " + (first ? "lg:card-side bg-base-200 " : "lg:card-side card-bordered border-2 border-base-200 ") + className} {...rest}>
			    <div className="card-body flex flex-col justify-between">
			    	<div>
				        <div className="flex gap-2 mb-2">
				            {project.nsfw && <div className="badge badge-error gap-1"><i className="fa-solid pt-px fa-hexagon-exclamation"></i> {t('nsfw')}</div>}
					        {(typeof project.genre === 'string' ? [project.genre] : project.genre).map((genre) => (
					        	<div key={genre} className="badge badge-outline">{genre}</div>
					        ))}
				        </div>

				        <h2 className={"card-title flex font-mono my-2 " + (first ? "gap-4" : "justify-between")}>
				        	{project.title}
				        </h2>

				        {project.description && <p dangerouslySetInnerHTML={{__html: first ? project.description : project.description.replace(/^(.{95}[^\s]*).*/, "$1 ...")}}></p>}
			        </div>

			        <div className="card-actions mt-2">
			        	<button onClick={() => { setShowModal(true); setCurrentImage(project.title.replaceAll(' ', '-').toLowerCase() + "-" + 1) }} className="btn btn-square btn-sm">
			        		<i className="fa-solid fa-fw fa-question"></i>
					    </button>
			        	{project.links.map((link, index) => (
				            <Link key={index} className={"btn btn-sm " + (index === 0 ? "btn-primary" : "hidden")} href={project.links[index].url} target="_blank">{project.links[index].name}</Link>
			            ))}
			        </div>
			    </div>
			</div>
			
			{showImage && <button onClick={() => setShowImage(null)} className="fixed z-[99999] left-0 top-0 w-screen h-screen backdrop-blur-xl bg-black/50 grid place-content-center" title={t('toggleimage')}><img src={"/images/" + type + "/" + showImage + ".jpg"} className="object-contain max-h-screen max-w-screen" /></button>}
			<div className={(showModal ? "opacity-100 visible pointer-events-auto" : "") + " modal modal-bottom sm:modal-middle"}>
				<div className="modal-box max-h-screen translate-y-0">
					{(project?.images && project?.images > 0) && (
						<div className="mb-2">
							<div className="carousel w-full">
								<button onClick={() => setShowImage(currentImage)} className="group carousel-item w-full" title={t('toggleimage')}>
							    	<img src={currentImage ? ("/images/" + type + "/" + currentImage + ".jpg") : undefined} className="w-full" />
								</button>
							</div>
							{project.images > 1 && (
								<div className="flex justify-center w-full py-2 gap-2">
									{(() => {	
										let imageBtns = []
										for (let i = 1; i <= project.images; i++) {
											let imageName = project.title.replaceAll(' ', '-').toLowerCase() + "-" + i;
											imageBtns.push(
												<button key={imageName + "-btn"} disabled={imageName === currentImage} onClick={() => setCurrentImage(imageName)} className="btn btn-xs">{i}</button>
											)
										}
										return imageBtns;
									})()}
								</div>
							)}
						</div>
					)}

					<h3 className="font-bold font-mono text-xl mb-4">{project.title}</h3>
					
					{project.description && (
						<>
							<h3 className="underline font-semibold">{t("description") + t("colon")}</h3>
							<p className="mb-4" dangerouslySetInnerHTML={{__html: project.description }}></p>
						</>
					)}
					
					{project?.workdescription && (
						<>
							<h3 className="underline font-semibold">{(type === "trad" ? t("translation:workdescription") : t("development:workdescription")) + t("colon")}</h3>
							<p className="mb-4" dangerouslySetInnerHTML={{__html: project.workdescription }}></p>
						</>
					)}

					{history.length !== 0 && (
						<>
							<h3 className="underline font-semibold">{t("history") + t("colon")}</h3>
					        {history.some(gig => gig.description) ? (
						        <ul className="pt-1">
						        	{history.map((gig, index) => (
						        		gig.description && <li key={index} dangerouslySetInnerHTML={{__html: gig.date + t("colon") + gig.description}}></li>
						        	))}
						        </ul>
					        ) : <p>{t('development:startedOn') + t('colon') + history.slice(-1)[0].date }</p>}
				        </>
					)}

			        <div className="card-actions mt-5">
			        	{project.links.map((link, index) => (
				            <Link key={index} className={"btn btn-sm " + (index === 0 ? "btn-primary" : "btn-glass")} href={project.links[index].url} target="_blank">{project.links[index].name}</Link>
			            ))}
			        </div>

					<div className="modal-action">
						<button onClick={() => { setShowModal(false); setCurrentImage(project.title.replaceAll(' ', '-').toLowerCase() + "-" + 1) }} className="btn btn-sm">{t('close')}</button>
					</div>
				</div>
			</div>
		</>
	)
}