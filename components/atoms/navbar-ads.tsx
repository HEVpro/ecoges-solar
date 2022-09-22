import Image from "next/image";
import Logo from "../../public/ecoges-logo.png";
import React from "react";
import Link from "next/link";

const NavbarAds = () => {
    return(
        <nav className="flex items-center w-full justify-center bg-darkGreen py-2">
            <div className="w-40">
                <Link href="/">
                    <a href={"/"}>
                        <Image src={Logo} layout="responsive" alt={"Ecoges logo"}/>
                    </a>
                </Link>
            </div>
        </nav>
    )
}
export default NavbarAds
