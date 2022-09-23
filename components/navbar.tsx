import {useEffect, useState} from "react";
import Logo from '../public/ecoges-logo.png'
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./atoms/button";
import ResponsiveMenu from "./atoms/responsive-menu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Languages from "./atoms/languages";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";


const icons = require("@fortawesome/free-solid-svg-icons")

const myIcons = [
    {name: "test", icon: "faBars"}
]

interface Navbar {
    name: string;
    link: string;
}

const Navbar = () => {
    const [menuResponsive, setMenuResponsive] = useState<boolean>(false)
    const handleResponsiveMenu = () => {
        menuResponsive ? setMenuResponsive(false) : setMenuResponsive(true)
    }
    const [navbar, setNavbar] = useState<Navbar[]>([])
    const router = useRouter()
    const {t} = useTranslation('common');

    useEffect(() => {
        setNavbar(t('navbar-footer', {returnObjects: true}))
    }, [router.locale])

    return (
        <nav
            className="z-50 w-full bg-darkGreen flex items-center justify-evenly sm:justify-between py-2  px-2 font-Barlow relative text-white">
            <div className="w-40 ml-0 mr-4 md:ml-28">
                <Link href="/">
                    <a href={"/"}>
                        <Image src={Logo} layout="responsive" alt={"Ecoges logo"}/>
                    </a>
                </Link>
            </div>
            <div className="hidden lg:block w-1/3  flex justify-between text-white">
                {navbar.map((x, index) => {
                    return (
                        <Link key={index} href={"#" + x.link}>
                            <a className="mx-3 lg:mx-3 xl:mx-6 hover:text-softGreen hover:underline hover:decoration-2 hover:decoration-white hover:underline-offset-4">{x.name}</a>
                        </Link>
                    )
                })}
            </div>
            <div className="flex p-1 items-center justify-between">
                <Languages/>
                <PrimaryButton target="#contact" content={t('contact')} classname="mr-0 md:mr-8 hidden sm:block"/>
            </div>
            <ResponsiveMenu edit={menuResponsive} setEdit={setMenuResponsive}/>
            <button className="block lg:hidden" aria-label={"Open responsive menu"} onClick={handleResponsiveMenu}><FontAwesomeIcon
                className="text-5xl text-white w-10 h-10" icon={icons[myIcons[0].icon]} /></button>
        </nav>
    )
}

export default Navbar;
