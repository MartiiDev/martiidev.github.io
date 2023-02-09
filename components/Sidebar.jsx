import { useTranslation } from 'next-i18next'
import { navItems } from '@/components/Navbar'
import Link from '@/components/Link'
import { useRouter } from 'next/router'

export function adminItems() {
    const { t } = useTranslation('common')
    return [
        {
            "title": t('translation'),
            "href": "/admin/trad"
        },
        {
            "title": t('development'),
            "href": "/admin/dev"
        }

    ]
}

export function Drawer() {
    const { t } = useTranslation('common')
  	const router = useRouter()

	return (
        <div className="drawer-side">
            <label htmlFor="main-menu" className="md:hidden drawer-overlay"></label>
            <aside className="md:hidden flex flex-col justify-between border-r border-base-200 bg-base-100 text-base-content w-80 min-h-screen">
                <ul className="menu flex flex-col p-4 pt-0">
	                <div className="py-1 -mx-4 border-b md:block border-base-200 bg-base-100">
	                    <div className="mx-auto space-x-1 navbar max-w-none">
							<div className="flex-none">
		                        <label htmlFor="main-menu" className="btn btn-square btn-ghost drawer-button">
		                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
		                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
		                            </svg>
		                        </label>
		                    </div>
	                        <div className="flex items-center flex-none">
	                            <a href="/" className="px-2 flex-0 btn btn-ghost md:px-4">
		                            <div className="inline-block text-3xl font-title capitalize"><i className="fa-duotone fa-cat"></i> Martii</div>
	                            </a>
	                        </div>
	                    </div>
	                </div>

		            <div className="pt-3 space-y-3">
                        {navItems().map((item) => (
                            <li key={item.title}>
                            	<Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
		            </div>

                    {router.route.split('/')[2] === "admin" && (
		            	<div className="pt-5 space-y-3">
                        	<div className="divider mt-5">Administration</div>
	                        {adminItems().map((item) => (
	                            <li key={item.title}>
	                            	<Link href={item.href}>{item.title}</Link>
	                            </li>
	                        ))}
		            	</div>
					)}

                </ul>
            </aside>
        </div>
	)
}

export function Sidebar() {
    const { t } = useTranslation('common')
  	const router = useRouter()

	return (
		<ul className="menu h-full w-56 p-2 fixed border-r border-base-300 bg-base-100 shadow-xl space-y-2">
			<li className="menu-title my-2">
				<span className="!text-lg text-center font-mono !text-base-content !font-medium underline underline-offset-4">Administration</span>
			</li>

	        {adminItems().map((item) => (
	            <li key={item.title}>
	            	<Link href={item.href}>{item.title}</Link>
	            </li>
	        ))}
		</ul>
	)
}