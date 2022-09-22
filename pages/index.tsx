import type {GetStaticProps, NextPage} from 'next'
import Navbar from "../components/navbar";
import Hero from '../components/hero'
import About from "../components/about";
import Mission from "../components/mission";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Whatsapp from "../components/whatsapp";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from '../next-i18next.config.js';


const Home: NextPage = () => {
    return (
        <div className="flex flex-col justify-items-end">
            <Navbar/>
            <Hero/>
            <Header/>
            <About/>
            <Mission/>
            <Contact/>
            <Footer/>
            <Whatsapp/>
        </div>
    )
}

export default Home

export async function getStaticProps({locale}: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
            // Will be passed to the page component as props
        },
    };
}
