import {Html, Head, Main, NextScript} from 'next/document'
import { GTM_ID } from '../lib/gtm'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,300;0,500;1,200&family=Inter:wght@100;300;400;500&display=swap"
                    rel="stylesheet"/>
            </Head>
            <body>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
