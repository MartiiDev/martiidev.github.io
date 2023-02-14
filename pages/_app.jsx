import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'
import { themeChange } from 'theme-change'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Drawer, Sidebar } from '@/components/Sidebar'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  	const router = useRouter()
    useEffect(() => {
        themeChange(false)
    });

	return (
		<>
			<Script
		        src="https://www.googletagmanager.com/gtag/js?id=G-73P1TDHSHM"
		        strategy="afterInteractive"
		      />
			<Script id="google-analytics" strategy="afterInteractive">
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-73P1TDHSHM');
			`}
			</Script>

			<div className="drawer drawer-mobile">
	        	<input id="main-menu" type="checkbox" className="drawer-toggle" />
	        	<div className="drawer-content flex flex-col content-around items-center">
					<Navbar />

	                {router.route.split('/')[2] === "admin" ? (
	                	<div className="w-full flex grow justify-between">
	                		<div className="hidden md:flex flex-none w-56">
	                			<Sidebar />
	                		</div>

	                		<div className="max-w-7xl grow flex flex-col justify-between">
	                			<Component {...pageProps} />
								<Footer />
	                		</div>
	                	</div>
	                ) : (
	                	<div className="w-full max-w-7xl grow flex flex-col justify-between">
	            			<Component {...pageProps} />
							<Footer />
	            		</div>
	                )}

				</div>

				<Drawer />
			</div>
		</>
	)
}

export default appWithTranslation(MyApp)