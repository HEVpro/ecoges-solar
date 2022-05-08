import Data from '../data.json';
import Landscape from '../public/landscape.jpg'
import Landscape2 from '../public/landscape-2.jpg'
import Image from 'next/image'


const About = () => {
    const first = Data.about.second
    const second = Data.about.second
    return (
        <div
            id={Data.about.id}
            className="flex flex-col w-full bg-bone flex py-2  rounded-bl-[85px] items-start justify-center p-8 sm:p-12 lg:p-28 h-full mt-10">
            {first && (
                <>
                    <div className="flex items-center justify-between w-full font-Inter">
                        <div className="w-[65ch] sm:w-[53ch] lg:w-[65ch]">
                            <h1 className="text-4xl sm:text-5xl font-semibold">{first.title}</h1>
                        </div>
                        <h1 className="hidden sm:block text-[90px] font-bold text-gray-300 ">01</h1>
                    </div>
                    <div className="w-[36ch] sm:w-[66ch] lg:w-[75ch] my-6">
                        <span className="my-16">{first.description}</span>
                    </div>
                    <div className="w-full my-6">
                        <Image className="object-contain" src={Landscape} width={2100} height={652} priority/>
                    </div>
                </>
            )}
            {second && (
                <>
                    <div className="flex items-center justify-between w-full font-Inter">
                        <div className="w-[65ch] sm:w-[53ch] lg:w-[65ch]">
                            <h1 className="text-4xl sm:text-5xl font-semibold">{second.title}</h1>
                        </div>
                        <h1 className="hidden sm:block text-[90px] font-bold text-gray-300 ">02</h1>
                    </div>
                    <div className="w-[36ch] sm:w-[66ch] lg:w-[75ch] my-6">
                        <span className="my-16">{second.description}</span>
                    </div>
                    <div className="w-full my-6">
                        <Image className="object-contain" src={Landscape2} width={2100} height={652} priority/>
                    </div>
                </>
            )}

        </div>
    )
}

export default About;