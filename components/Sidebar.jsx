import { useTranslation } from 'next-i18next'
import { navItems } from '@/components/Navbar'
import Link from '@/components/Link'

export function Drawer() {
    const { t } = useTranslation('common')

	return (
        <div className="drawer-side">
            <label htmlFor="main-menu" className="md:hidden drawer-overlay"></label>
            <aside className="md:hidden flex flex-col justify-between border-r border-base-200 bg-base-100 text-base-content w-80 min-h-screen">
                <ul className="menu flex flex-col p-4 pt-0">
	                <div className="py-1 -mx-4 border-b md:block border-base-200 bg-base-100">
	                    <div className="mx-auto space-x-1 navbar max-w-none">
							<div className="flex-none">
		                        <label id="closeBtn" htmlFor="main-menu" className="btn btn-square btn-ghost drawer-button">
		                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
		                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
		                            </svg>
		                        </label>
		                    </div>
	                        <div className="flex items-center flex-none">
	                            <Link onClick={() => document.getElementById("closeBtn").click()} href="/" className="px-2 flex-0 btn btn-ghost md:px-4">
		                            <div className="inline-block text-3xl font-title capitalize"><i className="fa-duotone fa-cat"></i> Martii</div>
	                            </Link>
	                        </div>
	                    </div>
	                </div>

		            <div className="pt-3 space-y-3">
                        {navItems().map((item) => (
                            <li key={item.title}>
                            	<Link href={item.href} onClick={() => document.getElementById("closeBtn").click()}>{item.title}</Link>
                            </li>
                        ))}
		            </div>

                </ul>
            </aside>
        </div>
	)
}