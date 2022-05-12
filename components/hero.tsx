import {useTranslation} from "next-i18next";

const Hero = () => {
    const {t} = useTranslation('common');


    return (
        <div className="relative">
            <div
                className="absolute top-0 left-0 z-30 text-white w-full h-full bg-opacity-40 bg-gray-800 rounded-bl-[85px]"
            >
                <div className="flex flex-col px-12 w-full text-center items-center sm:mt-10 sm:pt-4 lg:pt-10">
                    <h1 className="text-white text-4xl sm:text-6xl font-semibold w-[12ch] leading-tight font-Inter py-2 lg:mt-10">{t('hero-title')}</h1>
                    <button
                        className="w-44 mx-8 h-12 border-2 border-white rounded-[25px] font-bold mb-4 sm:text-2xl sm:mb-10 mt-2 sm:mt-10 sm:w-72 ">{t('hero-button')}</button>
                </div>
            </div>
            <div className="w-screen sm:hidden">
                <video autoPlay loop muted playsInline  poster={"/thumbnail.jpg"} preload={"true"} className="rounded-bl-[85px]">
                    <source src='/video-mobile.mp4' type='video/mp4' media="all"/>
                    <source src='/video-mobile.webm' type='video/webm' media="all"/>
                </video>
            </div>
            <div className="hidden sm:block w-screen lg:hidden">
                <video autoPlay loop muted playsInline poster={"/thumbnail.jpg"}  preload={"true"} className="rounded-bl-[85px]">
                    <source src='/video.mp4' type='video/mp4' media="all" />
                    <source src='/video.webm' type='video/webm' media="all" />
                </video>
            </div>
            <div className="hidden  lg:inline w-screen">
                <video autoPlay loop muted playsInline poster={"/thumbnail.jpg"}  preload={"true"} className="rounded-bl-[85px]">
                    <source src='/video-cut.mp4' type='video/mp4'/>
                    <source src='/video-cut.webm' type='video/webm' />
                </video>
            </div>

        </div>
    )
}

export default Hero;

