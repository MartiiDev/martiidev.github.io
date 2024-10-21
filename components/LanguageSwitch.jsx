import languageDetector from '@/lib/languageDetector'
import i18nextConfig from '../next-i18next.config'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Twemoji from '@/components/Twemoji'

export default function LanguageSwitch() {
    const router = useRouter();

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex="0" className="m-1 normal-case btn btn-square btn-ghost">
                <i className="fa-duotone fa-language fa-xl"></i>
            </div>
            <div className="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content w-52 rounded-b-box bg-neutral text-neutral-content">
                <ul className="p-4 menu compact gap-1">

                    {i18nextConfig.i18n.locales.map((locale) => {
                        return (
                            <LanguageSwitchLink
                                locale={locale}
                                key={locale}
                            />
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}


export function LanguageSwitchLink({ locale, ...rest }) {
    const router = useRouter();
    const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

    let href = rest.href || router.asPath;
    let pName = router.pathname;
    Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
            pName = pName.replace(`[${k}]`, locale);
            return;
        }
        pName = pName.replace(`[${k}]`, router.query[k]);
    })
    if (locale) {
        href = rest.href ? `/${locale}${rest.href}` : pName;
    }

    let languageNames = new Intl.DisplayNames([locale], {type: 'language'});
    let localeText = languageNames.of(locale);
    localeText = localeText[0].toUpperCase() + localeText.slice(1);

    let smiley;
    switch (locale) {
      case "en":
        smiley = "gb"
        break;
      case "ja":
        smiley = "jp"
        break;
      default:
        smiley = locale
    }

    return (
        <li>
            <Link
                href={href}
                onClick={() => languageDetector.cache(locale)}
            >
                <Twemoji emoji={smiley} size={18} /> {localeText} {locale === currentLocale && <i className="fa-duotone fa-circle-check pt-px"></i>}
            </Link>
        </li>
    )
}