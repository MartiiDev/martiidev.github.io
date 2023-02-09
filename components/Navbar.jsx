<<<<<<< HEAD
import { useTranslation } from 'next-i18next'
import LanguageSwitch from "@/components/LanguageSwitch"
import Link from '@/components/Link'

export function navItems() {
    const { t } = useTranslation('common')
    return [
        {
            "title": t('home'),
            "href": "/"
        },
        {
            "title": t('development'),
            "href": "/dev"
        },
        {
            "title": t('translation'),
            "href": "/trad"
        },
        // {
        //     "title": t('contact'),
        //     "href": "/contact"
        // }
    ]
}

export default function Navbar() {
	const { t } = useTranslation('common')

	return (
        <div className="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-base-300 bg-base-100 text-base-content sticky">
            <div className="max-w-7xl navbar mx-auto flex items-stretch">
                <div className="flex-none">
                    <label htmlFor="main-menu" className="btn btn-square btn-ghost drawer-button md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="flex items-center flex-none">
                    <Link href="/" className="px-2 flex-0 btn btn-ghost md:px-4">
                        <div className="inline-block text-3xl font-title capitalize"><i className="fa-duotone fa-cat"></i> {t('sitename')}</div>
                    </Link>
                </div>

                <div className="flex-1 md:hidden"></div>
                <div className="px-2 mx-auto hidden md:flex">
		            <div className="flex items-stretch gap-1">
                        {navItems().map((item) => (
                            <Link key={item.title} className="btn btn-ghost btn-sm rounded-btn" href={item.href}>{item.title}</Link>
                        ))}
		            </div>
		        </div>

		        <div>
                    <button data-set-theme="dark" data-act-class="hidden" className="btn btn-square btn-ghost">
                        <i className="fa-moon-stars fa-duotone fa-xl"></i>
                    </button>
                    <button data-set-theme="light" data-act-class="hidden" className="hidden btn btn-square btn-ghost">
                        <i className="fa-sun-cloud fa-duotone fa-xl"></i>
                    </button>
                    <LanguageSwitch/>
            	</div>
            </div>
        </div>
	)
=======
import { useTranslation } from 'next-i18next'
import LanguageSwitch from "@/components/LanguageSwitch"
import Link from '@/components/Link'

export function navItems() {
    const { t } = useTranslation('common')
    return [
        {
            "title": t('home'),
            "href": "/"
        },
        {
            "title": t('development'),
            "href": "/dev"
        },
        {
            "title": t('translation'),
            "href": "/trad"
        },
        // {
        //     "title": t('contact'),
        //     "href": "/contact"
        // }
    ]
}

export default function Navbar() {
	const { t } = useTranslation('common')

	return (
        <div className="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b border-base-300 bg-base-100 text-base-content sticky">
            <div className="max-w-7xl mx-auto navbar max-w-none flex items-stretch">
                <div className="flex-none">
                    <label htmlFor="main-menu" className="btn btn-square btn-ghost drawer-button md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <div className="flex items-center flex-none">
                    <Link href="/" className="px-2 flex-0 btn btn-ghost md:px-4">
                        <div className="inline-block text-3xl font-title capitalize"><i className="fa-duotone fa-cat"></i> {t('sitename')}</div>
                    </Link>
                </div>

                <div className="flex-1 md:hidden"></div>
                <div className="px-2 mx-auto hidden md:flex">
		            <div className="flex items-stretch gap-1">
                        {navItems().map((item) => (
                            <Link key={item.title} className="btn btn-ghost btn-sm rounded-btn" href={item.href}>{item.title}</Link>
                        ))}
		            </div>
		        </div>

		        <div>
                    <button data-set-theme="dark" data-act-class="hidden" className="btn btn-square btn-ghost">
                        <i className="fa-moon-stars fa-duotone fa-xl"></i>
                    </button>
                    <button data-set-theme="light" data-act-class="hidden" className="hidden btn btn-square btn-ghost">
                        <i className="fa-sun-cloud fa-duotone fa-xl"></i>
                    </button>
                    <LanguageSwitch/>
            	</div>
            </div>
        </div>
	)
>>>>>>> 4067b622b721f8c96eb82701d1fa8cdd3ca537df
}