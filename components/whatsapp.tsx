import Data from '../data.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Whatsapp = () => {
    return (
            <div className="inline sticky top-32 translate-x-72 sm:hidden bg-transparent">
                <button className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center text-white p-3">
                    <FontAwesomeIcon icon={faWhatsapp}/>
                </button>
            </div>
    )
}

export default Whatsapp;

