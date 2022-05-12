import type {GetStaticProps, NextPage} from 'next'
import Navbar from "../components/navbar";
import Head from "next/head";
import Data from '../data.json'
import Hero from '../components/hero'
import About from "../components/about";
import Mission from "../components/mission";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Whatsapp from "../components/whatsapp";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from '../next-i18next.config.js';
import Script from "next/script";


const Home: NextPage = () => {
    return (
        <div className="flex flex-col justify-items-end">
            <Head>
            <title>{Data.pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            {/*// @ts-ignore*/}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400&family=Inter:wght@300;500;800&display=swap"
                rel="stylesheet"/>
        </Head>
            <Script
                id="crisp-widget"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                          window.$crisp=[];
                          window.CRISP_WEBSITE_ID=${process.env.NEXT_PUBLIC_CRISP_ID};
                          (function(){
                            const d = document;
                            const s = d.createElement("script");
                            s.src = "https://client.crisp.chat/l.js";
                            s.async = 1;
                            d.getElementsByTagName("head")[0].appendChild(s);
                          })();`,
                }}
            />;
            <Navbar/>
            <Hero/>
            <Header/>
            <About/>
            <Mission/>
            <Contact/>
            <Footer/>
            <Whatsapp />
        </div>
    )
}

export default Home

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
            // Will be passed to the page component as props
        },
    };
}