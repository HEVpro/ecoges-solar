import type {NextPage} from 'next'
import Footer from "../components/footer";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/ecoges-logo.png";
import PrimaryButton from "../components/atoms/button";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const Home: NextPage = () => {
    const { t } = useTranslation('privacy');

    return (
        <div className="font-Barlow">
            <nav
                className="z-50 w-full bg-darkGreen flex items-center justify-evenly sm:justify-between py-2  font-Barlow relative text-white">
                <div className="ml-0 mr-4 md:ml-28">
                    <Link href="/">
                        <a>
                            <Image src={Logo} width={200} height={62}/>
                        </a>
                    </Link>
                </div>
                <PrimaryButton target={"/"} content={t('button')} classname={"mr-6"}/>
            </nav>
            <div className="flex items-center justify-center py-6">
                <div className="w-[85%] md:w-2/3 px-4 font-Barlow text-justify">
                    <h1 className="text-3xl font-bold my-2 text-center">{t('title')}</h1>
                    <span>{t('first-text')}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{t('info-title')}</h2>
                    <span>{t('info-description')}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{t('use-title')}</h2>
                    <span>{t('use-description')}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{t('cookies-title')}</h2>
                    <span>{t('cookies-description')}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{t('links-title')}</h2>
                    <span>{t('links-description')}</span>
                    <h2 className="text-2xl font-bold my-1 text-center">{t('control-title')}</h2>
                    <span>{t('control-description')}</span>
                </div>
            </div>
            <Footer />
        </div>
)
}

export default Home

export async function getStaticProps({ locale }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['privacy'], nextI18NextConfig)),
            // Will be passed to the page component as props
        },
    };
}
