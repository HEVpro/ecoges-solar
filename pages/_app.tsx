import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {appWithTranslation} from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import Script from "next/script";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {GTM_ID, pageview} from '../lib/gtm'
import {FB_PIXEL_ID} from "../lib/fbq"

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.init(FB_PIXEL_ID as string)
                ReactPixel.pageView()
            })
    }, [])

    useEffect(() => {
        // This pageview only triggers the first time (it's important for Pixel to have real information)
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.pageView()
            })

        const handleRouteChange = () => {
            import('react-facebook-pixel')
                .then(module => module.default)
                .then(ReactPixel => {
                    ReactPixel.pageView()
                })
        }
        router.events.on('routeChangeComplete', pageview)
        return () => {
            router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])
    return (
        <>
            {/*Facebook Pixel*/}
            <Script
                id="fb-pixel"
                type={"text/plain"}
                className={"optanon-category-C0001-C0002-C0003-C0004"}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', ${FB_PIXEL_ID});
                          `,
                }}
            />
            {/* Google Tag Manager - Global base code */}
            <Script
                id="gtag-base"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
            document.addEventListener('DOMContentLoaded', function(){document.addEventListener('click', function(e){var clickedElement = (e.target);
\t\tvar clickedAnchor = e.target.tagName == 'A' ? e.target : (clickedElement.closest('a'));
        // conversión de Llamadas - Google Ads
\t\tif(clickedAnchor.href.includes('tel:')) {console.log("Llamada");
            gtag('event', 'conversion', {'send_to': '${GTM_ID}/sAK_CILKkOYDELT8vv4o'});};
        // conversión de Whatsapp - Google Ads
        if(clickedAnchor.href.includes('wa.me')) {console.log("Whatsapp");
            gtag('event', 'conversion', {'send_to': '${GTM_ID}/3tW0CIXKkOYDELT8vv4o'});};});
                // conversión de Solicitud de presupuesto - Google Ads
                    if (window.location.href.includes('/gracias')){
                        console.log('Cotización enviada');
                        gtag('event', 'conversion', {'send_to': '${GTM_ID}/C1ohCP_JkOYDELT8vv4o'});
                    }
                // conversión de Formulario de contacto - Google Ads
                    var googleMessage = "Correo enviado correctamente, en breves nos pondremos en contacto contigo";
                
                    (function googleFormValidation() {
                        if(document.body.innerText.includes(googleMessage)) {
                            console.log("Your form has been sent");
                            gtag('event', 'conversion', {'send_to': '${GTM_ID}/bBkTCIjKkOYDELT8vv4o'});
                    }else {
                      setTimeout(googleFormValidation, 500);
                    }
                  })();
                });
          `,

                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig);
