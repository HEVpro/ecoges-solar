import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import Navbar from "./navbar";

const FooterAds = () => {
    const [onPrivacy, setOnPrivacy] = useState<boolean>(false)
    const router = useRouter()
    const {t} = useTranslation('common');

    const links = [
        {name: "Nosotross", href: "us"},
        {name: "Ayudas", href: "aids"},
        {name: "Equipamiento", href: "equipment"},
        {name: "Misión", href: "mission"},
        {name: "Contacto", href: "contact"},
    ]


    return (
      <footer className="bg-white text-black">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          {!onPrivacy && (
            <section
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              {links.map((x, index) => {
                return (
                  <Link key={index} href={"/#" + x.href}>
                    <a className="mx-3 lg:mx-3 xl:mx-6 hover:text-darkGreen hover:underline hover:decoration-2 hover:underline-offset-4">
                      {x.name}
                    </a>
                  </Link>
                );
              })}
            </section>
          )}
          <p className="mt-8 text-center text-black">
            &copy; 2022{" "}
            <Link href="https://www.hevprojects.com/">
              <a className="text-black font-bold text-md">HEV Projects</a>
            </Link>{" "}
            All rights reserved.
          </p>

        </div>
      </footer>
    );
}


export default FooterAds;
