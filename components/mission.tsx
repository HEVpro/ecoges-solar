import Data from '../data.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {MyCards} from "../utils/types";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const icons = require("@fortawesome/free-solid-svg-icons")

const Mission = () => {
    const  router = useRouter()
    const locale = router.locale
    const { t } = useTranslation('common');
    const [myCards, setMyCards] = useState<MyCards[]>([])

    useEffect(() =>{
      setMyCards(t('cards', {returnObjects:true})) ;
    },[locale])

    return (
        <div
            id="mission"
            className="bg-darkGreen">
            <div className="max-w-4xl mx-auto px-4 py-16 px-8 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                <h2 className="text-5xl text-white font-extrabold tracking-tight font-Inter text-center sm:text-left">{t('mission')}</h2>
                <div
                    className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {myCards.map((feature, index) => (
                        <div key={index}>
                            <div className="flex flex-col items-center justify-center sm:items-start">
                                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                                 <FontAwesomeIcon className="bg-secondaryGreen text-darkGreen w-14 h-14 p-3 rounded-md" icon={icons[feature.icon]}/>
                                </span>
                            </div>
                            <div className="mt-6 text-center sm:text-left">
                                <h3 className="text-2xl font-semibold text-white ">{feature.title}</h3>
                                <p className="mt-2 text-2xl text-white">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mission;