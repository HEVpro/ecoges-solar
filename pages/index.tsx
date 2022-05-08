import type {NextPage} from 'next'
import Navbar from "../components/navbar";
import Head from "next/head";
import Data from '../data.json'
import Hero from '../components/hero'
import About from "../components/about";
import Mission from "../components/mission";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Whatsapp from "../components/whatsapp";

const Home: NextPage = () => {
    return (
        <div>
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
