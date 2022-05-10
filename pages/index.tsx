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
            ...(await serverSideTranslations(locale, ['common'])),
            // Will be passed to the page component as props
        },
    };
}