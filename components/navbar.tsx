import Data from '../data.json';
import {FormEvent, useEffect, useState} from "react";
import Logo from '../public/ecoges-logo.png'
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./atoms/button";
import ResponsiveMenu from "./atoms/responsive-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Languages from "./atoms/languages";


const icons = require("@fortawesome/free-solid-svg-icons")

const myIcons = [
    {name: "test", icon: "faBars"}
]

const Navbar = () => {
    const [menuResponsive, setMenuResponsive] = useState<boolean>(false)
    const handleResponsiveMenu = () =>{
        menuResponsive ? setMenuResponsive(false) : setMenuResponsive(true)
    }

    return (
        <nav className="z-50 w-full bg-darkGreen flex items-center justify-evenly sm:justify-between py-2 px-6 font-Barlow relative text-white">
            <div className="ml-0 mr-4 md:ml-28">
                <Link href="/">
                    <a>
                        <Image src={Logo} width={200} height={62}/>
                    </a>
                </Link>
            </div>
            <div className="hidden lg:block w-1/3  flex justify-between text-white">
                {Data.navbar.map((x, index) => {
                    return (
                        <Link key={index} href={"#"+x}>
                            <a className="mx-6 hover:text-white hover:underline hover:decoration-2 hover:decoration-white hover:underline-offset-4">{x}</a>
                        </Link>
                    )
                })}
            </div>
            <div>
                <Languages />
            </div>
            <ResponsiveMenu edit={menuResponsive} setEdit={setMenuResponsive} />
            <button className="block lg:hidden" onClick={handleResponsiveMenu}><FontAwesomeIcon className="text-5xl text-white w-10 h-10" icon={icons[myIcons[0].icon]} /></button>
            <PrimaryButton target="#Contacto" content="Contacto" classname="mr-0 md:mr-8 hidden sm:block"/>
        </nav>
    )
}

export default Navbar;