import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {useRouter} from "next/router";

const Whatsapp = () => {
    const contactUrl = encodeURI(
        "https://wa.me/34676374041?text=Hola, estoy contactando desde la web de Ecoges Solar. Necesito mas información, "
    );
    const router = useRouter()
    const handleContact = () =>{
        router.push(contactUrl)
    }
    return (
            <div className="fixed bottom-16 right-10 z-50 sm:hidden bg-transparent">
                <button onClick={handleContact} className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center text-white p-3">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                </button>
            </div>
    )
}

export default Whatsapp;

