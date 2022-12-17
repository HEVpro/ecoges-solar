import React from 'react';
import Link from "next/link";
import {FB_PIXEL_ID} from "../lib/fbq"
import {useLocalStorage} from "react-use";
import {Transition} from "@headlessui/react";
import {useTranslation} from "next-i18next";

function CookieConsent() {
    const {t} = useTranslation('common');
    const [responded, setResponded] = useLocalStorage("responded", false);

    import('react-facebook-pixel')
        .then(module => module.default)
        .then(ReactPixel => {
            ReactPixel.init(FB_PIXEL_ID as string)
        })
    const handleConsent = () => {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.grantConsent()
            })
        setResponded(true)
    }
    const handleRevoke = () => {
        import('react-facebook-pixel')
            .then(module => module.default)
            .then(ReactPixel => {
                ReactPixel.revokeConsent()
            })
        setResponded(true)
    }

    return (
        <Transition
            appear
            show={!responded}
            enter="transition duration-150 delay-500"
            enterFrom="opacity-0 translate-y-full"
            enterTo="!opacity-100 !translate-y-0"
            leave="transition duration-150"
            leaveFrom="!opacity-100"
            leaveTo="!opacity-0"
            className="opacity-0 translate-y-full fixed px-4 py-6 shadow bottom-0 left-0 w-full z-50"
        >
            <div className={"fixed bottom-0 left-0  w-full h-20 bg-gray-100 flex items-center justify-center z-50 border-t-2 border-gray-100 shadow-md"}>
                <span>{t('cookie-explanation')}
                    <Link href={"/privacy-policy"}>
                        <a className={"underline hover:text-accent-green mx-2"}>{t('privacy-policy')}</a>
                    </Link>
                    {t('cookie-question')}
                </span>
                <button onClick={handleConsent} className={"mx-4 bg-darkGreen text-white px-4 py-1 rounded-md hover:scale-105 shadow-md"}>
                    {t('accept-cookie')}
                </button>
                <button onClick={handleRevoke} className={"bg-dark-white border-[1px] shadow-md text-black px-4 py-1 rounded-md hover:scale-105"}>
                    {t('decline-cookie')}
                </button>
            </div>
        </Transition>
    );
}

export default CookieConsent;
