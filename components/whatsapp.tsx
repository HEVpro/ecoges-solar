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
            <div className="fixed bottom-8 right-8 z-40 sm:hidden bg-transparent">
                <button onClick={handleContact} className="w-16 h-16 z-50 bg-softGreen rounded-full flex items-center justify-center text-white p-2">
                    <Image
                        src={"/whatsapp.png"}
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                </button>
            </div>
    )
}

export default Whatsapp;

