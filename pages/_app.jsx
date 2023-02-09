import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { themeChange } from 'theme-change'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Drawer, Sidebar } from '@/components/Sidebar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }) => {
  	const router = useRouter()
    useEffect(() => {
        themeChange(false)
    });

	return (
		<div className="drawer drawer-mobile">
        	<input id="main-menu" type="checkbox" className="drawer-toggle" />
        	<div className="drawer-content flex flex-col content-around items-center">
				<Navbar />

                {router.route.split('/')[2] === "admin" ? (
                	<div className="flex">
                		<div className="hidden md:flex flex-none w-56">
                			<Sidebar />
                		</div>

                		<div className="max-w-7xl contents">
                			<Component {...pageProps} />
                		</div>
                	</div>
                ) : (
                	<div className="max-w-7xl contents">
            			<Component {...pageProps} />
            		</div>
                )}

				<Footer />
			</div>

			<Drawer />
		</div>
	)
}

export default appWithTranslation(MyApp)