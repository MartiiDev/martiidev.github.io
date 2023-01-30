import { useTranslation } from 'next-i18next'
import Link from '@/components/Link'

export default function Footer() {
    const { t } = useTranslation('common')

	return (
        <footer className="p-4 footer grid-flow-col place-self-center justify-self-end bg-base text-base-content absolute inset-x-0 bottom-0 left-0 right-0">
            <div>
                <p>© <span></span> {t('fullname')}<span className="hidden sm:inline"> – <span>{t('copyright')}</span></span></p>
            </div>
            <div className="grid-flow-col justify-self-end gap-4">
                <span data-tip="Martii#4678" className="tooltip">
                    <i className="fa-brands fa-discord fa-xl cursor-pointer"></i>
                </span>
                <Link href="https://twitter.com/edgarcdrn" target="_blank">
                    <i className="fa-brands fa-twitter fa-xl"></i>
                </Link>
                <Link href="https://github.com/martiidev" target="_blank">
                    <i className="fa-brands fa-github fa-xl"></i>
                </Link>
                <Link href="/contact">
                    <i className="fa-solid fa-envelope fa-xl"></i>
                </Link>
            </div>
        </footer>
	)
}