import Landscape from '../public/landscape.jpg'
import Landscape2 from '../public/landscape-2.jpg'
import Image from 'next/image'
import {useTranslation} from "next-i18next";


const About = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div
                id="aids"
                className="flex flex-col w-full bg-bone flex items-start justify-center px-8 sm:px-12 lg:px-28 h-full">
                        <div className="flex items-center justify-between w-full font-Inter">
                            <div className="w-[65ch] sm:w-[53ch] lg:w-[65ch]">
                                <h1 className="text-4xl sm:text-5xl font-semibold">{t('aids')}</h1>
                            </div>
                            <h1 className="hidden sm:block text-[90px] font-bold text-black opacity-50 ">01</h1>
                        </div>
                        <div className="w-full my-6">
                            <Image className="object-contain" src={Landscape} width={2100} height={652} priority alt={"Colonial house with solar panel on the roof"}/>
                        </div>
            </div>
            <div id="equipment"
                 className="flex flex-col w-full bg-bone flex  items-start justify-center px-8 sm:px-12 lg:px-28 h-full">
                <div className="flex items-center justify-between w-full font-Inter">
                    <div className="w-[65ch] sm:w-[53ch] lg:w-[90ch]">
                        <h1 className="text-4xl sm:text-5xl font-semibold">{t('equipment')}</h1>
                    </div>
                    <h1 className="hidden sm:block text-[90px] font-bold text-black opacity-50">02</h1>
                </div>
                <div className="w-full my-6">
                    <Image className="object-contain" src={Landscape2} width={2100} height={652} priority alt={"Family house with solar panel on the roof"}/>
                </div>
            </div>
        </>

    )
}

export default About;