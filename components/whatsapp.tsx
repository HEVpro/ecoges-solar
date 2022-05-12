import {useRouter} from "next/router";
import Image from 'next/image'

const Whatsapp = () => {
    const contactUrl = encodeURI(
        "https://wa.me/34676374041?text=Hola, estoy contactando desde la web de Ecoges Solar. Necesito mas información, "
    );
    const router = useRouter()
    const handleContact = () =>{
        router.push(contactUrl)
    }
    return (
            <div className="fixed bottom-20 right-4 sm:right-6 sm:bottom-24 z-40 bg-transparent">
                <button onClick={handleContact} className="w-14 h-14 sm:w-16 sm:h-16 z-50 bg-softGreen rounded-full flex items-center justify-center text-white p-2">
                    <Image
                        src={"/whatsapp.png"}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                    />
                </button>
            </div>
    )
}

export default Whatsapp;

