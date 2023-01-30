import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

// https://locize.com/blog/next-i18n-static/

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} className="h-full">
        <Head>
          <link rel="stylesheet" type="text/css" href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css"></link>
        </Head>
        <body className="h-full flex-grow block bg-base-100 text-base-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument