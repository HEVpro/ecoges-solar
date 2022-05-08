import Data from '../data.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {MyCards} from "../utils/types";

const icons = require("@fortawesome/free-solid-svg-icons")

const Mission = () => {
    const [myCards, setMyCards] = useState<MyCards[]>([])

    useEffect(() =>{
      setMyCards(Data.mission.Cards)  ;
    },[])

    return (
        <div
            id={Data.mission.id}
            className="bg-secondaryGreen">
            <div className="max-w-4xl mx-auto px-4 py-16 px-8 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                <h2 className="text-5xl font-extrabold tracking-tight font-Inter">{Data.mission.Title}</h2>
                <div
                    className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {myCards.map((feature, index) => (
                        <div key={index}>
                            <div className="">
                                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                                 <FontAwesomeIcon className="bg-darkGreen text-white w-14 h-14 p-3 rounded-md" icon={icons[feature.icon]}/>
                                </span>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-medium">{feature.title}</h3>
                                <p className="mt-2 text-base text-stone-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mission;