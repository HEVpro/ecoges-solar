import {useTranslation} from "next-i18next";
import Image from 'next/image'
import HeroBg from '../public/hero-bg.jpg'
import {useRouter} from "next/router";

const Hero = () => {
    const {t} = useTranslation('common');
    const router = useRouter();

    return (
        <div className="relative">
            <div
                className="absolute top-0 left-0 z-30 text-white w-full  bg-opacity-40 bg-gray-800 rounded-bl-[85px] h-[96%] sm:h-[98%] md:h-[99%]"
            >
                <div className="flex flex-col px-12 w-full text-center items-center sm:mt-10 sm:pt-4 lg:pt-10">
                    <h1 className="text-white text-3xl sm:text-6xl font-semibold w-[16ch] leading-tight font-Barlow py-2 mt-4 lg:mt-10">{t('hero-title')}</h1>
                    <button
                        onClick={() => router.push("/presupuesto")}
                        className="w-44 mx-8 h-12 border-2 border-white rounded-[25px] font-bold mb-10 sm:text-2xl sm:mb-10 mt-2 sm:mt-10 sm:w-72 ">{t('hero-button')}</button>
                </div>
            </div>
            <div className={"w-full h-full md:h-[98%]"}>
                <Image src={HeroBg} className={"rounded-bl-[85px]"} priority quality={50} placeholder={"blur"}/>
            </div>
        </div>
    )
}

export default Hero;

