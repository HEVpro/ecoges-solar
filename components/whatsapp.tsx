import Image from 'next/image'
import Link from "next/link";
import WhatsappLogo from '../public/whatsapp.png'

const Whatsapp = () => {
    const contactUrl = encodeURI(
        "https://wa.me/34676374041?text=Hola, estoy contactando desde la web de Ecoges Solar. Necesito mas información, "
    );
    return (
            <div className="fixed bottom-20 w-14 h-14 sm:w-16 p-2 sm:h-16 rounded-full bg-softGreen right-4 sm:right-6 sm:bottom-24 z-40">
                <Link href={contactUrl}>
                    <a href={contactUrl}>
                        <Image src={WhatsappLogo} layout="responsive" alt={"Whatsapp logo"}/>
                    </a>
                </Link>
            </div>
    )
}

export default Whatsapp;

