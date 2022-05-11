import Data from '../data.json';
import {useState} from "react";
import Logo from '../public/dark-logo.png'
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./atoms/button";
import ResponsiveMenu from "./atoms/responsive-menu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {MailIcon, PhoneIcon} from '@heroicons/react/outline'

const main = [
    {name: 'Nosotros', href: '#Nosotros'},
    {name: 'Ecoges-solar', href: '#'},
    {name: 'Valores', href: '#Valores'},
];

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">&copy; 2022 <Link href="https://www.hevprojects.com/"><a className="text-black">HEV Projects</a></Link> All rights
                    reserved.</p>
            </div>
        </footer>
    )
}


export default Footer;