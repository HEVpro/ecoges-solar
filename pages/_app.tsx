import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import Script from "next/script";
import {useRouter} from "next/router";
import {useEffect} from "react";
import { GTM_ID, pageview } from '../lib/gtm'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        router.events.on('routeChangeComplete', pageview)
        return () => {
            router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])
  return (
      <>
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
