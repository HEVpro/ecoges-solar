import Data from '../data.json';

import PrimaryButton from "./atoms/button";

const Hero = () => {
    return (
        <div className="relative">
            <div
                className="absolute z-30 p-5 text-2xl text-white bg-opacity-60 bg-gray-800 w-full h-full rounded-bl-[85px]"
            >
                <div className="flex flex-col pt-24 w-full text-center items-center">
                    <h1 className="text-white text-4xl sm:text-6xl font-semibold w-[20ch] leading-tight font-Inter">{Data.hero.title}</h1>
                    <h1 className="text-white text-md  w-[36ch] sm:w-[50ch] my-6">{Data.hero.description}</h1>
                    <PrimaryButton target="#" content={Data.hero.button} classname="w-36 mb-8"/>
                </div>

            </div>
            <div className="w-screen sm:hidden">
                <video autoPlay loop muted playsInline  className="rounded-bl-[85px]">
                    <source src='/video-mobile.mp4' type='video/mp4' />
                </video>
            </div>
            <div className="hidden sm:block w-screen lg:hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={"/video.mp4"}
                    className="rounded-bl-[85px]"
                />
            </div>
            <div className="hidden lg:block w-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={"/video-cut.mp4"}
                    className="rounded-bl-[85px]"
                />
            </div>
        </div>
    )
}

export default Hero;

