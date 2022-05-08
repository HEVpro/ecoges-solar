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
            <div className="fixed bottom-10 right-6 z-50 sm:hidden bg-transparent">
                <button onClick={handleContact} className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center text-white">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m112.64 400.05 20.25-74a142.49 142.49 0 0 1-19.06-71.37c0-78.71 64.07-142.75 142.76-142.75a142.79 142.79 0 0 1 142.77 142.89c0 78.71-64.08 142.76-142.76 142.76h-.06a142.61 142.61 0 0 1-68.22-17.38Zm79.18-45.7 4.34 2.57a118.49 118.49 0 0 0 60.39 16.54h.05c65.4 0 118.63-53.23 118.66-118.66a118.66 118.66 0 1 0-219.18 63.05l2.82 4.49-12 43.79Z M328.52 288.76c-.89-1.49-3.27-2.38-6.84-4.17s-21.1-10.41-24.37-11.59-5.65-1.79-8 1.79-9.21 11.61-11.29 14-4.16 2.68-7.73.89-15.06-5.55-28.68-17.71c-10.61-9.46-17.77-21.14-19.84-24.71s-.22-5.5 1.56-7.28c1.61-1.6 3.57-4.17 5.35-6.25a24.49 24.49 0 0 0 3.57-6 6.58 6.58 0 0 0-.3-6.25c-.89-1.79-8-19.34-11-26.48-2.89-7-5.84-6-8-6.13s-4.46-.12-6.84-.12a13.11 13.11 0 0 0-9.51 4.46c-3.27 3.57-12.48 12.2-12.48 29.76s12.78 34.52 14.57 36.9 25.15 38.41 60.94 53.86a204.73 204.73 0 0 0 20.34 7.52 48.89 48.89 0 0 0 22.46 1.41c6.86-1 21.11-8.63 24.08-17s2.9-15.41 2.01-16.9Z"
                            fill="white"
                            fillRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
    )
}

export default Whatsapp;

