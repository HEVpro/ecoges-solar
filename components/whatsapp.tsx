import Image from 'next/image'
import Link from "next/link";
import WhatsappLogo from '../public/Whatsapp.png'
import WhatsappDesktop from '../public/whatsapp.png'
import {useMedia} from "react-use";

const Whatsapp = () => {
    const isMobile = useMedia('(max-width: 480px')
    const contactUrl = encodeURI(
        "https://wa.me/34676374041?text=Hola, estoy contactando desde la web de Ecoges Solar. Necesito mas información, "
    );
    return (
            <div className="fixed bottom-20 w-14 h-14 p-1 sm:w-16 sm:h-16 rounded-full bg-softGreen right-4 sm:right-6 sm:bottom-24 z-40 sm:p-2">
                <Link href={contactUrl}>
                    <a href={contactUrl}>
                        <Image src={isMobile ? WhatsappLogo : WhatsappDesktop} layout="responsive" alt={"Whatsapp logo"}/>
                    </a>
                </Link>
            </div>
    )
}

export default Whatsapp;

