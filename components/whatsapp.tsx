import Data from '../data.json';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const Whatsapp = () => {
    return (
        <div>
            <button className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center text-white p-3">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </button>
        </div>
    )
}

export default Whatsapp;

