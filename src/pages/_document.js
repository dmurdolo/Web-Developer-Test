import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name='application-name' content='💡 My App' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content='My App' />
                    <meta name='description' content='The craziest alpaca app in the world' />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#2B5797' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#000000' />
                    
                    <link rel='apple-touch-icon' sizes='180x180' href='/public/icons/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/public/icons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/public/icons/favicon-16x16.png' />
                    <link rel='manifest' href='/public/manifest.json' />
                    <link rel='mask-icon' href='/public/icons/safari-pinned-tab.svg' color='#5bbad5' />
                    <link rel='shortcut icon' href='/public/icons/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
